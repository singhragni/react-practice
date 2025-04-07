import { Component, useState } from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends Component{
  constructor(){
    super()
  }
  componentDidMount(){

  }

  render(){
    return (
      <div className="about-page">
      <h1>About</h1>
      <UserClass name={"ragini"}/>
      <UserClass name={"saurav"}/>
     
      </div>
    );
  }
}
// const About = () => {
//     const [number,setNumber] = useState(0);

  // return (
  //   <div className="about-page">
  //   <h1>About</h1>
  //   <UserClass name={"ragini"}/>
  //   <h2>{number}</h2>
  //   {/* <button onClick={inC}>+</button> */}
  //     {<User/>}
  //   </div>
  // );
// };

export default About;
