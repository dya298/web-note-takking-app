import React, { useEffect, useState } from "react";
import "../../css/note.css";
import NoteModal from "./NoteModal";
import { useMutation } from "@apollo/client";
import { DELETE_NOTE } from "../../service/Mutation";
import ConfirmModal from "./ConfirmModal";
export default function Note({ time, user, note, userCurrent, refetch, topics }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [isShowingConfirm, setIsShowingConfirm] = useState(false);

  const [deleteNote] = useMutation(DELETE_NOTE);
  let container = React.createRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  });
  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setShowMenu(false);
    }
  }
  const handelDeleteNote = () => {
    deleteNote({ variables: { id: note._id } });
    refetch();
  }
  return (
    <div className="card note">
      {user._id === userCurrent._id &&
        <span className="contaner-menu-modify" ref={container}>
          <button className="btn btn-dark btn-modify" onClick={() => setShowMenu(true)}>
            <i className="bi bi-three-dots-vertical"></i>
          </button>
          {
            showMenu &&
            <div className="vstack menu-modify border border-light bg-drank rounded">
              <button type="button" className="user-name btn btn-dark" onClick={() => setIsShowing(true)}>Edit</button>
              <button type="button" className="user-name btn btn-dark"
                onClick={() => setIsShowingConfirm(true)}>
                Delete</button>
            </div>
          }
        </span>}
      <div className="hstack gap-3 ms-3 mt-3">
        <img
          src={user.image}
          className="card-img avatar rounded-circle"
          alt="avt"
        />
        <div className=" vstack">
          <span className="fw-bold">{user.name}</span>
          <span>{time}</span>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p>{note.desc}</p>
        {note.profile_img && <img
          src={note.profile_img}
          className="card-img"
          alt="..."
        />}
      </div>
      {isShowing && <NoteModal setIsShowing={setIsShowing} topics={topics} note={note} refetch={refetch} />}
      {isShowingConfirm && <ConfirmModal setIsShowingConfirm={setIsShowingConfirm} handelDeleteNote={handelDeleteNote} />}
    </div>
  );
}
