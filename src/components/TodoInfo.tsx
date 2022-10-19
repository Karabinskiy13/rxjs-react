import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ITodo, tasks$ } from "../store/store";

const TodoInfo = () => {
  const [tasks, setTasks] = useState<ITodo[]>([]);

  useEffect(() => {
    tasks$.subscribe((tasks) => setTasks([...tasks]));
  }, []);

  const unDoneTasks = tasks.filter((t) => t.done === false).length;

  return (
    <header>
      <Typography variant="h2">RxJs+React TodoList</Typography>
      {unDoneTasks !== 0 ? (
        <Typography variant="h6"> Tasks done {unDoneTasks}</Typography>
      ) : (
        <Typography variant="h6">Tasks done {unDoneTasks}</Typography>
      )}
    </header>
  );
};

export default TodoInfo;
