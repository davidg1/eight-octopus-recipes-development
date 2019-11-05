import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import recipesCollection from './recipes-collection';
import Recipe from './Recipe';
import ImagesLoader from '../common/ImagesLoader';

import styles from './Recipes.css'

class Recipes extends Component {
  render()  {
    const recipeImageSources = recipesCollection.map(recipe => `/assets/images/${recipe.image}`);

    if (!this.props.recipeImagesLoaded) {
      return (
        <ImagesLoader
          imageSources={recipeImageSources}
          spinnerImageSource="/assets/images/spinner-octopus.png"
          imageLoadHandler={this.props.imageLoadHandler}
          imagesName="recipe"
        />
      )
    }

    return (
      <Router>
        <Route render={({ location }) => (
          <div className={styles.recipesWrapper}>
            <Route
              exact
              path="/recipes" render={() => (<Redirect to="/recipes/1"/>)}
            />

            <div className={styles.recipesSidebar}>
              <h1>Recipes</h1>
              <nav>
                <ul>
                  {recipesCollection.map(({id, shortName}) => (
                    <li key={id}>
                      <NavLink
                        to={`/recipes/${id}`}
                        activeClassName={styles.active}
                      >
                        {shortName}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <section className={styles.recipeSection}>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames={{
                   enter: styles.fadeEnter,
                   enterActive: styles.fadeEnterActive,
                   exit: styles.fadeExit,
                   exitActive: styles.fadeExitActive,
                  }}
                  timeout={1000}
                >
                  <Switch location={location}>
                    <Route path="/recipes/:id" component={Recipe}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </section>
          </div>
        )} />
      </Router>
    );
  }
}


export default Recipes;
