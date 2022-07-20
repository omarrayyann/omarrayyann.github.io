import './NavigationBar.css';
import React from 'react';

class NavigationBar extends React.Component {
  navigationBarButtons = ["Home", "Projects", "Experience", "Contact"];
  render(){
  return(
      <div className="NavigationBar">
      <NavigationBarButton title="HOME" state="pressed"/>
      <NavigationBarButton title="PROJECTS" state="unpressed"/>
      <NavigationBarButton title="EXPERIENCE" state="unpressed"/>
      {/* <NavigationBarButton title="AWARDS" state="unpressed"/> */}
      <NavigationBarButton title="CONTACT" state="unpressed"/>
      </div>
  )}
}

class NavigationBarButton extends React.Component {
  render(){
  return(
      <button className="NavigationBarButton" id={this.props.state}>
        {this.props.title}
      </button>
  )}
}

export default NavigationBar;
