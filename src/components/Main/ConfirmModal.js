import React from "react";
import "../../css/confirm-modal.css";

export default function ConfirmModal({ setIsShowingConfirm, handelDeleteNote }) {
  return (
    <>
      <div className="confirm-container" onClick={() => setIsShowingConfirm(false)} />
      <div className="confirm-modal">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setIsShowingConfirm(false)}
        ></button>
        <div className="hstack gap-3">
          <p className="fw-bold mt-3">Are you sure you want to delete this note?</p>
        </div>
        <button className="btn btn-dark" onClick={() => handelDeleteNote()} >Delete</button>
        <button className="btn btn-dark float-end" onClick={() => setIsShowingConfirm(false)} >Cancel</button>
      </div>
    </>
  );
}
