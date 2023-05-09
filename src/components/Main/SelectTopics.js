import { useQuery } from "@apollo/client";
import { LOAD_TOPICS } from "../../service/Queries";

export default function SelectTopics({ selectValue, setSelectValue }) {
    const { loading, error, data } = useQuery(LOAD_TOPICS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return (
        <select
            className="form-select"
            name="topic_id"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)} >
            <option value='' disabled>Topics</option>
            {data.topics.map(({ _id, title }) => (
                <option key={_id} value={_id}>{title}</option>
            ))}
        </select>
    )

}
