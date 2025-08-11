import React, {useContext, useState} from 'react';
import {InputContext} from "../../context/inputContext";
import {HashtagContext} from "../../context/hashtagsContext";
import {Hashtag} from "../Hashtag/Hashtag";
import styles from './Output.module.scss'

export const Output = () => {
    const { input, setInput } = useContext(InputContext);
    const { hashtags, setHashtags } = useContext(HashtagContext);
    const [hashtagsToShow, setHashtagsToShow] = useState([]);


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
            alert('DONE')
        } catch (err) {
            console.error('error', err);
            alert("Can't copy" )
        }
    };

    const handleResetButtonClick = () => {
        setInput(' ');
        setHashtags([]);
        setHashtagsToShow([]);
    };

    return (
        <div>
            <p className={styles.mainTextMsg}>
                {input}
            </p>
            <p className={styles.hashtags}>
                {hashtagsToShow.join(' ')}
            </p>
            <div>
                {hashtags.map(hashtag => (
                    <Hashtag hashtag={hashtag} handleButtonClick={handleButtonClick}/>
                ))}
            </div>
                <button
                    type="button"
                    onClick={handleSaveButtonClick}
                >
                    Copy to Clipboard
                </button>
            <button
                type="button"
                onClick={handleResetButtonClick}
            >
                Reset
            </button>
        </div>
    );
};
