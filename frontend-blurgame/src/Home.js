import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component{

    selecttv = () => {
        this.props.genreSelect('tv')
    }
    selectmovies = () => {
        this.props.genreSelect('movies')
    }
    selectmusic = () => {
        this.props.genreSelect('music')
    }

    render(){
        return  <div className="jumbotron">
                    <h1 className="display-4">Welcome to the Game!</h1>
                    <p className="lead">Picture Blur</p>
                    <hr className="my-4" />
                    <p>Choose Your Genre</p>

                    {/* here we are calling a unique function for each genre */}
                    <Link to="/gamepage"> <input onClick={this.selecttv} gameContent={this.props.gameContent}  className='genreicons' type="image" alt='tv' src='/tv.svg'/> </Link>

                    <Link to="/gamepage"> <input onClick={this.selectmovies} gameContent={this.props.gameContent}  className='genreicons' type="image" alt='movies' src='/movie.svg'/> </Link>

                    <Link to="/gamepage"> <input onClick={this.selectmusic} gameContent={this.props.gameContent} className='genreicons' type="image" alt='music' src='/music.svg'/> </Link>
                </div>
    };
};