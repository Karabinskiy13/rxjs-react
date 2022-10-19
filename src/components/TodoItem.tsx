import { deleteTask, ITodo, toggleTask } from "../store/store";

import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button, Typography } from "@mui/material";

type Props = {
  task: ITodo;
};

const TodoItem = ({ task }: Props) => {
  return (
    <div>
      <Typography variant="h5">{task.text}</Typography>
      <Button
        onClick={() => toggleTask(task.id)}
        variant="contained"
        color="success"
      >
        <DoneIcon />
      </Button>
      <Button
        onClick={() => deleteTask(task.id)}
        variant="contained"
        color="error"
      >
        <CancelIcon />
      </Button>
    </div>
  );
};

export default TodoItem;
