import React from 'react';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export default function Details(props) {
  return (
    <Paper elevation={3} sx={{height: '100%'}}>
      <Box sx={{p:5}}>
        <Typography variant='h5' textAlign='center' sx={{textDecoration: 'underline', mb:5}}>Patient Details</Typography>
        {Object.entries(props.data).map((ele)=>(
          <Stack direction="row" spacing={2} alignItems='center'>
            <Typography variant='h6'>
              {ele[0]}
            </Typography>
            <Typography variant='p'>
              {ele[1]}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Paper>
  );
}