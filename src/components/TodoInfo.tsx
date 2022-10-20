import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import { ITodo, tasks$ } from '../store/store';

import { HeadInfo, TaskInfo } from '../style/Todo';

const TodoInfo = () => {
  const [tasks, setTasks] = useState<ITodo[]>([]);

  useEffect(() => {
    tasks$.subscribe((tasks) => setTasks([...tasks]));
  }, []);

  const unDoneTasks = tasks.filter((t) => t.done === false).length;

  return (
    <div>
      <HeadInfo>
        <Typography variant="h2">RxJs+React TodoList</Typography>
      </HeadInfo>
      <TaskInfo>
        {unDoneTasks !== 0 ? (
          <Typography variant="h6"> Tasks done {unDoneTasks}</Typography>
        ) : (
          <Typography variant="h6">Tasks done {unDoneTasks}</Typography>
        )}
      </TaskInfo>
    </div>
  );
};

export default TodoInfo;
