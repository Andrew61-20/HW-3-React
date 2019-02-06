import React, { Component } from 'react';
import MenuItem from '../modules/menu/MenuItemContainer';

export default class MenuItemPage extends Component {
  handleGoBack = () => {
    const { state } = this.props.location;
    if (state) {
      return this.props.history.push(state.from);
    }
    this.props.history.push({
      pathname: '/menu',
    });
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <button onClick={this.handleGoBack}>Назад к меню</button>
        <MenuItem id={match.params.id} />
      </div>
    );
  }
}
