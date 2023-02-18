import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import { Feed,Navbar,RightBar,Sidbar } from "./componentes"
import AddPost from './componentes/addPost/AddPost';

function App() {

  const [mode, setMode] = useState("light")

  const darkMode = createTheme ({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkMode}>
        <Box className="App" bgcolor={"background.default"} color="text.primary">
          <Navbar/>
          <Stack direction="row" spacing={2} justifyContent="space-evenly">
            <Sidbar setMode={setMode} mode={mode}/>
            <Feed/>
            <RightBar/>
          </Stack>
          <AddPost/>
        </Box>
    </ThemeProvider>
  );
}

export default App;
