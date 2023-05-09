import React, { useState } from "react";
import "../../css/note-modal.css";
import SelectTopics from "./SelectTopics";
import NoteService from "../../service/NoteService";
import addImage from "../../Asset/img/addImage.png";

export default function NoteModal({ setIsShowing }) {
  const [messages, setMessages] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [selectImage, setSelectImage] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const formData = new FormData(e.currentTarget);
    const values = [...formData.values()];
    if (values.length < 2 || values.includes("")) {
      setMessages("");
      console.log("Please provide all values");
      return;
    }
    if (!selectImage) {
      formData.delete("image");
    }
    formData.get('title');
    formData.get('topic_id');
    formData.append('user_id', user._id);
    // const data = Object.fromEntries(formData);
    console.log(formData);
    NoteService.add(formData).then((response) => {
    }).catch((error) => {
    })
  };

  const renderMessage = () => {
    if (messages !== "")
      return (
        <div className="message text-success fw-bold mt-3">{messages}</div>
      );
  };

  const handelImage = (e) => {
    setSelectImage(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <div className="note-container" onClick={() => setIsShowing(false)} />
      <div className="note-modal">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setIsShowing(false)}
        ></button>
        <form className='form vstack gap-3 pt-3' onSubmit={onSubmit}>
          <div className="hstack gap-3">
            <SelectTopics
              selectValue={selectValue}
              setSelectValue={setSelectValue} />
            <label htmlFor="inputTag">
              <img
                htmlFor="upload-photo"
                src={addImage}
                className="add-image"
                alt="..."
              />
              <input id="inputTag" type="file" accept="image/*" hidden name="image" onChange={handelImage} />
              <br />
            </label>
          </div>
          {selectImage ?
            <div>
              <button
                type="button"
                className=""
                aria-label="Close"
                onClick={() => setSelectImage()}
              ></button>
              <img
                className="preview-image rounded"
                src={selectImage}
                alt="..."
              />
            </div> :
            <></>}
          <textarea name="title" className="form-control" rows="4" cols="200" />
          <button type="submit" className="rounded btn btn-dark">
            Post
          </button>
          {renderMessage()}
        </form>
      </div>
    </>
  );
}
