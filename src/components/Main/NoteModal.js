import React from "react";
import "../../css/note-modal.css";

export default function NoteModal({ setIsShowing }) {
  return (
    <div className="note-container">
      <div className="note-modal">
        <button
          type="button"
          className="btn-close float-end"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
