import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {User} from "../user/User"
import "./Card.css";

export const Card = ({ id, title, users }) => {
    console.log("users----------", users);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="card"
    >
      {title}

      {users.map((user) => <User userId={user.userId} userName={user.userName}/>)}
    </div>
  );
};
