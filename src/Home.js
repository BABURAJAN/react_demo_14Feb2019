import React, { Component } from "react";
 
class Home extends Component {
  render() {
	  console.log(this.props);
	   const greeting = 'Welcome to React Home';
    return (
      <div>
       
	    <h1>{greeting}</h1>
		<h1>{this.props.name}</h1>
		<p>{this.props.age}</p>
        
      </div>
    );
  }
}
 
export default Home;