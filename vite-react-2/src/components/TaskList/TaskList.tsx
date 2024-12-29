import { useState } from "react";
import "./TaskList.css";

interface Task {
  id: number;
  text: string;
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (!newTask) return;
    setTasks([...tasks, { id: tasks.length, text: newTask }]);
    setNewTask("");
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((todo) => todo.id !== id));
  };

  const moveTaskUp = (id: number) => {
    if (id !== 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[id - 1], updatedTasks[id]] = [
        updatedTasks[id],
        updatedTasks[id - 1],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (id: number) => {
    if (id !== tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[id], updatedTasks[id + 1]] = [
        updatedTasks[id + 1],
        updatedTasks[id],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="task-list">
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleOnChange}
        />
        <button onClick={addTask} className="add-task-button">
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className="task-text">{task.text}</span>
            <button
              onClick={() => removeTask(task.id)}
              className="remove-task-button"
            >
              Remove
            </button>
            <button
              onClick={() => moveTaskUp(task.id)}
              className="move-task-button"
            >
              👆
            </button>
            <button
              onClick={() => moveTaskDown(task.id)}
              className="move-task-button"
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TaskList;
