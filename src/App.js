import './App.scss';
import { useGetPostsQuery } from './api/posts';
import { DataList } from './components/DataList';
import { Pagination } from './components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from './redux/paginationSlice';

function App() {
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
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <div className="App">
      <h1 className="App__title">
        Posts list from server
      </h1>
      <DataList items={currentPosts} isLoading={isLoading} isError={error}/>
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
