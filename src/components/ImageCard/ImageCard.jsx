import s from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
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
