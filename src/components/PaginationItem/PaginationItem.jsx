import React from 'react';
import './PaginationItem.scss';
import { useSelector } from 'react-redux';

export const PaginationItem = ({number, paginate, symbol = '', length}) => {
  const { currentPage } = useSelector((state) => state.pagination);
  let pageToDisplay = currentPage;
  const changePaginate = () => {
    if (symbol === '<') {
      const newPage = currentPage - 1 || 1;
      paginate(newPage);
      pageToDisplay = newPage;
      return;
    }
    if (symbol === '>') {
      const newPage = currentPage + 1;
      if (newPage > length) {
        return;
      }
      paginate(currentPage + 1);
      pageToDisplay = currentPage + 1;
      return;
    }
    paginate(number);
    pageToDisplay = number;
  }

  return (
    <li className="page-item" onClick={changePaginate}>
      <a className="page-link" href={`#page=${pageToDisplay}`}>
        {symbol || number}
      </a>
    </li>
  );
};
