import React, { useRef, useState } from "react";
import addImage from "../../Asset/img/addImage.png";
import "../../css/note-modal.css";
import NoteService from "../../service/NoteService";
import SelectTopics from "./SelectTopics";

export default function NoteModal({ setTopicCurrent, topics, refetch, setIsShowing, note = {
  topic_id: "",
  profile_img: null,
  title: "",
  desc: ""
} }) {
  const [messages, setMessages] = useState("");
  const [selectValue, setSelectValue] = useState(note.topic_id);
  const [selectImage, setSelectImage] = useState(note.profile_img);
  const [desc, setDesc] = useState(note.desc);
  const [title, setTitle] = useState(note.title);

  const imageRef = useRef(null)

  const handelTitle = (e) => {
    setTitle(e.target.value);
    resetMessage()
  }
  const handelDesc = (e) => {
    setDesc(e.target.value);
    resetMessage()
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const formData = new FormData(e.currentTarget);
    const values = [...formData.values()];
    if (values.length < 4 || values.includes("")) {
      setMessages("Please provide all values");
      return;
    }
    if (!selectImage) {
      formData.delete("image");
    }
    formData.get('title');
    formData.get('topic_id');
    if (note._id) {
      formData.append('id', note._id);
      if (selectImage && note.profile_img) {
        formData.append('cloudinary_id', note.cloudinary_id);
      }
      NoteService.update(formData).then((response) => {
        if (selectImage && note.profile_img)
          setTimeout(() => {
            finishAction()
          }, 3500);
        else
          finishAction()
      }).catch((error) => {
      })
    }
    else {
      formData.append('user_id', user._id);
      NoteService.add(formData).then((response) => {
        setTopicCurrent(selectValue)
        finishAction()
      }).catch((error) => {
      })
    }
  };

  const finishAction = () => {
    setIsShowing(false);
    refetch();
  }


  const renderMessage = () => {
    if (messages !== "")
      return (
        <div className="message text-danger fw-bold">{messages}</div>
      );
  };

  const handelImage = (e) => {
    setSelectImage(e.target.files[0]);
    resetMessage();
  }
  const resetMessage = (e) => {
    setMessages("");
  }
  const resetFileInput = () => {
    setSelectImage()
    imageRef.current.value = null;
  };
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
              setSelectValue={setSelectValue}
              onChange={resetMessage}
              topics={topics}
            />
            <label htmlFor="inputTag">
              <img
                htmlFor="upload-photo"
                src={addImage}
                className="add-image"
                alt="..."
              />
              <input id="inputTag" type="file" accept="image/*" hidden name="image" onChange={handelImage} ref={imageRef} />
            </label>
          </div>
          {selectImage ?
            <div className="text-center container-preview-image border border-light rounded">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={resetFileInput}
              ></button>
              <img
                className="preview-image rounded"
                src={typeof selectImage === 'string' ? note.profile_img : URL.createObjectURL(selectImage)}
                alt="..."
              />
            </div> :
            <></>}
          <input
            name="title"
            className="form-control"
            onChange={handelTitle}
            value={title}
            placeholder="Title" />
          <textarea
            name="desc"
            className="form-control"
            rows="4"
            cols="200"
            onChange={handelDesc}
            value={desc}
            placeholder="Description" />
          <button type="submit" className="rounded btn btn-dark">
            {note._id ? "Edit" : "Post"}
          </button>
          {renderMessage()}
        </form>
      </div>
    </>
  );
}
