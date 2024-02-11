import React from 'react';
import './Pagination.scss';
import { PaginationItem } from '../PaginationItem/PaginationItem';

type Props = {
  postsPerPage: number,
  totalPosts: number,
  paginate: (num: number) => void,
}

export const Pagination: React.FC<Props> = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <PaginationItem
        symbol="<"
        paginate={paginate}
        number={0}
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
        number={0}
        length={pageNumbers.length}
      />
    </ul>
  );
};