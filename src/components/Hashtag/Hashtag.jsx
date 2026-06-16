import styles from '../Hashtag/Hashtag.module.scss';

export const Hashtag = ({ hashtag, isSelected, handleButtonClick }) => {
  return (
    <button
      className={`${styles.button} ${isSelected ? styles.selected : ''}`}
      type="button"
      aria-pressed={isSelected}
      onClick={() => handleButtonClick(hashtag)}
    >
      {hashtag}
    </button>
  );
};
