import { useQuery } from "@apollo/client";
import React, { Suspense, lazy, useEffect, useState } from "react";
import logo from "../Asset/img/DyDy.jpg";
import NewNote from "../components/Main/NewNote";
import Search from "../components/Main/Search";
import Topics from "../components/Main/Topics";
import "../css/main.css";
import AuthService from "../service/AuthService";
import { LOAD_NOTES, LOAD_TOPICS } from "../service/Queries";

export default function Main() {
  const user = JSON.parse(localStorage.getItem("user"));
  const refresh_token = JSON.parse(localStorage.getItem("refresh_token"));
  const { data: topicList } = useQuery(LOAD_TOPICS);
  const [topicCurrent, setTopicCurrent] = useState("");
  const [topics, setTopics] = useState([]);
  const { data, refetch } = useQuery(LOAD_NOTES, {
    variables: {
      topic_id: topicCurrent
    }
  });
  const Note = lazy(() => import('../components/Main/Note'));

  useEffect(() => {
    if (topicList) {
      setTopics(topicList.topics)
      setTopicCurrent(topicList.topics[0]._id)
    }
  }, [topicList])

  const logout = () => {
    AuthService.logout({
      "res_refresh_token": refresh_token
    })
      .then((response) => {

      })
      .catch((error) => {
        console.log("logout error: " + error);
      });
    localStorage.clear();
    window.location.href = '/'
  }

  const renderNotes = () => {
    if (data) {
      const notes = Object.values(data)[0];
      console.log();
      if (notes.edges.length <= 0)
        return <div className="text-light text-center">NO DATA</div>
      return notes.edges.map((e) => (
        <Note
          key={e.node._id}
          time={e.time}
          user={e.node.user}
          note={e.node}
          userCurrent={user}
          refetch={refetch}
          topics={topics}
        />
      )
      )
    }
  }
  return (
    <div className="container-fluid">
      {/* header */}
      <div className="row sticky-top pt-3 pb-3 header">
        <div className="col-3">
          <img
            src={logo}
            className="card-img logo rounded-circle ms-3"
            alt="..."
          />
        </div>
        <div className="col-6">
          <Search />
        </div>
        <div className="col-3">
          <span className="float-end me-3 user-container">
            <img
              src={user.image}
              className="card-img user-img rounded-circle"
              alt="..."
            />
            <div className="vstack user-menu">
              <button type="button" className="user-name btn btn-dark disabled">{user.name}</button>
              <button type="button" className="btn btn-dark" onClick={logout}>Logout</button>
            </div>
          </span>
        </div>
      </div>
      {/* Body */}
      <div className="row mt-3">
        <div className="col-3">
          <Topics topics={topics} topicCurrent={topicCurrent} setTopicCurrent={setTopicCurrent} />
        </div>
        <div className="col-6">
          <div className="vstack gap-3">
            <NewNote topics={topics} userImage={user.image} refetch={refetch} setTopicCurrent={setTopicCurrent}/>
            <Suspense fallback={<div>Loading ...</div>}>
              {renderNotes()}
            </Suspense>
            <div></div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
