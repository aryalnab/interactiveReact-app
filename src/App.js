import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spinLogo:true
    }
    this.toggleSpin = this.toggleSpin.bind(this);
  }



toggleSpin(){
  this.setState(prevState=> ({
    spinLogo : !prevState.spinLogo
  }));
}

  render(){

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} 
        className={this.state.spinLogo ? "App-logo": "App-logo-static" }
        alt="logo"
        onMouseEnter = {this.toggleSpin} 
        onMouseLeave = {this.toggleSpin}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
