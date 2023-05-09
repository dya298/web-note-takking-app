import { useQuery } from "@apollo/client";
import { LOAD_TOPICS } from "../../service/Queries";

export default function Topic() {
  const { loading, error, data } = useQuery(LOAD_TOPICS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="vstack gap-3">
      {data.topics.map(({ title }, index) => (
        <button key={index} type="button" className="ms-3 rounded btn btn-dark pt-3 pb-3">{title}</button>
      ))}
    </div>
  )

}
