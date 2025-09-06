import styles from '../src/App.module.scss'
import {MainInput} from "./components/MainInput/MainInput";
import {InputProvider} from "./context/inputContext";
import {HashtagsProvider} from "./context/hashtagsContext";
import {Output} from "./components/Output/Output";
import {Loader} from "./components/Loader/Loader";
import {Hero} from "./components/Hero/Hero";
import {useState} from "react";

function App() {
  const [loading, setLoading] = useState(false);
  return (
      <InputProvider>
          <HashtagsProvider>
            <div className={styles.app}>
              <Hero/>
              <MainInput setLoading = {setLoading} />
              {loading ? <Loader /> : <Output />}
            </div>
          </HashtagsProvider>
      </InputProvider>
  );
}

export default App;
