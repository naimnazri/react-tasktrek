import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status, position) => {
    if (activeCard == null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });

    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status={"todo"}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status={"doing"}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status={"done"}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
};

export default App;
