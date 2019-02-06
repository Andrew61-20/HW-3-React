import React from 'react';
import { NavLink } from 'react-router-dom';

import userNavItems from '../../../../configs/user-nav';

import s from './Dropdown.module.css';

const Dropdown = ({ closeDropdown, consol}) => (
   <div className={s.container}>
    <ul>
      {userNavItems.map(item => (
        <li key={item.name} >
        <NavLink to='' isActive={closeDropdown}>
            {item.name}
        </NavLink>
        </li>
      ))}
    </ul>
    <button onClick={closeDropdown} type="button">
      Logout
    </button>
  </div>
);

export default Dropdown;
