import React, {useContext, useEffect, useState} from 'react';
import {InputContext} from "../../context/inputContext";
import {HashtagContext} from "../../context/hashtagsContext";

export const Output = () => {
    const { input, setInput } = useContext(InputContext);
    const { hashtags, setHashtags } = useContext(HashtagContext);
    const [output, setOutput] = useState(input);

    const handleButtonClick = (hash) => {
        setOutput((prevState) => prevState ? `${prevState} ${hash}` : hash);
    };

    useEffect(() => {
        setOutput(input);
    }, [input]);

    return (
        <div>
            <p>
                {output ? output : 'input'}
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
        </div>
    );
};
