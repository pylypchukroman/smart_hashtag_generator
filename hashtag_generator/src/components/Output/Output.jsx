import React, {useContext, useState} from 'react';
import {InputContext} from "../../context/inputContext";
import {HashtagContext} from "../../context/hashtagsContext";
import {Hashtag} from "../Hashtag/Hashtag";

export const Output = () => {
    const { input, setInput } = useContext(InputContext);
    const { hashtags, setHashtags } = useContext(HashtagContext);
    const [output, setOutput] = useState([]);


    const handleButtonClick = (hash) => {
        if (output.includes(hash)) {
            setOutput(output.filter(x => x !== hash));
        } else {
            setOutput([...output,hash]);
        }

    };


    const handleSaveButtonClick = async () => {
        try {
            await navigator.clipboard.writeText(`${input}\n${output.join(' ')}`);
            alert('DONE')
        } catch (err) {
            console.error('error', err);
            alert("Can't copy" )
        }
    };

    const handleResetButtonClick = () => {
        setInput(' ');
        setHashtags([]);
        setOutput([]);
    };

    return (
        <div>
            <p>
                {input ? input : 'input'}
            </p>
            <p>
                {output}
            </p>
            {hashtags.map(hashtag => (
                <Hashtag hashtag={hashtag} handleButtonClick={handleButtonClick}/>
            ))}
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
