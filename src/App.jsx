import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useGlobalStates } from './Components/utils/Context';
import { useEffect, useState } from "react";

function App() {
  const { state, dispatch } = useGlobalStates();
  const [theme, setTheme] = useState(createTheme(state.theme));

  useEffect(() => {
    setTheme(createTheme(state.theme));
  }, [state.theme]);

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>      
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
        <Footer/>
      
    </ThemeProvider>
  );
}

export default App;