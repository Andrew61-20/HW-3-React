import React, { Component } from 'react';
// import * as API from '../services/api';

export default class MenuIngredientsAdd extends Component {
  state = {
    ingredients: [],
    ingredient: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    // e.target.name: e.target.value была бы такая запись,
    // если не деструктуризировать e, то есть handleChange = е => {
  };

  handleAddItem = (e, ingredient) => {
    e.preventDefault();
    this.setState({
      ingredients: [...this.state.ingredients, ingredient],
      ingredient: 0,
    });
    // this.setState({ingredients: [this.state.ingredients.push(ingredient)]})
    // return this.state.ingredients;
    // inpValue.preventDefault();
    // API.addIngredientsItem(inpValue).then(responseInpValue => {
    // if (!responseInpValue) return;
    console.log(this.state.ingredients);
  };

  render() {
    const {
      // ingredients = [],
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
