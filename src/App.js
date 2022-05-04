import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Navbar from './Components/Navbar';
import Details from './Components/Details';
import NewAddmission from './Components/NewAdmission';

function App() {
  const [pdetails, setPdetails] = useState({});

  return (
    <div className="App">
      <Grid container spacing={1} sx={{flexDirection: 'column'}}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item sx={{flexGrow: 1, flexShrink: 0}}>
          <Box m={3} sx={{height: '100%'}}>
            <Grid container spacing={1} sx={{height: '100%'}}>
              <Grid item xs={4}>
                <Details data={pdetails}/>
              </Grid>
              <Grid item xs={8}>
                <NewAddmission pdetails={pdetails} setPdetails = {setPdetails}/>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
