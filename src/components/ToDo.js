import React from "react";
import ToDoInput from "./ToDoInput";
import ToDoDisplay from "./ToDoDisplay.js";
import { Text } from "@chakra-ui/react";

class ToDo extends React.Component {
  state = { todos: JSON.parse(localStorage.getItem("todos")), currentToDo: "" };

  inputHandler = (event) => {
    //event.preventDefault();

    let todoListState = this.state.todos;
    const currentToDo = this.state.currentToDo;
    console.log("-------");
    if (currentToDo === "") return;

    if (localStorage.length === 0) this.clearItemList();

    if (todoListState === null) {
      
      localStorage.setItem("todos", JSON.stringify([currentToDo]));
    } else {
      localStorage.setItem(todoListState.length + "color", "");
      localStorage.setItem(todoListState.length + "line", "");

      todoListState.push(currentToDo);

      localStorage.setItem("todos", JSON.stringify(todoListState));

      this.setState({ todos: todoListState, currentToDo: "" });
    }
  };

  currentInputHandler = (event) => {
    const item = event.target.value;
    this.setState({ currentToDo: item });
  };

  clearItemList = () => {
    const theme = localStorage.getItem("chakra-ui-color-mode");
    localStorage.clear();
    this.setState({ todos: [] });
    localStorage.setItem("chakra-ui-color-mode", theme);
  };

  deleteHandler = (index) => {
    let list = this.state.todos;

    list.splice(index, 1);

    this.setState({ todos: list });

    localStorage.removeItem(index + "color");
    localStorage.removeItem(index + "line");

    if (list.length === 0) return localStorage.removeItem("todos");

    localStorage.setItem("todos", list);
  };

  render() {
    return (
      <>
        <Text
          bgGradient="linear(to-l, #006666,#2eb8b8)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          ТoDo Manager
        </Text>

        <ToDoInput
          onInputHandler={this.inputHandler}
          currentInputHandler={this.currentInputHandler}
          clearList={this.clearItemList}
          currentInput={this.state.currentToDo}
        />

        <ToDoDisplay
          todoList={this.state.todos}
          onDelete={this.deleteHandler}
        />
      </>
    );
  }
}

export default ToDo;
