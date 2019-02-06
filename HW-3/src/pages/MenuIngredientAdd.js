import React, { Component } from 'react';
import * as API from '../services/api';

export default class MenuIngredientAdd extends Component {
  state = {
    ingredients: [],
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddItem = inpValue => {
    API.addMenuItem(inpValue).then(responseInpValue => {
      if (!responseInpValue) return;
    });
  };

  render() {
    const { ingredients = [] } = this.state;
    return (
      <div>
        <h2>Ingredients</h2>
        <form onSubmit={() => this.handleAddItem}>
          <input
            type="text"
            name="name"
            value={name}
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
