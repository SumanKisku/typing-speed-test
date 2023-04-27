import { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TypingBox from "./Components/TypingBox";
import { GlobalStyles } from "./styles/global";
import {useTheme} from './Context/ThemeContext'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const {theme} = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
    <div className="canvas">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      <GlobalStyles />
      <Header />
      <TypingBox />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
