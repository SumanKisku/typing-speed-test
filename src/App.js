import TypingBox from "./components/TypingBox";
import { GlobalStyles } from "./styles/global";

function App() {
  
  return (
    <div className="canvas">
      <GlobalStyles />
      <div>header</div>
      <TypingBox />
      <div>footer</div>
    </div>
  );
}

export default App;
