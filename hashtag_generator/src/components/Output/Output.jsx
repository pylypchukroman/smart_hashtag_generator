import React, {useContext, useEffect, useState} from 'react';
import {InputContext} from "../../context/inputContext";
import {HashtagContext} from "../../context/hashtagsContext";

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
    }

    return (
        <div>
            <p>
                {input ? input : 'input'}
            </p>
            <p>
                {output}
            </p>
            {hashtags.map(hash => (
                <button
                    type="button"
                    onClick={() => handleButtonClick(hash)}
                >
                    {hash}
                </button>
                )
            )}
                <button
                    type="button"
                    onClick={handleSaveButtonClick}
                >
                    Copy to Clipboard
                </button>
        </div>
    );
};
