import logo from './logo.svg';
import './App.css';
import { Header } from "./header/Header";
import MainInput from "./components/MainInput/MainInput";
import {InputProvider} from "./context/inputContext";
import {HashtagsProvider} from "./context/hashtagsContext";
import {Output} from "./components/Output/Output";

function App() {
  return (
      <InputProvider>
          <HashtagsProvider>
            <div className="App">
              <Header />
              <MainInput />
              <Output />
            </div>
          </HashtagsProvider>
      </InputProvider>
  );
}

export default App;
