import React from "react";
import { TaskType } from "./TodoList";

type TaskPropsType = {

  removeTask:(id:string) => void;
  changeStatus:(id:string, isDone:boolean) => void;

} & TaskType

const Task:React.FC<TaskPropsType> = ({ id, isDone, title, removeTask, changeStatus} ) => {

  const onChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    changeStatus(id, e.currentTarget.checked)
  }

  return (
    <li key={id}>
      <input onChange={onChangeHandler} type="checkbox" checked={isDone} />
      <span>{title}</span>
      <button onClick={() => removeTask(id)}>x</button>
     
    </li>
  );
};

export default Task;
