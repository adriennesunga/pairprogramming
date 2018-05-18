import React from 'react';

export default class GamePage extends React.Component{
    render(){
        let choicesJSX = this.props.gameContent.tv[0].choices.map((choice, i) =>{
            return <h4>{choice}</h4>
        });
        return  <div>
                    <img className='roundPic' src={this.props.gameContent.tv[0].img} alt=''/>
                    {choicesJSX}
                </div>

        
    }
}