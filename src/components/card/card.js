import React from "react";
import './card.css';

export default class Card extends React.Component{
    
    constructor(props){
        super(props);
            this.state= {
                currentImage: null,
                instructions: null,
                steps: null,
                ingredients: null,
                glassware: null,
                name: null,
                mocktail: null,
                showModal: false

            }
        }
        //assign unique info to each cards state
        componentDidMount(){
            this.setState({
                currentImage: this.props.info.images.front,
                instructions: this.props.info.steps,
                name: this.props.info.name,
                ingredients: this.props.info.ingredients,
                glassware: this.props.info.glassware,
                mocktail: this.props.info.mocktail,

            })
        }
        //change to back image on hover
        changeImageOnHover() {   
            this.setState({
                currentImage: this.props.info.images.back
            })
        }
        changeImageOnExit(){
            this.setState({
                currentImage: this.props.info.images.front
            })
        }
    //onClick passes that cards state information back to parent for modal pop up   
    render(){
        
        return(
            
            <div className="card">
                <img className="card-image" src = {this.state.currentImage} alt="card pic"  
                    onMouseEnter={() => this.changeImageOnHover()}
                    onMouseLeave={() => this.changeImageOnExit()}
                    onClick = {() => this.props.showModal(this.state.name, this.state.instructions, this.state.ingredients, this.state.mocktail, this.state.glassware)}
                />

            </div>
        )
    }
}
