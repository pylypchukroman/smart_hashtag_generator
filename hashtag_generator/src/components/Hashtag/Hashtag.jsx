import React from "react";


export const Hashtag = ({ hashtag, handleButtonClick }) => {

    return (
        <button
            type="button"
            onClick={() => handleButtonClick(hashtag)}
        >
            {hashtag}
        </button>
    )
}
