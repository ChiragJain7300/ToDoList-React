import React, { useState } from "react";
import "../App.css";

function ToDoApp() {
  const [taskArr, setTaskArr] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  function addTask() {
    if (editMode) {
      setTaskArr(
        taskArr.map((task) => {
          if (task.id === editId) task.text = taskText;

          return task;
        })
      );
      setTaskText("");
      setEditMode(false);
      setEditId(null);
    } else {
      if (taskText.trim()) {
        setTaskArr([...taskArr, { id: Math.random(), text: taskText }]);
        setTaskText("");
      }
      console.log(taskArr);
    }
  }
  const deleteTask = (taskId) => {
    const deleteId = taskId;
    const updatedTaskArr = taskArr.filter((task) => task.id != deleteId);
    setTaskArr(updatedTaskArr);
  };
  const editTask = (taskId) => {
    setEditMode(true);
    setEditId(taskId);
    const updateId = taskId;
    const updatedItem = taskArr.find((elem) => elem.id === updateId);
    setTaskText(updatedItem.text);
  };
  return (
    <>
      <div className="taskForm">
        <input
          type="text"
          name="taskname"
          id="taskname"
          value={taskText}
          placeholder="add item ...."
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button className="addBtn" onClick={addTask}>
          {editMode ? "Update" : "Add"}
        </button>
      </div>

      <div className="taskDisplay">
        {taskArr.map((task) => (
          <div className="taskCard" key={task.id}>
            <p className="text">{task.text}</p>
            <button className="addBtn" onClick={() => deleteTask(task.id)}>
              delete
            </button>
            <button className="addBtn" onClick={() => editTask(task.id)}>
              edit
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ToDoApp;
