import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import GamePage from './GamePage';

export default class App extends Component {
  constructor(){
    super();

    // when you initialize app, there's no genre yet
    this.state = {
      genre : null,
      gameContent : null
    }

  }
  //function that sets the state of genre to a value, and is waiting to be called
  handleClick = val => {
    this.setState({
      genre: val
    })
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
    // game = null is a placeholder
    let game = null
    //when state updates , you're able to set a new value to game
    //if it's not null , then make game = the route component 
    if(this.state.gameContent) {
      game = <Route path='/gamepage' render={()=>{return <GamePage gameContent={this.state.gameContent[this.state.genre]} />}} />
    }
    // creates the gamepage route if the condition above is valid
    return (
      <div className="App container">
        <Switch>
          <Route exact path='/' render={()=>{return <Home handleClick={this.handleClick} />}} />
          {game}
        </Switch>        
      </div>
    );
  }
}