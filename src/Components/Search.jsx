import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../data/patients";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Search(props) {
  const [option, setOption] = useState(0);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  const [pdata, setPdata] = useState(data);
  pdata.sort((a, b)=> b.PID-a.PID);

  const handleData = (event) => {
    const arr = [];
    const val = event.target.value;
    data.forEach((e) => {
      if (
        (option === 0 || option === 1) &&
        e.PID.toString().indexOf(val) !== -1
      )
        arr.push(e);
      else if ((option === 0 || option === 2) && e.name.indexOf(val) !== -1)
        arr.push(e);
      else if (
        (option === 0 || option === 3) &&
        e.mob.toString().indexOf(val) !== -1
      )
        arr.push(e);
    });

    setPdata(arr);
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} p={5} textAlign="center">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            PATIENT SEARCH
          </Typography>
          <Stack
            spacing={2}
            direction="row"
            mt={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel id="demo-simple-select-label">
                PID / Name / Mobile
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={option}
                label="Room"
                onChange={handleChange}
              >
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={1}>PID</MenuItem>
                <MenuItem value={2}>Name</MenuItem>
                <MenuItem value={3}>Mobile</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              size="small"
              sx={{ flex: "1 0 0" }}
              onChange={handleData}
            />
          </Stack>
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>PID</TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold" }}>
                    Name
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold" }}>
                    Age/Sex&nbsp;
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold" }}>
                    Mobile No.&nbsp;
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pdata.map((patient) => (
                  <TableRow
                    key={patient.PID}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 }, cursor: 'pointer', ":hover": {backdropFilter: 'brightness(90%)'}}}
                    onClick = {()=>{props.setPdetails(patient); props.handleClose();}}
                  >
                    <TableCell component="th" scope="row">
                      {patient.PID}
                    </TableCell>
                    <TableCell align="right">{patient.name}</TableCell>
                    <TableCell align="right">
                      {patient.age}Y / {patient.sex}
                    </TableCell>
                    <TableCell align="right">{patient.mob}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
}
