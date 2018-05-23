import React from 'react';

export default class GamePage extends React.Component{
    constructor(props){
        super(props)
    }

    checkIfCorrect(val){
        console.log(val)
        if(val == true) {
            alert("you win!")
        }
    }
    
    render(){
        console.log(this.props)
        if (this.props.gameContent) {
            let choicesJSX = this.props.gameContent[0].choices.map((choice) =>{
                return <h4 onClick={this.checkIfCorrect.bind(this, choice.isCorrect)}>{choice.name}</h4>
            });

            return  <div>
                    <img className='roundPic' src={this.props.gameContent[0].img} alt=''/>
                    {choicesJSX}
                </div>
                } else {
                    return <div></div>
                }
    }
}