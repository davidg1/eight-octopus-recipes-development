import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import Recipes from './recipes/Recipes';
import Nutrition from './nutrition/Nutrition';
import Inspiration from './inspiration/Inspiration';

import styles from './Main.css';

const Main = (props) => (
  <main className={styles.main}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route
        path="/recipes"
        render={() => <Recipes imageLoadHandler={props.imageLoadHandler}
        recipeImagesLoaded={props.recipeImagesLoaded} />}
      />
      <Route
        path="/nutrition"
        render={() => <Nutrition imageLoadHandler={props.imageLoadHandler}
        nutritionImagesLoaded={props.nutritionImagesLoaded} />}
      />
      <Route
        path="/inspiration"
        render={
          () => <Inspiration
                  buttonClickHandler={props.buttonClickHandler}
                  modalShown={props.inspirationModalShown}
                />
        }
      />
    </Switch>
  </main>
);

export default Main;
