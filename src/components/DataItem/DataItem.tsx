import React from 'react';
import './DataItem.scss';

export interface Post {
  title: string,
  body: string,
  id: number,
  userId: number
}

type Props = {
  item: Post
}

export const DataItem: React.FC<Props> = ({ item }) => {
  const { title, body } = item;
  const uppercasedBody: string = `${body.slice(0, 1).toUpperCase()}${body.slice(1).toLowerCase()}`;

  return (
    <li className='data-item'>
      <h2 className="data-item__title">{title}</h2>
      <p className="data-item__body">&nbsp;&nbsp;{uppercasedBody}</p>
    </li>
  );
};
