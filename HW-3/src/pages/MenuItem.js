// import React from 'react';
import React, { Component } from 'react';
import MenuItem from '../modules/menu/MenuItemContainer';

// const MenuItemPage = ({ match }) => (
//   <div>
//     <MenuItem id={match.params.id} />
//   </div>
// );
// // Кнопка назад, сюда же можно остальные пропы прокинуть....1:17:40
// export default MenuItemPage;

export default class MenuItemPage extends Component {
  handleGoBack = () => {
    const { state } = this.props.location;
    // const { category } = this.state;
    // state это поле в location, а не state - состояние
    // Если есть запись в state, откуда пришли, добавляем в историю эту запись
    if (state) {
      return this.props.history.push(state.from);
    }
    // В противном случае, добавляем руками
    this.props.history.push({
      pathname: '/menu',
      // search: `?category=${category}`,
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

// import React, { Component } from "react";
// import * as api from "../api-mock/api";

// export default class ArticlePage extends Component {
//   state = {
//     id: null,
//     title: null,
//     imageUrl: null,
//     author: null,
//     category: null,
//     body: null
//   };

//   componentDidMount() {
//     api
//       .fetchArticleById(this.props.match.params.id)
//       .then(article => this.setState({ ...article }));
//   }
//   // Кнопка перехода назад к статьям
//   handleGoBack = () => {
//     const { state } = this.props.location;
//     const { category } = this.state;
//     // state это поле в location, а не state - состояние
//     // Если есть запись в state, откуда пришли, добавляем в историю эту запись
//     if (state) {
//       return this.props.history.push(state.from);
//     }
//     // В противном случае, добавляем руками
//     this.props.history.push({
//       pathname: "/articles",
//       search: `?category=${category}`
//     });
//   };

//   render() {
//     const { title, imageUrl, author, category, body } = this.state;

//     return (
//       <article>
//         <h2>{title}</h2>
//         <img src={imageUrl} alt={title} />
//         <p>
//           <b>Author: {author}</b>
//         </p>
//         <p>
//           <b>Category: {category}</b>
//         </p>
//         <p>{body}</p>
//         <button onClick={this.handleGoBack}>Back to articles</button>
//       </article>
//     );
//   }
// }
