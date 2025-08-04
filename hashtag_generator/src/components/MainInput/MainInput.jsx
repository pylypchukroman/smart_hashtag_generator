import styles from './MainInput.module.scss';
import {useState} from "react";
import {openAI} from "../../api/openAI";


const MainInput = () => {
    const [inputValue, setInputValue] = useState('');

    function handleChange (e) {
        setInputValue(e.target.value);
    }
    function handleSubmit (e) {
        e.preventDefault();
        openAI(inputValue);
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
            <button type="submit">
                submit
            </button>
        </form>
    );
};

export default MainInput;
