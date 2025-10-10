import React, {useContext, useRef, useState} from 'react';
import {InputContext} from "../../context/inputContext";
import {HashtagContext} from "../../context/hashtagsContext";
import {Hashtag} from "../Hashtag/Hashtag";
import styles from './Output.module.scss'
import {Notify} from "notiflix/build/notiflix-notify-aio";

export const Output = () => {
    const { input, setInput } = useContext(InputContext);
    const { hashtags, setHashtags } = useContext(HashtagContext);
    const [hashtagsToShow, setHashtagsToShow] = useState([]);
    const timeoutRef = useRef(null);


    const handleButtonClick = (hash) => {
        if (hashtagsToShow.includes(hash)) {
            setHashtagsToShow(hashtagsToShow.filter(x => x !== hash));
        } else {
            setHashtagsToShow([...hashtagsToShow,hash]);
        }
    };

    const handleSaveButtonClick = async () => {
        try {
            await navigator.clipboard.writeText(`${input}\n${hashtagsToShow.join(' ')}`);
            Notify.success("DONE");
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
        }, 1000)
        setHashtags([]);
    };

    return (
        <div>
            {
                <div
                    style={{ opacity: hashtags.length >= 1 ? 1 : 0
                    }}
                    className={styles.outputWrapper}>
                    <p className={styles.mainTextMsg}>
                        {input}
                    </p>
                    <p className={styles.hashtags}>
                        {hashtagsToShow.join(' ')}
                    </p>
                <div className={styles.hashtagsArea}>
                    {hashtags.map(hashtag => (
                        <Hashtag hashtag={hashtag} handleButtonClick={handleButtonClick}/>
                        ))
                    }
                </div>
                    <div className={styles.BtbArea}>
                        <button
                            className={styles.btn}
                            type="button"
                            onClick={handleSaveButtonClick}
                        >
                            Copy to Clipboard
                        </button>
                        <button
                            className={styles.btn}
                            type="button"
                            onClick={handleResetButtonClick}
                        >
                            Reset
                        </button>
                    </div>
                </div>}
        </div>
    );
};
