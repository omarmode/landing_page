import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Button, Typography, Container, Switch } from '@mui/material';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // إنشاء الثيم بناءً على الوضع الحالي
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', // التحكم في الوضع
      primary: {
        main: '#1d4ed8',
      },
      secondary: {
        main: '#9333ea',
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to MUI
        </Typography>
        <Typography variant="body1" paragraph>
          Switch between Dark and Light modes using the toggle below!
        </Typography>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          color="primary"
        />
        <Typography variant="body2" paragraph>
          {darkMode ? 'Dark Mode Enabled' : 'Light Mode Enabled'}
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
