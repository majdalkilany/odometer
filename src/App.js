import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header>
      <h3>hi there from header, </h3>
      <span> ... {props.message}</span>
    </header>
  );
}


function Footer(props) {
  return (
    <footer>
      <p>hi there from footer, </p>
      <span>  ... {props.message}</span>
    </footer>
  );
}


function App() {
return (
  <>
  <div className="App">
    <Header className="App-header" message='hi from app header'/>
    <Odometer />
    <Footer message='©2020 Majd'/>
  </div>
  </>
);
}

class Odometer extends React.Component{
  constructor(){
      super();
      this.state = {
          miles : 0
      }
  }

  downHandler(){
      let miles = this.state.miles -1;

      if (miles < 0){
          miles = 0;
      }

      this.setState({
          miles 
      })
  }

  changeMile(change){
      let miles = this.state.miles + change; 

      if (miles>=10000){
          miles = miles % 10000;          
      }

      this.setState({
          miles 
      })
  }

  render(){
      return (
          <>
          <button onClick={() => this.changeMile(1)}>1</button>
          <button onClick={() => this.changeMile(10)}>10</button>
          <button onClick={() => this.changeMile(100)}>100</button>
          <button onClick={() => this.changeMile(1000)}>1000</button>
          <h2>miles on Odometer: {String(this.state.miles).padStart(4,"0")}</h2>
          </>
      )
  }

}


export default App;
