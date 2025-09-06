import styles from './Hero.module.scss';

export const Hero = () => {
    return (

        <div className={styles.heroArea}>
            <p className={styles.heroText}>
                Smart Hashtag Generator
            </p>
            <p className={styles.secondaryText}>
                Brainstorm a range of hashtags to cut above the noise and put your post on the map. Simply type a prompt and come up with hashtag ideas in seconds using hashtags generator.
            </p>
        </div>
    )
}
