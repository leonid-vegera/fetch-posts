import React from 'react';
import './Pagination.scss';
import { PaginationItem } from '../PaginationItem/PaginationItem';

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <PaginationItem
        symbol="<"
        paginate={paginate}
      />
      {pageNumbers.map((number) => (
        <PaginationItem
          key={number}
          number={number}
          paginate={paginate}
        />
      ))}
      <PaginationItem
        symbol=">"
        paginate={paginate}
        length={pageNumbers.length}
      />
    </ul>
  );
};