import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link, Switch, Redirect} from 'react-router-dom';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      gameContent: {}
    }
  }

  componentDidMount(){
    // Axios.get database from backend and put into state
    axios.get('http://localhost:8080/gamecontent')
         .then(result=>{
           this.setState({
            gameContent: result.data
           });
         });
  };


  render() {
    // if statements for conditional rendering dependent upon user choice
    
    console.log(this.state.gameContent);
    return (
      <div className="App">


        {/* <Switch>
          <Route path='/' render={()=>{return <Home gameContent={this.state}/>}} />
          <Route path='/gamepage' render={()=>{return <GamePage />}} />
        </Switch>         */}
      </div>
    );
  }
}