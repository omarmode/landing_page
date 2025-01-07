import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Switch, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import About from './pages/About';
// import Rewards from './pages/Rewards';
// import FAQ from './pages/FAQ';
// import APIPage from './pages/APIPage';
// import DownloadApp from './pages/DownloadApp';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#1d4ed8' },
      secondary: { main: '#9333ea' },
    },
    typography: { fontFamily: 'Arial, sans-serif' },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
       
        <div className="shared-background">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Home />
        </div>

        
        <Routes>
          <Route path="/about" element={<About />} />
          {/* <Route path="/rewards" element={<Rewards />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/api" element={<APIPage />} />
          <Route path="/download" element={<DownloadApp />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
