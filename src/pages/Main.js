import Note from "../components/Main/Note";
import Search from "../components/Main/Search";
import Topics from "../components/Main/Topics";
import "../css/main.css";
import logo from "../Asset/img/DyDy.jpg";
import NewNote from "../components/Main/NewNote";

export default function Main() {
  return (
    <div className="main-container">
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
              src={logo}
              className="card-img user-img rounded-circle"
              alt="..."
            />
            <div className="user-menu">
              <a href="/">Logout</a>
            </div>
          </span>
        </div>
      </div>
      {/* Body */}
      <div className="row mt-5">
        <div className="col-3">
          <Topics />
        </div>
        <div className="col-6">
          <div className="vstack gap-3">
            <NewNote />
            <Note />
            <Note />
            <Note />
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
