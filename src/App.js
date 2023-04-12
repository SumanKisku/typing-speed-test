import { GlobalStyles } from "./styles/global";
import {useTestMode} from './context/TestModeContext'

function App() {
  const testContxt = useTestMode();
  console.log(testContxt);
  return (
    <div className="App">
      <GlobalStyles />
     <h1 className="test">hello</h1>
    </div>
  );
}

export default App;
