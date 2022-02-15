import React from "react";

type AddTasksPropsType = {
  addTask: (title: string) => void;
};

const AddTaskForm: React.FC<AddTasksPropsType> = ({ addTask }) => {

  const [input, setInput] = React.useState("");

  const handlerOnchange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInput(e.currentTarget.value);
  };
 
  const handlerAddTask: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (input) {
      addTask(input);
      setInput("");
    }
  };


  return (
    <div>
      <form onSubmit={handlerAddTask}>
        <input name="titletask"
          value={input}
          onChange={handlerOnchange}
          
          type="text"
          minLength={3} maxLength={20} 
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
