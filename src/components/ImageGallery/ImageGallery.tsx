import { FC } from 'react';
import { Image } from '../App/App.types';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];
  onImgClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImgClick }) => {
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
