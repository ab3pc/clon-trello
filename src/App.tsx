import React from "react";
import { v1 } from "uuid";
import "./App.css";
import TodoList, { TaskType } from "./TodoList";

export type FilterValuesType = "all" | "completed" | "active";

let tasks1: Array<TaskType> = [
  { id: v1(), title: "HTML&CSS", isDone: true },
  { id: v1(), title: "JS", isDone: true },
  { id: v1(), title: "React", isDone: false },
];



function App() {
  const [allTasks, setTasks] = React.useState<Array<TaskType>>(tasks1);
  const [filters, setFilter] = React.useState<FilterValuesType>("all");

  const addTask  = (title: string) => {
   
    let newTask = {
      id: v1(),
      title,
      isDone: false
    }
    setTasks([newTask, ...allTasks ]);
  };


  const removeTask = (id: string) => {
    let newTasks = allTasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };


  const changeFilter = (value: FilterValuesType) => {
    setFilter(value);
    getFilteredTasks()
  };

 
  const getFilteredTasks = () => {
      let innerTasks = allTasks;

    if (filters === "completed") {
      innerTasks = allTasks.filter((item) => item.isDone === true);
      return innerTasks;
    }
    if (filters === "active") {
      innerTasks = allTasks.filter((item) => item.isDone === false);
      return innerTasks;
    }
    return innerTasks;
  };
 
  const changeStatus = (id:string, isDone:boolean) => {
    let newTasks = allTasks.map(w => {
      if(w.id === id) {
        w.isDone = isDone;
        return w
      }
      return w
    })
    setTasks(newTasks)
  }




  return (
    <div className="App">
      <TodoList
        removeTask={removeTask}
        changeStatus={changeStatus}
        addTask = {addTask}
        title="What to learn"
        tasks={getFilteredTasks()}
        changeFilter={setFilter}
      />
    </div>
  );
}
export default App;
