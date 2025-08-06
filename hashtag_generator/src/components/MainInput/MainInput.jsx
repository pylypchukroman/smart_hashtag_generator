import styles from './MainInput.module.scss';
import {useContext, useState} from "react";
import {generateHashtags} from "../../api/controller";
import {InputContext} from "../../context/inputContext";
import {HashtagContext} from "../../context/hashtagsContext";


const MainInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [numberOfHashtags, setNumberOfHashtags] = useState(1);
    const { input , setInput } = useContext(InputContext);
    const { hashtags, setHashtags } = useContext(HashtagContext);

    function handleChange (e) {
        setInputValue(e.target.value);
    }

    function handleNumberOfHashtagsChange (e) {
        setNumberOfHashtags(e.target.value)
    }

    async function handleSubmit (e) {
        e.preventDefault();
        const hash = await generateHashtags(inputValue, numberOfHashtags);
        setHashtags(hash);
        setInput(inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className={styles.input}
                type="text"
                onChange={handleChange}
                value={inputValue}
            >
            </input>
            <p>{inputValue}</p>
            <input
                className={styles.numberInput}
                type="range"
                min="1"
                max="10"
                step="1"
                onChange={handleNumberOfHashtagsChange}
                value={numberOfHashtags}
            >
            </input>
            <p>{numberOfHashtags}</p>
            <button type="submit">
                submit
            </button>
        </form>
    );
};

export default MainInput;
