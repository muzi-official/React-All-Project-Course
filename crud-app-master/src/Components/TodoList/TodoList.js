import React, { useRef, useState } from "react";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import EditSharpIcon from "@material-ui/icons/EditSharp";
import { IconButton, InputBase, Slide, Snackbar } from "@material-ui/core";
import CheckCircleOutlineSharpIcon from "@material-ui/icons/CheckCircleOutlineSharp";
import db from "../../Utils/firebase";
import { useSelector } from "react-redux";

function TodoList({ title, id }) {
  const userData = useSelector((state) => state.auth);
  const { user } = userData;
  const TaskCompleted = useRef();
  const [editable, setEditable] = useState(false);
  const [updatetodo, setUpdatedtodo] = useState("");
  const [notification, setNotification] = useState({
    open: false,
    msgcolor: "",
    message: "",
  });

  const { msgcolor, message, open } = notification;

  const handleClick = (newState) => () => {
    setNotification({ open: true, ...newState });
  };

  const handleClose = () => {
    setNotification({ ...notification, open: false });
  };

  const TodoCompleted = (item) => {
    setNotification({ open: true, ...item });
    taskCompleted();
  };

  const taskCompleted = () => {
    TaskCompleted.current.style.color = "green";
  };

  const TodoDeleted = (item) => {
    db.collection("TodoApp")
      .doc(user.email)
      .collection("TodoList")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        setNotification({ open: true, ...item });
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const TodoUpdated = () => {
    setEditable(!editable);
  };

  const TodoEdited = () => {
    db.collection("TodoApp")
      .doc(user.email)
      .collection("TodoList")
      .doc(id)
      .update({
        addtodo: updatetodo,
      });
    setEditable(!editable);
  };

  return (
    <>
      <span className="todo_list">
        {editable ? (
          <InputBase
            className="todo_edit_input"
            placeholder="Edit Todo"
            value={updatetodo}
            onChange={(e) => setUpdatedtodo(e.target.value)}
          />
        ) : (
          <span className="todo_list_title">{title}</span>
        )}

        <div>
          <IconButton
            style={{ marginLeft: 7 }}
            type="submit"
            onClick={() => {
              TodoCompleted({
                msgcolor: "#008000",
                message: "Todo Completed",
              });
            }}
            aria-label="search"
          >
            <CheckCircleOutlineSharpIcon ref={TaskCompleted} />
          </IconButton>
          <IconButton
            style={{ marginLeft: 7 }}
            type="submit"
            aria-label="search"
            onClick={() => {
              TodoDeleted({ msgcolor: "#F44336", message: "Todo Deleted" });
            }}
          >
            <DeleteSharpIcon color="error" />
          </IconButton>

          {editable ? (
            <IconButton
              style={{ marginLeft: 7 }}
              type="submit"
              aria-label="search"
              // onClick={handleClick({
              //   msgcolor: "#3F51B5",
              //   message: "Todo Updated",
              // })}
              onClick={() => {
                TodoEdited();
              }}
            >
              <SystemUpdateAltIcon color="primary" />
            </IconButton>
          ) : (
            <IconButton
              style={{ marginLeft: 7 }}
              type="submit"
              aria-label="search"
              // onClick={handleClick({
              //   msgcolor: "#3F51B5",
              //   message: "Todo Updated",
              // })}
              onClick={() => {
                TodoUpdated();
              }}
            >
              <EditSharpIcon color="primary" />
            </IconButton>
          )}
        </div>
      </span>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        TransitionComponent={Slide}
        message={
          <span style={{ color: msgcolor, fontWeight: "bold", fontSize: 15 }}>
            {message}
          </span>
        }
      />
    </>
  );
}

export default TodoList;
