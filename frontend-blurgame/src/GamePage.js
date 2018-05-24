import React from 'react';

export default class GamePage extends React.Component{
    constructor(){
        super();
        this.state = {
            round: 1,
            imageClass: 1,
            nextButtonValidate: true
        }
    }

    checkIfCorrect = (val) => {
        if(val !== true) {
            this.setState({
                imageClass: this.state.imageClass+1,
            });
        }
        else {
            // alert("you win!")
            
            // NEED TO WORK ON THIS LOGIC -- BUTTON NOT STAYING DISABLED AT THIRD ROUND CORRECT GUESS
                // Maybe need to do a ternary inline
            if(this.state.round > 3){
                this.setState({
                    nextButtonValidate: true
                });
            }
            else if (this.state.round <=3) {
                this.setState({
                    nextButtonValidate: false
                });
            };
        };
    };
    
    nextButton = () => {
        this.setState({
            round: this.state.round + 1,
            nextButtonValidate: true //resets button to disabled for the next round
        });
    };

    render(){
        let currentRoundInfo = this.props.gameContent[this.state.round-1];
        let choicesJSX = currentRoundInfo.choices.map((choice) =>{
            return <button className="choiceButton" onClick={()=>{this.checkIfCorrect(choice.isCorrect)}}>{choice.name}</button>
        });
        return  <div>
                    <img className={this.state.imageClass} className="roundPic" src={currentRoundInfo.img} alt='Image cannot be displayed'/>
                    {choicesJSX}
                    <button disabled={this.state.nextButtonValidate} className="nextButton" onClick={this.nextButton}>Next Round</button>
                </div>
    }
}