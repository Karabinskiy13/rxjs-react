import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, Typography } from '@mui/material';

import { deleteTask, ITodo, toggleTask } from '../store/store';

import { TodoItemStyle, TodoStyle, Wrapper, TaskInfo } from '../style/Todo';

type Props = {
  task: ITodo;
};

const TodoItem = ({ task }: Props) => (
  <Wrapper>
    <TodoStyle>
      <TodoItemStyle>
        <Typography variant="h5">{task.text}</Typography>{' '}
      </TodoItemStyle>
      <TodoItemStyle>
        <Typography variant="h6">{task.time}</Typography>
      </TodoItemStyle>
      <TaskInfo>
        <Button onClick={() => toggleTask(task.id)} variant="contained" color="success">
          <DoneIcon />
        </Button>
        <Button onClick={() => deleteTask(task.id)} variant="contained" color="error">
          <CancelIcon />
        </Button>
      </TaskInfo>
    </TodoStyle>
  </Wrapper>
);

export default TodoItem;
