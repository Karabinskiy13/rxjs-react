import React, { useEffect, useState } from "react";

import { ITodo, tasks$ } from "../store/store";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState<ITodo[]>([]);

  useEffect(() => {
    tasks$.subscribe((tasks) => setTasks([...tasks]));
  }, []);

  return (
    <div>
      {tasks.map((t: ITodo) => (
        <TodoItem task={t} key={t.id} />
      ))}
    </div>
  );
};

export default TodoList;
