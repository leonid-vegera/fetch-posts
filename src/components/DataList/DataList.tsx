import React from 'react';
import './DataList.scss';
import { Loader } from '../Loader/Loader';
import { Error, ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { DataItem, Post } from '../DataItem/DataItem';

type Props = {
  items: Post[],
  isLoading: boolean,
  error: Error,
}
export const DataList: React.FC<Props> = ({ items, isLoading, error }) => {
  if (isLoading) {
    return <Loader/>
  }

  if (error) {
    return <ErrorMessage error={error}/>
  }

  return (
    <ul className="data-list">
      {items?.map(item => (
        <DataItem item={item} key={item.id}/>
      ))}
    </ul>
  );
};
