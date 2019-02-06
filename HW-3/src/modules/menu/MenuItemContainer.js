import React, { Component } from 'react';
import MenuItem from './MenuItemView';
import Loader from '../../components/Loader';
import * as API from '../../services/api';

export default class MenuItemContainer extends Component {
  state = { menuItem: {}, loading: false, error: null };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const { id } = this.props;
      const menuItem = await API.getMenuItemById(id);
      this.setState({ menuItem, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { menuItem, loading, error } = this.state;
    return (
      <div>
        {loading && <Loader />}
        {error && <h1>Error</h1>}
        {!loading && <MenuItem menuItem={menuItem} />}
      </div>
    );
  }
}
