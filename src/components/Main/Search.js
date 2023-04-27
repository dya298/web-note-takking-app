import React from "react";

export default function Search() {
  return (
    <div class="hstack gap-3">
      <input
        class="form-control me-auto border-light"
        type="text"
        placeholder="Search..."
        aria-label="Search..."
      />
      <button type="button" class="btn btn-outline-light">
        Search
      </button>
    </div>
  );
}
