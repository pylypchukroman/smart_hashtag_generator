import React, {useContext} from 'react';
import {InputContext} from "../../context/inputContext";
import {HashtagContext} from "../../context/hashtagsContext";

export const Output = () => {
    const { input, setInput } = useContext(InputContext);
    const { hashtags, setHashtags } = useContext(HashtagContext);

    return (
        <div>
            <p>
                {input ? input : 'input'}
            </p>
            <p>
                {hashtags.length > 0 ? hashtags.join(' ') : 'hashtags'}
            </p>
        </div>
    );
};
