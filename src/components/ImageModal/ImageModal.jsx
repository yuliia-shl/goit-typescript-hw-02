import Modal from 'react-modal';
Modal.setAppElement('#root');
import s from './ImageModal.module.css';

const ImageModal = ({ image, onClose, isOpen }) => {
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
