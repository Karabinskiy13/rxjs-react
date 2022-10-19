import React, { useState } from "react";
import { addTask } from "../store/store";

const TodoForm = () => {
  const [info, setInfo] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(info);
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder="Add new TODO"
          onChange={(e) => setInfo(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoForm;
