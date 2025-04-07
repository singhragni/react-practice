import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1:3
    };
  }

  render() {
    const {count,count1} = this.state
    return (
      <div className="userClass">
        <div> LoggedInUser <UserContext.Consumer>
          {({loggedInUser}) =>{return (<h1> {loggedInUser}</h1>)}}
          </UserContext.Consumer></div>
        <h1>{this.props.name}</h1>
        <h1>Count: {count} </h1>
        <h1>Count1: {count1} </h1>
        <button onClick={()=>{
            this.setState({
                count:this.state.count +7,
            })
        }}>+</button>
        <button onClick={() =>{
            this.setState({
                count1 : this.state.count1+1
            })
        }}>count</button>
      </div>
    );
  }
}

export default UserClass;
