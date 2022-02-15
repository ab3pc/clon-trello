import React from "react";
import Task from "./Task";
import { TaskType } from "./TodoList";
import FilterButtons from "./FilterButtons";
import { FilterValuesType } from "./App";

type TaskListProps = {
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValuesType)=> void
  changeStatus: (id:string, isDone:boolean)=> void
};

const TaskList = ({ tasks, removeTask, changeFilter, changeStatus }: TaskListProps) => {
  return (
    <>
      <ul>
      {tasks.length ? tasks.map((item) => (
        <Task changeStatus={changeStatus} removeTask = {removeTask} key={item.id} {...item} />
      )): <div>О_о Нет тасков</div>}
    </ul>
    <FilterButtons changeFilter={changeFilter} />
    </>
  
  );
};

export default TaskList;
