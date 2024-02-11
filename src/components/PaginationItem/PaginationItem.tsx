import React from 'react';
import './PaginationItem.scss';
import { useSelector } from 'react-redux';

type Props = {
  number: number,
  symbol?: string,
  length?: number,
  key?: number,
  paginate: (page: number) => void
}
export const PaginationItem: React.FC<Props> = ({number, paginate, symbol = '', length}) => {
  // @ts-ignore
  const { currentPage } = useSelector((state) => state.pagination);
  let pageToDisplay: number = currentPage;
  const changePaginate = () => {
    if (symbol === '<') {
      const newPage: number = currentPage - 1 || 1;
      paginate(newPage);
      pageToDisplay = newPage;
      return;
    }
    if (symbol === '>') {
      const newPage: number = currentPage + 1;
      if (!!length && newPage > length) {
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
