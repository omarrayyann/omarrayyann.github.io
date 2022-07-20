import './Main.css';
import React from 'react';

class Home extends React.Component {
  render(){
  return(
      <Introduction/>
  )}
}


class Introduction extends React.Component {

    introductionText = "My name is Omar Rayyan and I’m a sophmore double majoring in Mechanical Engineering and Computer Science at New York University Abu Dhabi. I love solving problems and creating things from scratch. I am currently working as an engineering research assistant at AIM LAB of New York University Abu Dhabi while interning at ProgressSoft as a software engineering intern."

    render(){
    return(
        <div>
       <h1>
        Hello
       </h1> 
       <h2>
       {this.introductionText}
       </h2>
       </div>
    )}
  }

  
export default Home;
