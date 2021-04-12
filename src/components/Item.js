import React from "react";

class Item extends React.Component {
  state = {
    color: localStorage.getItem(this.props.index + "color"),
    line: localStorage.getItem(this.props.index + "line"),
    marked: false,
    tempColor: "",
    tempLine:""
  };

  markDone = () => {
    const style = this.state.color;
    if (style === "") {
      localStorage.setItem(this.props.index + "color", "#319795");
      localStorage.setItem(this.props.index + "line", "line-through");
    } else {
      localStorage.setItem(this.props.index + "color", "");
      localStorage.setItem(this.props.index + "line", "");;
    }
    window.location.reload();
  };

  hoverTrash = () => {
    this.setState({ color: "red", line: "line" });
  };

  leaveTrash = () => {
    return this.setState({
        color: localStorage.getItem(this.props.index + "color"),
        line: localStorage.getItem(this.props.index + "line"),
        marked: true,
      });
  };

  render() {
    return (
      <p class="item">
        <span
          class="title"
          onClick={this.markDone}
          style={{
            backgroundColor: this.state.color,
            "text-decoration-line": this.state.line,
          }}
          onclick={this.markDone}
        >
          {this.props.item}
        </span>
        <svg
          onMouseLeave={this.leaveTrash}
          onMouseOver={this.hoverTrash}
          onClick={() => {
            this.props.onDelete(this.props.index);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash trashcan"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </p>
    );
  }
}

export default Item;
