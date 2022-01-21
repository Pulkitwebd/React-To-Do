import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../reduxcode/actionCreator/index";
import "./todo.css";

const Todo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.reducer.list);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          placeholder="Task..."
          value={value}
          onChange={handleChange}
        />
        <span className="addBtn" onClick={() => dispatch(addTask(value))}>
          Add
        </span>
      </div>

      <ul>
        {list.map((elem) => {
          return (
            <>
              <li key={elem.id}>
                {elem.data}
                <span
                  className="close"
                  onClick={() => dispatch(removeTask(elem.id))}
                >
                  x
                </span>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
