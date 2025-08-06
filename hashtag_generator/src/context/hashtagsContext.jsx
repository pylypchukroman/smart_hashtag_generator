import React, {createContext, useState} from 'react';

export const HashtagContext = createContext();

export const HashtagsProvider = ({ children }) => {
    const [hashtags, setHashtags] = useState([]);
    return (
        <HashtagContext.Provider value={{ hashtags, setHashtags }}>
            { children }
        </HashtagContext.Provider>
    );
};
