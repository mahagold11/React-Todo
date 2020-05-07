import React from 'react';



class TodoForm extends React.Component {
    // Constructor with state
    constructor(props) {
      super(props);
      this.state = {
        itemName: ""
      };
    }

      handleChanges = e => {
          this.setState({ itemName: e.target.value })
      };

      handleAddItem = e => {
          e.preventDefault();
          this.props.addItem(this.state.itemName);
      };

      render() {
          console.log("rendering form");
          return(
            <form onSubmit={this.handleAddItem}>
            <input 
              type="text"
              name="item"
              value={this.state.itemName}
              onChange={this.handleChanges}
            />
            <button>Add To List</button>
        </form>

          )
        }

}

export default TodoForm