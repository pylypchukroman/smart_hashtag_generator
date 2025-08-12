import React, { useState, useEffect } from 'react';
import styles from '../Input/Input.module.scss';

export const Input = ({ inputValue, setInputValue }) => {
    const texts = ['Варіант 1', 'Варіант 2', 'Варіант 3'];
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (isFocused) return;

        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % texts.length);
                setVisible(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [isFocused]);

    const inputStyle = {
        color: isFocused ? '#000' : 'transparent',
        caretColor: isFocused ? '#000' : 'transparent'
    };

    const animatedTextStyle = {
        opacity: visible ? 1 : 0
    };

    return (
        <div className={styles.containerStyle}>
            <textarea
                className={styles.inputStyle}
                style={inputStyle}
                value={inputValue}
                maxLength="200"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {!isFocused && (
                <div
                    className={styles.animatedTextStyle}
                    style={animatedTextStyle}
                >
                    {texts[index]}
                </div>
            )}
        </div>
    );
};
