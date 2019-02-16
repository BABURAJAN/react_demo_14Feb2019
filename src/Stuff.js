import React, { Component } from "react";
import Child from "./Home";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>STUFF</h2>
		<div>
        <Child />
         </div>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;