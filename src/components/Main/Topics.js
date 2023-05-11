import React from "react";

export default function Topic({ topics, topicCurrent, setTopicCurrent }) {
  return (
    <div className="vstack gap-3">
      {topics.map(({ title, _id }, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setTopicCurrent(_id)}
          className={topicCurrent === _id ? 'ms-3 rounded btn btn-secondary pt-3 pb' : 'ms-3 rounded btn btn-dark pt-3 pb'}>
          {title}
        </button>
      ))}
    </div>
  )

}
