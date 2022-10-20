import React, { useState } from "react";
import { TextField } from "@mui/material";

import { addTask } from "../store/store";

import { TaskInfo } from "../style/Todo";

const TodoForm = () => {
  const [info, setInfo] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(info);
  };

  return (
    <div>
      <TaskInfo>
        <form onSubmit={(event) => handleSubmit(event)}>
          <TextField
            id="outlined-basic"
            label="Todo Input"
            variant="outlined"
            type="text"
            placeholder="Add new TODO"
            onChange={(e) => setInfo(e.target.value)}
          />
        </form>
      </TaskInfo>
    </div>
  );
};

export default TodoForm;
