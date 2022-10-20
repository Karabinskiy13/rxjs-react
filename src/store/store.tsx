import { BehaviorSubject } from "rxjs";
import moment from "moment";

export interface ITodo {
  id: number;
  text: string;
  done: boolean;
  time: string;
}

export const tasks: ITodo[] = [
  {
    id: 1,
    text: "Learn JavaScript",
    done: true,
    time: moment().calendar(),
  },
  {
    id: 2,
    text: "Learn React",
    done: true,
    time: moment().calendar(),
  },
];

export const tasks$ = new BehaviorSubject(tasks);

export const addTask = (text: string) => {
  tasks.push({
    id: Math.random() * 100,
    text,
    done: false,
    time: moment().calendar(),
  });
  tasks$.next(tasks);
};

export const toggleTask = (id: number) => {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.done = !task.done;
    tasks$.next(tasks);
  }
};

export const deleteTask = (id: number) => {
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    tasks$.next(tasks);
  }
};
