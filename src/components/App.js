import React, { Component } from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      currentRecipe: null,
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
    .then(res => res.json())
    .then(recipes => {
      this.setState({ recipes });
    });
  }

  onRecipeClick = (recipeId) => {
    fetch(`${API_URL}/v1/recipes/${recipeId}`)
    .then(res => res.json())
    .then(recipe => {
      this.setState({ currentRecipe: recipe });
    });
  }

  render() {
    const { recipes, currentRecipe } = this.state;
    return (
      <div>
        <Header />
        <main style={{ display: 'flex' }}>
          <RecipeList 
            recipes={recipes} 
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
          />
          <RecipeDetail 
            style={{ flex: 5 }}
            recipe={currentRecipe}
          />
        </main>
      </div>
    )
  }
}

export default App;