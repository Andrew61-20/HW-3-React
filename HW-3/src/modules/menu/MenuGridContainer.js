import React, { Component } from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import CategorySelector from './CategorySelector';
import MenuGrid from './MenuGridView';
import Loader from '../../components/Loader';
import * as API from '../../services/api';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

 export default class MenuGridContainer extends Component {
  state = {
    menu: {},
    categories: [],
    loading: false,
    filter: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const menu = await API.getAllMenuItems();
      const categories = await API.getCategories();
      this.setState({ menu, categories, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  async componentDidUpdate(prevProps1) {
    const prevCategory = getCategoryFromProps(prevProps1);
    const nextCategory = getCategoryFromProps(this.props);

    console.log('prevCategory: ', prevCategory);
    console.log('nextCategory: ', nextCategory);

    if (prevCategory === nextCategory) return;
    try {
      const menu = await API.getMenuItemsWithCategory(nextCategory);
      this.setState({ menu, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
    
    if (this.props.location.search === '?all') {
      this.setState({ loading: true });

      try {
        const menu = await API.getAllMenuItems();
        this.setState({ menu, loading: false });
      } catch (error) {
        this.setState({ error, loading: false });
      }
    }
  }

  
  handleCategoryChange = category => {
    this.setState({ filter: true });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `category=${category}`,
    });
  };

  handleClearSelector = () => {
    const { history } = this.props;
    const { location } = this.props;
    this.setState({ filter: false });
    history.push({
      pathname: location.pathname,
      search: 'all',
    });
   };

  render() {
    const { menu, categories, loading, error, filter } = this.state;
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <div>
        {!loading && (
          <Link to={`${routes.MENU_ADD}`}>Добавить элемент меню</Link>
        )}
        <br />
        <br />
        {!loading && (
          <CategorySelector
            options={categories}
            value={currentCategory}
            onChange={this.handleCategoryChange}
          />
        )}
        {filter && (
          <button type="button" onClick={this.handleClearSelector}>
            Убрать фильтр
          </button>
        )}
        {filter && (
          <p>Фильтр установлен на: {getCategoryFromProps(this.props)}</p>
        )}
        {loading && <Loader />}
        {error && <h1>Error</h1>}
        {menu.length > 0 && <MenuGrid items={menu} />}
      </div>
    );
  }
}
