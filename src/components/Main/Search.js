import React from "react";

export default function Search() {
  return (
    <div className="hstack gap-3">
      <input
        className="form-control me-auto border-light"
        type="text"
        placeholder="Search..."
        aria-label="Search..."
      />
      <button type="button" className="btn btn-outline-light">
        Search
      </button>
    </div>
  );
}
