import React, { Component } from 'react';

export default class MenuIngredientsAdd extends Component {
  state = {
    ingredients: [],
    ingredient: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddItem = (e, ingredient) => {
    e.preventDefault();
    this.setState({
      ingredients: [...this.state.ingredients, ingredient],
      ingredient: 0,
    });
   };

  render() {
    const {
     ingredient,
    } = this.state;
    return (
      <div>
        <h2>Ingredients</h2>
        <form onSubmit={e => this.handleAddItem(e, ingredient)}>
          <input
            type="text"
            name="ingredient"
            value={ingredient}
            onChange={this.handleChange}
            placeholder="Название ингредиента"
          />
          <br />
          <button type="submit">Добавить ингредиент</button>
          <br />
        </form>
      </div>
    );
  }
}
