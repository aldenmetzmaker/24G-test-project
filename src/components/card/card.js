import React from "react";
import './card.css';

export default class Card extends React.Component{
    
    constructor(props){
        super(props);
            this.state= {
                drink: [],
                currentImage: null,
                showModal: false

            }
        }
        //assign unique info to each cards state
        componentDidMount(){
            this.setState({
                drink: this.props.info,
                currentImage: this.props.info.images.front
            })
        }
        //change to back image on hover
        changeImageOnHover() {   
            this.setState({
                currentImage: this.state.drink.images.back
            })
        }
        changeImageOnExit(){
            this.setState({
                currentImage: this.state.drink.images.front
            })
        }
    //onClick passes that cards state information back to parent for modal pop up   
    render(){    
        return(
            
            <div className="card">
                <img className="card-image" src = {this.state.currentImage} alt="card pic"  
                    onMouseEnter={() => this.changeImageOnHover()}
                    onMouseLeave={() => this.changeImageOnExit()}
                    onClick = {() => this.props.showModal(this.state.drink)}
                />

            </div>
        )
    }
}

