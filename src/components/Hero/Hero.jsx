import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <header className={styles.hero}>
      <h1 className={styles.title}>Smart Hashtag Generator</h1>
      <p className={styles.subtitle}>
        Brainstorm hashtags that cut through the noise and put your post on the map.
        Type a prompt and get ideas in seconds.
      </p>
    </header>
  );
};
