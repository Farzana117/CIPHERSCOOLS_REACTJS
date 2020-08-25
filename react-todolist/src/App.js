import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem() {
    const newItem = {
      //to create a unique id for every new input
      id: 1 + Math.random(),
      value: this.state.newItem,
    };

    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem: "",
    });
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const newList = list.filter((item) => item.id !== id);
    this.setState({
      list: newList,
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "0px",
            padding: "20px 0px 20px 0px",
            backgroundColor: "black",
            color: "white",
            margin: "20px 40px 0px 40px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>TO-DO LIST</h2>
          <input
            type="text"
            placeholder="Add a Task"
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
            style={{
              borderRadius: "7px",
              border: "1px solid white",
              margin: "auto",
              width: "50%",
              height: "20px",
              marginLeft: "250px",
            }}
          />
          <button
            onClick={(e) => this.addItem()}
            style={{
              borderRadius: "10px",
              border: "1px solid #ddd",
              backgroundColor: "lime",
              marginLeft: "10px",
            }}
          >
            <b>Add Task</b>
          </button>
          <br />
        </div>
        <div>
          <ul>
            {this.state.list.map((item) => {
              return (
                <li
                  key={item.id}
                  style={{
                    textAlign: "center",
                    listStyle: "none",
                    backgroundColor: "black",
                    color: "white",
                    margin: "auto",
                    height: "35px",
                    width: "50%",
                    marginBottom: "15px",
                  }}
                >
                  {item.value}
                  <button
                    onClick={() => this.deleteItem(item.id)}
                    style={{
                      border: "0px",
                      backgroundColor: "orange",
                      float: "right",
                      color: "black",
                      padding: "5px",
                      marginTop: "5px",
                      marginRight: "15px",
                      borderRadius: "7px",
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
