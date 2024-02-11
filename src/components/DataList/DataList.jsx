import React from 'react';
import './DataList.scss';
import { DataItem } from '../DataItem';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage';

export const DataList = ({ items, isLoading, isError }) => {
  if (isLoading) {
    return <Loader/>
  }

  if (isError) {
    return <ErrorMessage error={isError}/>
  }

  return (
    <ul className="data-list">
      {items?.map(item => (
        <DataItem item={item} key={item.id}/>
      ))}
    </ul>
  );
};
