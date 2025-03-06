import styles from "../styles/Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  //   duom: { id: number; name: string }[];
};

function ModalComponent({ isOpen, children, onClose }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.modalButton} onClick={onClose}>
          &times;
        </button>
        <p>Cia yra modal screen</p>
        {children}
      </div>
    </div>
  );
}

export default ModalComponent;
