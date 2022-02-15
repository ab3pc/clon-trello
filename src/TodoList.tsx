import React from "react";
import AddTaskForm from "./AddTaskForm";
import { FilterValuesType } from "./App";
import TaskList from "./TaskList";
import ToDoListHeader from "./ToDoListHeader";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
  
};
type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  changeStatus: (id: string, isDone:boolean) => void;
  addTask: (title: string) => void;
  changeFilter: (value: FilterValuesType)=> void
};

const TodoList:React.FC<PropsType> = ({ title, tasks,removeTask, changeFilter, addTask, changeStatus }) => {
  return (
    <div>
      <ToDoListHeader title={title} />
      <AddTaskForm addTask={addTask}/>
      <TaskList changeStatus={changeStatus} changeFilter={changeFilter} removeTask={removeTask} tasks={tasks} />
     
    </div>
  );
};

export default TodoList;
