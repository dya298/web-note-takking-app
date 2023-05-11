import React from "react";

export default function SelectTopics({ topics, selectValue, setSelectValue }) {
    return (
        <select
            className="form-select"
            name="topic_id"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)} >
            <option value='' disabled>Topics</option>
            {topics.map(({ _id, title }) => (
                <option key={_id} value={_id}>{title}</option>
            ))}
        </select>
    )

}
