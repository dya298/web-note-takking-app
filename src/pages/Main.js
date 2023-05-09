import Note from "../components/Main/Note";
import Search from "../components/Main/Search";
import Topics from "../components/Main/Topics";
import "../css/main.css";
import logo from "../Asset/img/DyDy.jpg";
import NewNote from "../components/Main/NewNote";
import AuthService from "../service/AuthService";

export default function Main() {
  const user = JSON.parse(localStorage.getItem("user"));
  const refresh_token = JSON.parse(localStorage.getItem("refresh_token"));
  const logout = () => {
    AuthService.logout({
      "res_refresh_token": refresh_token
    })
      .then((response) => {
        localStorage.clear();
        window.location.href = '/'
      })
      .catch((error) => {
        console.log("logout error: " + error);
      });
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
          <Topics />
        </div>
        <div className="col-6">
          <div className="vstack gap-3">
            <NewNote userImage={user.image}/>
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
