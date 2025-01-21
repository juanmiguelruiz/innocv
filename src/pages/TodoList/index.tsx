import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LITERALS } from '@/constants';
import './styles.css';

interface Task {
  id: string; // change to string because we use uuid to have a unique id
  text: string;
  completed: boolean;
}

const TodoList = (): JSX.Element => {
  // we avoid importing react if we use the latest versions and avoid
  // React.FC default implications such as children or defaultProps
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    // we could use a useCallback to avoid building the function in each rendering,
    // although as the function is so basic we would not notice the difference.
    if (!newTask) return; // we avoid empty tasks
    const updatedTasks = [...tasks, { id: uuidv4(), text: newTask.trim(), completed: false }];
    setTasks(updatedTasks);
    setNewTask('');
  };

  const toggleTask = (taskId: string) => {
    // we could use a useCallback to avoid building the function in each rendering,
    // although as the function is so basic we would not notice the difference.
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed } // Change only the specific task
          : task
      )
    );
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewTask(event.target.value);
  };

  const handleOnEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') addTask();
  };

  return (
    <>
      <input
        type="text"
        placeholder={LITERALS.TodoList.input.placeholder}
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={handleOnEnterPress}
      />
      <button onClick={addTask}>{LITERALS.TodoList.button}</button>
      <ul>
        {tasks.map(({ id, completed, text }) => (
          <li
            key={id}
            className={`${completed && 'task--completed'}`}
            onClick={() => toggleTask(id)}
          >
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
