import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../configs/routes';
// viev
import MenuCard from './MenuCard';

const MenuGrid = ({ items = [], location }) => (
  <div>
    {/* <Link to={`${routes.MENU_ADD}`}>Добавить элемент меню</Link> */}
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link
            to={{
              pathname: `${routes.MENU}/${item.id}`,
              state: { from: location },
              // state: { from: location } - для перехода на страницу назад
              // Передается весь объект location 38:00
            }}
          >
            <MenuCard {...item} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default withRouter(MenuGrid);
// withRouter прокинул поля location
// <Link
// to={{
//   pathname: `${routes.MENU}/${item.id}`,
//   state: { from: location },
// }}
// >
// Передал объектом второй параметр  state: { from: location },
