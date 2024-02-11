import React from 'react';
import './App.scss';
import { DataList } from './components/DataList/DataList';
import { Pagination } from './components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery } from './api/posts';
import { setCurrentPage } from './redux/paginationSlice';

const App = () => {
  const { data, error, isLoading, refetch } = useGetPostsQuery();
  const dispatch = useDispatch();
  const { currentPage, postsPerPage } = useSelector((state) => state.pagination);

  const handleButtonClick = () => {
    refetch();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = !!data && data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      <h1 className="App__title">
        Posts list from server
      </h1>
      <DataList items={currentPosts} isLoading={isLoading} error={error}/>
      <button className="App__button" onClick={handleButtonClick}>
        Refresh list
      </button>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data?.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
