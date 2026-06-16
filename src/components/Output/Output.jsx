import { useContext, useRef, useState } from 'react';
import { InputContext } from '../../context/inputContext';
import { HashtagContext } from '../../context/hashtagsContext';
import { Hashtag } from '../Hashtag/Hashtag';
import styles from './Output.module.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Output = () => {
  const { input, setInput } = useContext(InputContext);
  const { hashtags, setHashtags } = useContext(HashtagContext);
  const [hashtagsToShow, setHashtagsToShow] = useState([]);
  const timeoutRef = useRef(null);

  if (hashtags.length < 1) {
    return null;
  }

  const handleButtonClick = (hash) => {
    setHashtagsToShow((prev) =>
      prev.includes(hash) ? prev.filter((x) => x !== hash) : [...prev, hash]
    );
  };

  const handleSaveButtonClick = async () => {
    try {
      await navigator.clipboard.writeText(`${input}\n${hashtagsToShow.join(' ')}`);
      Notify.success('Copied to clipboard!');
    } catch (err) {
      Notify.failure("Can't copy");
      console.error('error', err);
    }
  };

  const handleResetButtonClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setInput(' ');
      setHashtagsToShow([]);
    }, 1000);
    setHashtags([]);
  };

  return (
    <div className={styles.output}>
      <div className={styles.preview}>
        <p className={styles.promptText}>{input}</p>
        {hashtagsToShow.length > 0 && (
          <p className={styles.selectedTags}>{hashtagsToShow.join(' ')}</p>
        )}
      </div>

      <div className={styles.tagsArea}>
        <p className={styles.tagsLabel}>Tap to select hashtags</p>
        <div className={styles.tagsList}>
          {hashtags.map((hashtag) => (
            <Hashtag
              key={hashtag}
              hashtag={hashtag}
              isSelected={hashtagsToShow.includes(hashtag)}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.btnPrimary} type="button" onClick={handleSaveButtonClick}>
          Copy to Clipboard
        </button>
        <button className={styles.btnSecondary} type="button" onClick={handleResetButtonClick}>
          Reset
        </button>
      </div>
    </div>
  );
};
