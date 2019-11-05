import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inspirationModalShown: false,  //only want to show inspiration modal one time to the user
      recipeImagesLoaded: false,
      nutritionImagesLoaded: false
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);

    this.recipeImageLoadCounter = 0;
    this.nutritionImageLoadCounter = 0;
  }


  handleButtonClick(event) {
    if (event.target.id === 'inspiration-modal-button') {
      this.setState({inspirationModalShown: true});
    }
  }


  handleImageLoad(event) {
    if (event.target.id.startsWith('recipe')) {
      this.recipeImageLoadCounter++;

      if (this.recipeImageLoadCounter === 8) {
        this.setState({recipeImagesLoaded: true});
      }
    }

    if (event.target.id.startsWith('nutrition')) {
      this.nutritionImageLoadCounter++;

      if (this.nutritionImageLoadCounter === 3) {
        this.setState({nutritionImagesLoaded: true});
      }
    }
  }


  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Main
          buttonClickHandler={this.handleButtonClick}
          imageLoadHandler={this.handleImageLoad}
          inspirationModalShown={this.state.inspirationModalShown}
          recipeImagesLoaded={this.state.recipeImagesLoaded}
          nutritionImagesLoaded={this.state.nutritionImagesLoaded}
        />
      </div>
    );
  }
}

export default App;
