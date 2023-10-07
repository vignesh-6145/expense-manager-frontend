import { useParams } from "react-router-dom";

export function Expenses() {
  const { userId } = useParams();
  return (
    <div className="container">{<h1>Expenses Component {userId}</h1>}</div>
  );
}
