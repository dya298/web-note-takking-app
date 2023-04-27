import React, { useState } from "react";
import NoteModal from "./NoteModal";

export default function NewNote() {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="card new-note">
      <div className="card-body">
        <div className="hstack gap-3">
          <img
            src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet.jpg"
            className="card-img avatar rounded-circle"
            alt="avt"
          />
          <button
            type="button"
            className="btn btn-light w-100 text-start p-2"
            onClick={() => setIsShowing(true)}
          >
            Write something...
          </button>
          {isShowing && <NoteModal />}
        </div>
      </div>
    </div>
  );
}
