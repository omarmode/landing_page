import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Dashboard from './pages/Dashboard'; // استيراد صفحة الداشبورد

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      ...(darkMode && {
        background: {
          default: '#00040F', // لون الخلفية الرئيسي في الوضع المظلم
          paper: '#00040F',   // لون الخلفية للعناصر الورقية مثل البطاقات
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
        {/* شريط التنقل */}
        <ConditionalNavbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* التنقل بين الصفحات */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy theme={darkMode ? "dark" : "light"} />} />
          <Route path="/dashboard" element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

// مكون لإظهار Navbar فقط في صفحات معينة
function ConditionalNavbar({ darkMode, setDarkMode }) {
  const location = useLocation(); // الحصول على المسار الحالي

  // إخفاء Navbar إذا كنا في صفحة "/dashboard"
  if (location.pathname === '/dashboard') {
    return null;
  }

  return <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />;
}

export default App;
