import './App.css';
import React from 'react';
import logo from './images/24g_logo.svg';
import CardInfo from './components/cardInfo.js';
import Modal from './components/modal/Modal.js';
import DrinkModal from './components/modal/drinkModal';
export default class App extends React.Component {
  //control the modal state
  constructor() {
    super();
    this.state = {
      show: false, 
      name: null,
      steps: [],
      ingredients: [],
      glassware: null,
      mocktail: null
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  //handle information from child component onClick
  showModal = (drink) => {
    this.setState({ 
      show: true,
      name: drink.name,
      steps: drink.steps,
      ingredients: drink.ingredients,
      mocktail: drink.mocktail,
      glassware: drink.glassware
    });
    
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  render(){
  return (
    <div className="App">
      <div className="logo">
        <img src = {logo} alt="24glogo" className="logoImg"></img>
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
          <DrinkModal name={this.state.name} steps={this.state.steps} ingredients={this.state.ingredients} mocktail={this.state.mocktail} glassware={this.state.glassware}/>
        </Modal>
        <section className="card-section">
          <CardInfo showModal={this.showModal}/>
        </section> 
    </div>    
  );
}
}