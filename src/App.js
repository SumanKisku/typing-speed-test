import { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";
import TypingBox from "./Components/TypingBox";
import { GlobalStyles } from "./styles/global";
import {useThemeContext} from './Context/ThemeContext'

function App() {

  const {theme} = useThemeContext();
  
  return (
    <ThemeProvider theme={theme}>
    <div className="canvas">
      <GlobalStyles />
      <div>header</div>
      <TypingBox />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
