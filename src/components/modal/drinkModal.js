import React from "react";
import '../../App.css';
export default class DrinkModal extends React.Component{
    
    render(){
        return(
        <div className="modal-container">
            <header className="drink-header">
                <h1 className="drink-title">{this.props.name}</h1>
            </header>
            <div className="modal-contents">
                <div> 
                    <h2>Ingredients</h2>
                        <ol>
                            {this.props.ingredients.map((ingredient, index) => {
                                            return(
                                              <li>{this.props.ingredients[index]}</li>
                                            )
                            })}
                        </ol>
                </div>
                <div>
                    <h2>How to Prepare</h2>
                        <ol>
                            {this.props.steps.map((step, index) => {
                                  return(
                                        <p>Step {index+1} {this.props.steps[index]}</p>
                                  )
                            })}
                        </ol>
                </div>
                <div>
                    <h2>Make it a mocktail</h2>
                    <p>{this.props.mocktail}</p>
                </div>
                <div>
                    <h2>Glassware</h2>
                    <p>{this.props.glassware}</p>
                </div>
            </div>
        </div>
        )
    }
}