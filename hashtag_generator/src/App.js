import styles from '../src/App.module.scss'
import {MainInput} from "./components/MainInput/MainInput";
import {InputProvider} from "./context/inputContext";
import {HashtagsProvider} from "./context/hashtagsContext";
import {Output} from "./components/Output/Output";
import {Loader} from "./components/Loader/Loader";
import {Hero} from "./components/Hero/Hero";

function App() {
  return (
      <InputProvider>
          <HashtagsProvider>
            <div className={styles.app}>
              <Hero/>
              {/*<Loader />*/}
              <MainInput />
              <Output />
            </div>
          </HashtagsProvider>
      </InputProvider>
  );
}

export default App;
