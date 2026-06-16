import styles from './App.module.scss';
import { MainInput } from './components/MainInput/MainInput';
import { InputProvider } from './context/inputContext';
import { HashtagsProvider } from './context/hashtagsContext';
import { ThemeProvider } from './context/themeContext';
import { Output } from './components/Output/Output';
import { Loader } from './components/Loader/Loader';
import { Hero } from './components/Hero/Hero';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider>
      <InputProvider>
        <HashtagsProvider>
          <div className={styles.app}>
            <div className={styles.bgOrb1} aria-hidden="true" />
            <div className={styles.bgOrb2} aria-hidden="true" />

            <main className={styles.main}>
              <div className={styles.headerBar}>
                <ThemeToggle />
              </div>
              <Hero />

              <section className={styles.card} aria-label="Hashtag generator">
                <MainInput setLoading={setLoading} />
                <div className={styles.resultsArea}>
                  {loading ? <Loader /> : <Output />}
                </div>
              </section>
            </main>
          </div>
        </HashtagsProvider>
      </InputProvider>
    </ThemeProvider>
  );
}

export default App;
