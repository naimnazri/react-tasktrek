import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This simple card</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
        </div>
        <div className="task_delete">
          <img className="delete_icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
