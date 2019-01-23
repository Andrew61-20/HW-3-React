import React from 'react';
import MenuGrid from '../modules/menu/MenuGridContainer';

const MenuPage = ({ match, history, location }) => (
  <div>
    <MenuGrid match={match} history={history} location={location} />
  </div>
);

export default MenuPage;
