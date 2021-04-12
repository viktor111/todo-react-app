import React from "react";
import Item from "./Item";
import { Divider, Text, Box } from "@chakra-ui/react";

class ToDoDisplay extends React.Component {

  renderBasedOnLocalStorage = () => {
    if(localStorage.getItem("todos") === null) return(
      <Text
      bgGradient="linear(to-l, #006666,#2eb8b8)"
      bgClip="text"
    >
      Currently empty
    </Text>
    );

    return(<span>
        <Box
          p="30px"
          pb="60px"
          m="10px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          {this.props.todoList.map((item, index) => {
            return (
              <>
                <Item
                  index={index}
                  onDelete={this.props.onDelete}
                  key={index}
                  item={item}
                />
                <Divider /> 
              </>
            );
          })}
        </Box>
      </span>)
  }

  render() {
    return (
      this.renderBasedOnLocalStorage()
    );
  }
}

export default ToDoDisplay;
