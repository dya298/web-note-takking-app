import React, { useState } from "react";
import NoteModal from "./NoteModal";

export default function NewNote({userImage, refetch, topics, setTopicCurrent }) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div className="card new-note">
      <div className="card-body">
        <div className="hstack gap-3">
          <img
            src={userImage}
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
          {isShowing && <NoteModal topics={topics} setIsShowing={setIsShowing} refetch={refetch} setTopicCurrent={setTopicCurrent}/>}
        </div>
      </div>
    </div>
  );
}
