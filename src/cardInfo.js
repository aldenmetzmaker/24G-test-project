import React from "react";
import Card from './components/card/card.js';
import './components/card/card.css';
export default class CardInfo extends React.Component{
    state = {
        loading: true,
        drinks: []
    }
    //fetch json for drinks
    async componentDidMount(){
         await fetch('https://assets.24g.com/public/2022-frontend-test-project/drinks.json')
        .then(response =>
            response.json())
            .then(data => {
                this.setState({
                    drinks: data,
                    loading: false,
                })
                console.log(this.state)
            })
    }
    //if card info is loaded, map json to card component
    render(){
        var cardInfo = this.state.drinks.drinks;
        return(
            <div className="cardInfo">
            {this.state.loading || !this.state.drinks ? (
                <div>loading...</div>
            ) : (
                <div className="card-group">
                    {cardInfo.map((element, index) => {
                        return(
                            <Card info={element} showModal={this.props.showModal}/>     
                        )
                    })}
                </div>
                )}
            </div>
        )
    }
}
