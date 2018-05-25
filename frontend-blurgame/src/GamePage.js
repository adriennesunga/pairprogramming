import React from 'react';

export default class GamePage extends React.Component{
    constructor(){
        super();
        this.state = {
            round: 1,
            nextButtonValidate: true,
            attempts: 0,
            audioSrc: '/Wrong.mp3'
        }
    }

    // Checks whether the guess clicked by the user is correct or not - updates state accordingly
    checkIfCorrect = (val) => {
        let audio = document.getElementById('audio');
        audio.pause();
        if(val !== true) {
            if (this.state.attempts < 3){
                this.setState({
                    attempts: this.state.attempts+1 //increments the number of attempts and modifies the CSS applied to the picture
                }, ()=>{
                    audio.play();
                });
            }
            else {
                audio.play();
            }
        }
        else {
            this.setState({
                nextButtonValidate: false, //Enables the next button on correct guess
                attempts: null, //sets attempts to null to remove blur on correct guess and disable choice buttons
                audioSrc: '/Correct.mp3'
            }, ()=>{
                audio.play();
            });
        };
    };
    
    // Click handler for the next button - updates state for the next round
    nextButton = () => {
        this.setState({
            round: this.state.round + 1, //increments the round
            nextButtonValidate: true, //resets button to disabled for the next round
            attempts:0, //resets attempts to 0 for the next round
            audioSrc: '/Wrong.mp3'
        });
    };

    render(){
        // Conditionally render the Game over page when rounds are done
        if (this.state.round < 4){
            let currentRoundInfo = this.props.gameContent[this.state.round-1];
            let choicesJSX = currentRoundInfo.choices.map((choice) =>{
                return <div>
                            <button disabled={this.state.attempts !== null ? false : true} className="choiceButton" onClick={()=>{this.checkIfCorrect(choice.isCorrect)}}>{choice.name}</button>
                            <audio id='audio' src={this.state.audioSrc}></audio>
                        </div>
            });
            
            return  <div>
                        <h1>Round {this.state.round}</h1>
                        <img className={"img-fluid round" + this.state.attempts} src={currentRoundInfo.img} alt=""/>
                        {choicesJSX}
                        <button disabled={this.state.nextButtonValidate} className="nextButton" onClick={this.nextButton}>Next Round</button>
                    </div>
        }
        else{
            return <div>
                        <p>Game Over!</p>
                        <a href="/">Go back Home</a>
                        <audio src="/GO.mp3" autoPlay></audio>
                    </div>
        }
    };
}