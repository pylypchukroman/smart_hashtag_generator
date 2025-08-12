import styles from './MainInput.module.scss';
import {useContext, useState} from "react";
import {generateHashtags} from "../../api/controller";
import {InputContext} from "../../context/inputContext";
import {HashtagContext} from "../../context/hashtagsContext";
import {Input} from "../Input/Input";


export const MainInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [numberOfHashtags, setNumberOfHashtags] = useState(1);
    const { input, setInput } = useContext(InputContext);
    const { hashtags, setHashtags } = useContext(HashtagContext);

    function handleChange (e) {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    function handleNumberOfHashtagsChange (e) {
        e.preventDefault();
        setNumberOfHashtags(e.target.value)
    }

    async function handleSubmit (e) {
        e.preventDefault();
        const hash = await generateHashtags(inputValue, numberOfHashtags);
        setHashtags(hash);
        setInput(inputValue);
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <Input
                inputValue={inputValue}
                setInputValue={setInputValue}
            />

            <div className={styles.numberInputWrapper}>
                <div className={styles.wrapper}>
                    <input
                        type="range"
                        id="rang"
                        min="1"
                        max="10"
                        step="1"
                        onChange={handleNumberOfHashtagsChange}
                        value={numberOfHashtags}
                        list="values"
                    >
                    </input>
                    <datalist id="values">
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                        <option value="6"></option>
                        <option value="7"></option>
                        <option value="8"></option>
                        <option value="9"></option>
                        <option value="10"></option>
                    </datalist>
                    <label className={styles.label} htmlFor="rang">Number of hashtags</label>
                    <p className={styles.hashtagsNumber}>{numberOfHashtags}</p>
                </div>
                <button type="submit" className={styles.submitBtn}>
                    Generate hashtags for Instagram
                </button>
            </div>
        </form>
    );
};
