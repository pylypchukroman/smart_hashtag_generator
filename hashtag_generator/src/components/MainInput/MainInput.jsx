import styles from './MainInput.module.scss';
import {useState} from "react";
import {generateHashtags} from "../../api/controller";


const MainInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [numberOfHashtags, setNumberOfHashtags] = useState(1);

    function handleChange (e) {
        setInputValue(e.target.value);
    }

    function handleNumberOfHashtagsChange (e) {
        setNumberOfHashtags(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault();
        generateHashtags(inputValue);
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
