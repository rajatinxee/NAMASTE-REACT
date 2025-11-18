import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name } = this.props;
    const {count} = this.state;

    return (
      <div className="user-card">
        <h2>Class</h2>
        <h3>Name: {name}</h3>
        <h4>Count: {count}</h4>
        <button
            onClick={() => {
               this.setState({
                count : this.state.count + 1,
               }) 
            }}
        >Increment</button>
      </div>
    );
  }
}

export default UserClass;
