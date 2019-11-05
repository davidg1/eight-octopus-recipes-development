import React from 'react';
import styles from './Recipe.css';

import recipesCollection from './recipes-collection';

const Recipe = ({match}) => {
  const idToMatch = match.params.id || '1';

  const recipe = recipesCollection.find(({ id }) => id === idToMatch);

  return (
    <div className={styles.recipeWrapper}>
        <img src={`/assets/images/${recipe.image}`} alt="recipe" />
        <section className={styles.recipeInfoWrapper}>
          <h1>{recipe.fullName}</h1>
          <img src="/assets/images/three-utensils.png" alt="three utensils"/>
          <p>{recipe.description}</p>
        </section>
    </div>
  );
}


export default Recipe;
