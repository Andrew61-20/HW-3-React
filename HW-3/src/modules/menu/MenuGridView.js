import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../configs/routes';
import MenuCard from './MenuCard';

const MenuGrid = ({ items = [], location }) => (
  <div>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link
            to={{
              pathname: `${routes.MENU}/${item.id}`,
              state: { from: location },
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

