import React from 'react';

const MenuCard = ({ name, image, price }) => (                 //ingredients=[]}
  <div>
    <img src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>Price: {price}</p>
	
  </div>
);

export default MenuCard;

//<ul>
    //ingredients.map(el => <li key={el}>{el}</li>)
//</ul>