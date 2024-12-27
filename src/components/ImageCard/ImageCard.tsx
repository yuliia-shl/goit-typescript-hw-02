import { FC } from 'react';
import s from './ImageCard.module.css';
import { Image } from '../App/App.types';

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
  const {
    urls: { small },
    alt_description,
    user,
    likes,
  } = image;
  return (
    <>
      <img
        src={small}
        alt={alt_description}
        className={s.img}
        width="380px"
        height="260px"
        onClick={onClick}
      />
      <div className={s.info}>
        <p>
          Author: <span className={s.bold}>{user.name}</span>
        </p>
        <p>
          Likes: <span className={s.bold}>{likes}</span>
        </p>
      </div>
    </>
  );
};

export default ImageCard;
