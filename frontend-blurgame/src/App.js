import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import GamePage from './GamePage';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      gameContent: {tv:[
        {
        img: "/brooklyn.jpg",
        choices:[
            "Brooklyn 99", "The Tudors", "Criminal Minds", "CSI"
        ]
        }
    ]}
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
    return (
      <div className="App container">


        <Switch>
          <Route exact path='/' render={()=>{return <Home />}} />
          <Route path='/gamepage' render={()=>{return <GamePage gameContent={this.state.gameContent} />}} />
        </Switch>        
      </div>
    );
  }
}