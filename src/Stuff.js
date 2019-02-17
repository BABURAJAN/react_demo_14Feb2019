import React, { Component } from "react";
import Child from "./Home";
 
class Stuff extends Component {
  render() {
	var  user={
		  name: "babu",
		  hobbies :["sleep"]
	  };
    return (
      <div>
        <h2>STUFF</h2>
		<div>
        <Child name={"rajan"} age={25} user={user}/>
		<Child />
         </div>
        <p>Redux is a tool for managing both data-state and UI-state in JavaScript applications.</p>
        <ol>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
          <li>list 4</li>
          <li>list 5</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;