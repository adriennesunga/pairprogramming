import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component{

    selecttv(){
        this.props.handleClick('tv')
    }
    selectmovies(){
        this.props.handleClick('movies')
    }
    selectmusic(){
        this.props.handleClick('music')
    }

    render(){
        return  <div className="jumbotron">
                    <h1 className="display-4">Welcome to the Game!</h1>
                    <p className="lead">Picture Blur</p>
                    <hr className="my-4" />
                    <p>Choose Your Genre</p>

                    {/* here we are calling a unique function for each genre */}
                    <Link to="/gamepage"> <input onClick={this.selecttv.bind(this)} className='genreicons' type="image" alt='tv' src='/tv.svg'/> </Link>

                    <Link to="/gamepage"> <input onClick={this.selectmovies.bind(this)} className='genreicons' type="image" alt='movies' src='/movie.svg'/> </Link>

                    <Link to="/gamepage"> <input onClick={this.selectmusic.bind(this)} className='genreicons' type="image" alt='music' src='/music.svg'/> </Link>
                </div>
    };
};