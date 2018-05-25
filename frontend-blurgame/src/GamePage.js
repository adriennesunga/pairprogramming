import React from 'react';

export default class GamePage extends React.Component{
    constructor(){
        super();
        this.state = {
            round: 1,
            nextButtonValidate: true,
            attempts: 0
        }
    }

    checkIfCorrect = (val) => {
        if(val !== true) {
            if (this.state.attempts < 3){
                this.setState({
                    attempts: this.state.attempts+1
                });
            }
            else{
                this.setState({
                    attempts: this.state.attempts
                })
            }
            // if attempts are < 3 then add else 
            // if = > 3 , then nothing else will change
        }
        else {
            this.setState({
                nextButtonValidate: false,
                attempts: null
            });
        };
    };
    
    nextButton = () => {
        this.setState({
            round: this.state.round + 1,
            nextButtonValidate: true, //resets button to disabled for the next round
            attempts:0
        });
    };

    render(){
        if (this.state.round < 4){
            let currentRoundInfo = this.props.gameContent[this.state.round-1];
            let choicesJSX = currentRoundInfo.choices.map((choice) =>{
                return <button disabled={this.state.attempts !== null ? false : true} className="choiceButton" onClick={()=>{this.checkIfCorrect(choice.isCorrect)}}>{choice.name}</button>
            });
            
            return  <div>
                        <img className={"roundPic round" + this.state.attempts} src={currentRoundInfo.img} alt='Image cannot be displayed'/>
                        {choicesJSX}
                        <button disabled={this.state.nextButtonValidate} className="nextButton" onClick={this.nextButton}>Next Round</button>
                    </div>
        }
        else{
            return <div>
                        <p>Game Over!</p>
                        <a href="/">Go back Home</a>
                    </div>
        }
    };
}