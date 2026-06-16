import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.wrapper} role="status" aria-label="Generating hashtags">
      <div className={styles.loader} />
      <p className={styles.text}>Generating hashtags…</p>
    </div>
  );
};
