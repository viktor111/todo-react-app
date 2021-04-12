import React from "react";
import { Button, Input, Box, Divider } from "@chakra-ui/react";

class ToDoInput extends React.Component {
  render() {
    return (
      <Box m="10px">
        <div class="form">
          <form onSubmit={this.props.onInputHandler}>
            <div class="row">
              <div class="col-sm-12 col-lg-4 col-md-4">
                <Input
                  placeholder="Eat cereal"
                  value={this.props.currentInput}
                  onChange={this.props.currentInputHandler}
                  type="text"
                  class="input"
                />
              </div>
              <div class="col-sm-12 col-lg-1 col-md-4 inputBtn">
                <Button colorScheme="teal" type="submit">
                  Add
                </Button>
              </div>
              <div class="col-sm-12 col-lg-1 col-md-4 inputBtn">
                <Button
                  _hover={{ bgGradient: "linear(to-r, red.500, yellow.500)" }}
                  colorScheme="teal"
                  variant="outline"
                  onClick={this.props.clearList}
                >
                  Clear all
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Box>
    );
  }
}

export default ToDoInput;
