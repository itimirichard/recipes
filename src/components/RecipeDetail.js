import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetail = props => {
  if (!props.recipe) {
    return (
      <p style={props.style} className="h3 p2 italic center">
        Please select a recipe to see the detail
      </p>
    );
  }

  return (
    <div style={props.style} className="p2">
      <h2 className="h2">{props.recipe.name}</h2>
      <img className="fit" src={props.recipe.image} alt={props.recipe.name} />
      <div>
        <span>{props.recipe.category}</span>
        <span>{props.recipe.calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {props.recipe.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {props.recipe.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  style: PropTypes.object,
};

export default RecipeDetail;
