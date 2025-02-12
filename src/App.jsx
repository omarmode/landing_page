import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs/AboutUs';
import APiPage from './pages/ApiPage/APIPage';
import TermsOfUse1 from './pages/TermsofUse1';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      ...(darkMode && {
        background: {
          default: '#00040F',
          paper: '#00040F',
        },
      }),
      primary: { main: '#1d4ed8' },
      secondary: { main: '#9333ea' },
    },
    typography: { fontFamily: 'Arial, sans-serif' },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* **مسار رئيسي يحتوي على `Navbar` ما عدا في صفحة `dashboard`** */}
          <Route element={<Layout darkMode={darkMode} setDarkMode={setDarkMode} />}>
          <Route path="/" element={<Home darkMode={darkMode} />} />

            <Route path="/about" element={<About />} />
            <Route path="/APiPage" element={<APiPage darkMode={darkMode} />} />
            <Route path="/about-us" element={<AboutUs theme={darkMode ? 'dark' : 'light'} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy theme={darkMode ? 'dark' : 'light'} />} />
            <Route path="/terms-ofuse" element={<TermsOfUse1 theme={darkMode ? 'dark' : 'light'} />} />
          </Route>

          {/* صفحة `Dashboard` بدون `Navbar` */}
          <Route path="/dashboard" element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

// **مكون `Layout` لإخفاء الـ Navbar في صفحات معينة**
function Layout({ darkMode, setDarkMode }) {
  const location = useLocation();

  return (
    <>
      {/* **إظهار Navbar فقط إذا لم يكن في صفحة `dashboard`** */}
      {location.pathname !== '/dashboard' && <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />}
      <Outlet />
    </>
  );
}

export default App;
