import styles from './MainInput.module.scss';
import { useContext, useState } from 'react';
import { generateHashtags } from '../../api/controller';
import { InputContext } from '../../context/inputContext';
import { HashtagContext } from '../../context/hashtagsContext';
import { Input } from '../Input/Input';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const MainInput = ({ setLoading }) => {
  const [inputValue, setInputValue] = useState('');
  const [numberOfHashtags, setNumberOfHashtags] = useState(5);
  const { setInput } = useContext(InputContext);
  const { setHashtags } = useContext(HashtagContext);

  function handleNumberOfHashtagsChange(e) {
    setNumberOfHashtags(Number(e.target.value));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.length <= 5) {
      Notify.failure('Your message is too short');
      return;
    }
    const hash = await generateHashtags(inputValue, numberOfHashtags, setLoading);
    setHashtags(hash);
    setInput(inputValue);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input inputValue={inputValue} setInputValue={setInputValue} />

      <div className={styles.controls}>
        <div className={styles.sliderGroup}>
          <div className={styles.sliderHeader}>
            <label className={styles.label} htmlFor="hashtag-count">
              Number of hashtags
            </label>
            <span className={styles.countBadge} aria-hidden="true">
              {numberOfHashtags}
            </span>
          </div>
          <input
            type="range"
            id="hashtag-count"
            min="1"
            max="10"
            step="1"
            onChange={handleNumberOfHashtagsChange}
            value={numberOfHashtags}
            className={styles.slider}
            style={{ '--progress': `${((numberOfHashtags - 1) / 9) * 100}%` }}
            aria-valuemin={1}
            aria-valuemax={10}
            aria-valuenow={numberOfHashtags}
          />
          <div className={styles.sliderTicks} aria-hidden="true">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i + 1} className={styles.tick} />
            ))}
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          <span className={styles.btnIcon} aria-hidden="true">#</span>
          Generate hashtags
        </button>
      </div>
    </form>
  );
};
