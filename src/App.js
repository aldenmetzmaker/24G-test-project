import './App.css';
import React from 'react';
import logo from './images/24g_logo.svg';
import CardInfo from './cardInfo.js';
import Modal from './components/modal/Modal.js';

export default class App extends React.Component {
  //control the modal state
  constructor() {
    super();
    this.state = {
      show: false, 
      name: null,
      steps: [null],
      ingredients: [null],
      glassware: null,
      mocktail: null
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  //handle information from child component onClick
  showModal = (name, instructions, ingredients, mocktail, glassware) => {
    this.setState({ 
      show: true,
      name: name,
      steps: instructions,
      ingredients: ingredients,
      mocktail: mocktail,
      glassware: glassware
    });
    
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  render(){
  return (
    <div className="App">
      <div className="logo">
        <img src = {logo} alt="none" className="logoImg"></img>
      </div>
      
        <h1 className="welcome-title">
          Welcome Holiday Text
        </h1>
        <div className="par-container">
          <p className="welcome-par">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus odio ac ante malesuada feugiat. Mauris pretium, nulla ac imperdiet suscipit, nibh enim pellentesque sapien, ut hendrerit dolor sapien gravida lacus.
          </p>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
        <div className="modal-container">
        <header className="drink-header">
          <h1 className="drink-title">{this.state.name}</h1>
        </header>
        <div className="modal-contents">
        <div> 
          <h2>Ingredients</h2>
          <ol>
          {this.state.ingredients.map((ingredient, index) => {
                        return(
                          <li>{this.state.ingredients[index]}</li>
                        )
                      })}
          </ol>
          </div>
          <div>
            <h2>How to Prepare</h2>
            <ol>
              {this.state.steps.map((step, index) => {
                          return(
                            <p>Step {index+1} {this.state.steps[index]}</p>
                          )
                        })}
            </ol>
          </div>
          <div>
            <h2>Make it a mocktail</h2>
            <p>{this.state.mocktail}</p>
          </div>
          <div>
            <h2>Glassware</h2>
            <p>{this.state.glassware}</p>
          </div>
          </div>
          </div>
        </Modal>
        <section className="card-section">
          <CardInfo showModal={this.showModal}/>
        </section>
        
    </div>    
  );
}
}