import s from './LoadMoreBtn.module.css';
const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <>
      <button onClick={handleLoadMore} className={s.loadMoreBtn}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
