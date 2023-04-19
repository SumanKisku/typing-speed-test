import Select from 'react-select'
import {themeOptions} from '../Utils/themeOptions'
import { useThemeContext } from "../Context/ThemeContext";

const Footer = () => {

  const {theme, setTheme} = useThemeContext();

  localStorage.setItem("theme", JSON.stringify(theme));
  
  const handleChange = (e) => {
    setTheme(e.value);
  }
  
  return (
    <div className="footer">
      <div className="links">
        links
      </div>
      <div className="themeOptions">
        <Select
        value={theme}
        onChange={handleChange}
        options={themeOptions} />
      </div>
    </div>
  )
}

export default Footer