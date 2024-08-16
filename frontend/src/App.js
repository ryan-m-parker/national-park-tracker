import './App.css';
import MapPage from './pages/MapPage';
import ParksProvider from './contexts/ParksProvider';
import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() => createTheme({
    palette: {
      mode
    }
  }), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <ParksProvider>
            <CssBaseline/>
            <MapPage />
          </ParksProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
