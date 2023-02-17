import { Box, Stack } from '@mui/material';
import './App.css';
import { Feed,Navbar,RightBar,Sidbar } from "./componentes"

function App() {

  return (
    <Box className="App">
      
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-evenly">
      <Sidbar/>
      <Feed/>
      <RightBar/>
    </Stack>
  </Box>
  );
}

export default App;
