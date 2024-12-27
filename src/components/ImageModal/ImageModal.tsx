import Modal from 'react-modal';
Modal.setAppElement('#root');
import s from './ImageModal.module.css';
import { Image, SelectedImage } from '../App/App.types';
import { FC } from 'react';

interface ImageModalProps {
  image: SelectedImage | null;
  onClose: () => void;
  isOpen: boolean;
}

const ImageModal: FC<ImageModalProps> = ({ image, onClose, isOpen }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Image preview"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        overlayClassName={s.modalOverlay}
        className={s.modalContent}
      >
        {image && (
          <img
            src={image.imageUrl}
            alt={image.alt}
            style={{ width: '1080px' }}
            className={s.modalImg}
          />
        )}
        <button onClick={onClose} className={s.modalBtn}>
          x
        </button>
      </Modal>
    </div>
  );
};

export default ImageModal;
