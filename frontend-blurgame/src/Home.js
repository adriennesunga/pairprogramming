import React from 'react';

export default class Home extends React.Component{
    render(){
        return  <div className="jumbotron">
                    <h1 className="display-4">Welcome to the Game!</h1>
                    <p className="lead">Picture Blur</p>
                    <hr className="my-4" />
                    <p>Choose Your Genre</p>
                    <input className='genreicons' type="image" alt='tv' src='/tv.svg'/>
                    <input className='genreicons' type="image" alt='music' src='/music.svg'/>
                    <input className='genreicons' type="image" alt='movie' src='/movie.svg'/>
                </div>
    };
};