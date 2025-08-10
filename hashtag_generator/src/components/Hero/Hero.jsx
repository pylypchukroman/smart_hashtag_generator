import styles from './Hero.module.scss';

export const Hero = () => {
    return (

        <>
            <p className={styles.heroText}>
                Instagram Hashtag Generator
            </p>
            <p className={styles.secondaryText}>
                Brainstorm a range of hashtags to cut above the noise and put your IG post on the map. Simply type a prompt and come up with hashtag ideas in seconds using Canva’s Instagram hashtags generator, powered by OpenAI.
            </p>
        </>
    )
}
