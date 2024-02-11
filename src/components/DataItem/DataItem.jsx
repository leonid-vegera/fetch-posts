import React from 'react';
import './DataItem.scss';

export const DataItem = ({item}) => {
  const { title, body } = item;
  const uppercasedBody = `${body.slice(0, 1).toUpperCase()}${body.slice(1).toLowerCase()}`

  return (
    <li className='data-item'>
      <h2 className="data-item__title">{title}</h2>
      <p className="data-item__body">&nbsp;&nbsp;{uppercasedBody}</p>
    </li>
  );
};
