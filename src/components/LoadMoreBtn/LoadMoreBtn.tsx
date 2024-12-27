import { FC } from 'react';
import s from './LoadMoreBtn.module.css';

interface LoadMoreProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreProps> = ({ handleLoadMore }) => {
  return (
    <>
      <button onClick={handleLoadMore} className={s.loadMoreBtn}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
