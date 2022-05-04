import React, {useState} from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import FormGroup from "@mui/material/FormGroup";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Search from "./Search";

export default function NewAddmission(props) {
  const [value, setValue] = useState(null);

  const [room, setRoom] = useState('');

  const handleChange = (event) => {
    setRoom(event.target.value);
  };

  const [consultant, setConsultant] = useState('');

  const handleChange2 = (event) => {
    setConsultant(event.target.value);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={3} sx={{ height: "100%" }}>
      <Button variant="contained" sx={{ margin: "20px" }} onClick={handleOpen}>
        Search Patient
      </Button>

      <FormGroup sx={{ margin: "0 auto", width: "fit-content" }}>
        <Typography
          variant="h5"
          sx={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Addmission Details
        </Typography>
        <Box sx={{margin: '20px'}}>
          <Stack spacing={2} direction="row" mt={1} justifyContent="space-between">
            <Typography variant="p" sx={{display: 'inline-block', alignSelf: 'center'}}>Addmission Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Date&Time picker"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Stack>
          <Stack spacing={2} direction="row" mt={1} justifyContent="space-between">
            <Typography variant="p" sx={{display: 'inline-block', alignSelf: 'center'}}>Bed No.</Typography>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Room</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={room}
                // size="small"
                label="Room"
                onChange={handleChange}
              >
                <MenuItem value={1}>1/01</MenuItem>
                <MenuItem value={2}>1/02</MenuItem>
                <MenuItem value={3}>1/03</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack spacing={2} direction="row" mt={1} justifyContent="space-between">
            <Typography variant="p" sx={{display: 'inline-block', alignSelf: 'center'}}>Consultant</Typography>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Consutant</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={consultant}
                // size="small"
                label="Room"
                onChange={handleChange2}
              >
                <MenuItem value={1}>Dr. Aman</MenuItem>
                <MenuItem value={2}>Dr. Sandip</MenuItem>
                <MenuItem value={3}>Dr. Pankaj</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack spacing={2} direction="row" mt={1} justifyContent="space-between">
            <Typography variant="p" sx={{display: 'inline-block', alignSelf: 'center'}}>Remarks</Typography>
            <TextField variant="outlined" size="small" multiline/>
          </Stack>
        </Box>
        <Typography
          variant="h5"
          sx={{ textDecoration: "underline", fontWeight: "bold" }}
        >
          Brought By Details
        </Typography>
        <Box sx={{margin: '10px'}}>
          <Stack spacing={2} direction="row" mt={1} justifyContent="space-between">
            <Typography variant="p" sx={{display: 'inline-block', alignSelf: 'center'}}>Name</Typography>
            <TextField variant="outlined" size="small"/>
          </Stack>
          <Stack spacing={2} direction="row" mt={1} justifyContent="space-between">
            <Typography variant="p" sx={{display: 'inline-block', alignSelf: 'center'}}>Mobile No.</Typography>
            <TextField variant="outlined" size="small"/>
          </Stack>
          <Stack spacing={2} direction="row" mt={1} justifyContent="space-between">
            <Typography variant="p" sx={{display: 'inline-block', alignSelf: 'center'}}>Address</Typography>
            <TextField variant="outlined" size="small"/>
          </Stack>
        </Box>
        <Stack spacing={2} direction="row" m={3} mr={0} justifyContent="flex-end">
          <Button variant="outlined" color="error">Cancel</Button>
          <Button variant="contained" color="success">Submit</Button>
        </Stack>
      </FormGroup>
      <Search open={open} handleClose={handleClose} pdetails={props.pdetails} setPdetails={props.setPdetails}/>
    </Paper>
  );
}
