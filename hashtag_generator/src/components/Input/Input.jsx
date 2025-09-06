import React, { useState, useEffect } from 'react';
import styles from '../Input/Input.module.scss';

export const Input = ({ inputValue, setInputValue }) => {
    const texts = ['Generate hashtag ideas for my weekend travel tales', 'Generate hashtag ideas for an upcoming beach-themed wedding', 'Suggest hashtags for a book club event'];
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (isFocused || inputValue.trim()) return;

        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex(prev => (prev + 1) % texts.length);
                setVisible(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [isFocused, inputValue]);

    return (
        <div className={styles.containerStyle}>
            <textarea
                className={styles.inputStyle}
                value={inputValue}
                maxLength="200"
                minLength="5"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {!isFocused && !inputValue.trim() && (
                <div
                    className={styles.animatedTextStyle}
                    style={{ opacity: visible ? 1 : 0
                }}
                >
                    {texts[index]}
                </div>
            )}
        </div>
    );
};
