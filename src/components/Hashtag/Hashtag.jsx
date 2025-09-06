import React from "react";
import styles from '../Hashtag/Hashtag.module.scss'


export const Hashtag = ({ hashtag, handleButtonClick }) => {

    return (
        <button
            className={styles.button}
            type="button"
            onClick={() => handleButtonClick(hashtag)}
        >
            {hashtag}
        </button>
    )
}
