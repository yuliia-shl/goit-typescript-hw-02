import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchImg } from '../../services/api';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import toast from 'react-hot-toast';
import ImageModal from '../ImageModal/ImageModal';
import { FetchImgResponse, Image, SelectedImage } from './App.types';

function App(): JSX.Element {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async (): Promise<void> => {
      try {
        setIsLoading(true); // 1. Встановлюємо індикатор loading в true перед запитом
        setIsError(false); // Виключаємо показ помилки

        // Отримуємо результати запиту
        const { results, total_pages }: FetchImgResponse = await fetchImg(query, page);
        setTotalPages(total_pages);

        if (results.length === 0) {
          toast.error((t: { id: string }) => (
            <span>
              <b>Зображення не знайдені </b>
              <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
            </span>
          ));
        }
        // Записуємо результат запиту (масив) у стан зображень
        setImages(prev => [...prev, ...results]);
      } catch (error) {
        console.error(error);
        // Включаємо показ помилки
        setIsError(true);
      } finally {
        // Виключаємо ловдер після отримання результату запиту чи помилки
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangeQuery = (inputValue: string) => {
    if (!inputValue.trim()) {
      toast(t => (
        <span>
          <b>Введіть пошукове слово! </b>
          <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
        </span>
      ));
      return;
    }
    setImages([]);
    setTotalPages(0);
    setPage(1);
    setQuery(inputValue);
  };

  const handleLoadMore = (): void => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
      setTimeout(() => {
        window.scrollBy({
          top: 500,
          behavior: 'smooth',
        });
      }, 500);
    }
  };

  const openModal = (image: Image) => {
    setSelectedImage({
      imageUrl: image.urls.regular,
      alt: image.alt_description,
    });
  };

  const closeModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onChangeQuery={handleChangeQuery} />

      <main>
        {images.length > 0 ? (
          <ImageGallery images={images} onImgClick={openModal} />
        ) : (
          <p>Знайдіть зображення своєї мрії</p>
        )}
        {isLoading && <Loader />}
        {isError && <h3>От халепа! Щось сталося. Онови Сторінку!</h3>}
        {totalPages > page && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
        <ImageModal isOpen={!!selectedImage} image={selectedImage} onClose={closeModal} />
      </main>
    </>
  );
}

export default App;
