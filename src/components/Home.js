import React, { Component } from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      recipes: [],
      currentRecipe: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  onRecipeClick = recipeId => {
    fetch(`${API_URL}/v1/recipes/${recipeId}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({ currentRecipe: recipe });
      });
  };

  getData = () => {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({
          recipes,
          loading: false,
        });
      });
  };

  render() {
    const { recipes, currentRecipe, loading } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <RecipeList
            recipes={recipes}
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
            loading={loading}
          />
          <RecipeDetail
            style={{ flex: 5 }}
            className="ml4"
            recipe={currentRecipe}
          />
        </main>
      </div>
    );
  }
}

export default Home;
