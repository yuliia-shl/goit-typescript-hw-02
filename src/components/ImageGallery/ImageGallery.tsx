import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, onImgClick }) => {
  return (
    <>
      <ul className={s.gallery}>
        {/* Набір елементів списку із зображеннями */}{' '}
        {images.map(image => (
          <li key={image.id} className={s.galleryItem}>
            <ImageCard image={image} onClick={() => onImgClick(image)} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
