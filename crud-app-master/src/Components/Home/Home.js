import { IconButton, InputBase, Slide, Snackbar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import CreateSharpIcon from "@material-ui/icons/CreateSharp";
import "../Global.css";
import TodoList from "../TodoList/TodoList";
import db from "../../Utils/firebase";
import { useSelector } from "react-redux";
import Login from "../Login/Login";

function Home() {
  const [addtodo, setAddtodo] = useState("");
  const [open, setOpen] = useState(false);
  const [newtodo, setNewTodo] = useState([]);

  const userData = useSelector((state) => state.auth);
  const { user } = userData;

  const AddTodo = (e) => {
    e.preventDefault();

    if (addtodo === "") {
      alert("Please enter something");
    } else {
      db.collection("TodoApp").doc(user.email).collection("TodoList").add({
        addtodo,
      });
      setAddtodo("");
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    db.collection("TodoApp")
      .doc(user.email)
      .collection("TodoList")
      .onSnapshot((snapshot) =>
        setNewTodo(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [user.email]);

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <h2 style={{ fontWeight: "bold", padding: 10 }}>Hye ! </h2>
        <h2
          style={{
            fontWeight: "light",
            fontFamily: "cursive",
            color: "#131921",
          }}
        >
          {user.email}
        </h2>
      </div>

      <div className="todo_container">
        <div className="todo_add">
          <InputBase
            className="todo_add_input"
            placeholder="Add Todo"
            inputProps={{ "aria-label": "search google maps" }}
            value={addtodo}
            onChange={(e) => setAddtodo(e.target.value)}
          />
          <IconButton
            onClick={AddTodo}
            style={{ marginLeft: 10 }}
            type="submit"
            aria-label="search"
          >
            <CreateSharpIcon style={{ color: "#3F51B5" }} />
          </IconButton>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={open}
            onClose={handleClose}
            autoHideDuration={2000}
            TransitionComponent={Slide}
            variant="success"
            severity="success"
            message={
              <span
                style={{ color: "#4CAF50", fontWeight: "bold", fontSize: 15 }}
              >
                Todo Added
              </span>
            }
          />
        </div>
      </div>
      <div>
        {newtodo.map((newtodo) => {
          // console.log("newtodo", newtodo.id);
          return (
            <TodoList
              key={newtodo.id}
              id={newtodo.id}
              title={newtodo.data.addtodo}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
