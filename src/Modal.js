import React, { useState } from "react";
import { Button, Modal, TextField, Typography } from "@material-ui/core";

const BasicModal = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submit:", inputValue);
    handleClose();
  };

  const inputLabelStyle = {
    style: { color: "yellow" },
  };

  const inputField = {
    style: {
      color: "orange",
      borderBottom: "1px solid black",
      
    },
  };
  return (
    <div>
      <Typography
        style={{ marginLeft: "35rem", marginTop: "1rem" }}
        color="secondary"
      >
        Thanks For Visiting!!
      </Typography>
      <br/>
      <br/>
      <div>
      <img src="https://i.postimg.cc/CMcQYhHq/post.jpg" alt="" width="200px" height="200px" style={{marginLeft:"34rem"}}></img>
      </div>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{ marginLeft: "33rem", marginTop: "4rem" }}
      >
        click To Send us FeedBack:
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          margin: "105px",
          textAlign: "center",
          backgroundColor: "grey",
        }}
      >
        <div>
          <br />
          <Typography color="secondary">FeedBack Section </Typography><br/>
          <TextField
            id="outlined-basic"
            label="Enter Your FirstName"
            variant="standard"
            color="secondary"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Enter Your FirstName"
            variant="standard"
            color="secondary"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Enter Your Email"
            variant="standard"
            color="secondary"
            autoComplete="off"
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
            onChange={handleInputChange}
          />{" "}
          <br />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Enter Your FeedBack"
            variant="standard"
            color="secondary"
            autoComplete="off"
            multiline
            rows={2}
            InputLabelProps={inputLabelStyle}
            InputProps={inputField}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <br />
          <Button variant="contained" onClick={handleSubmit} color="secondary">
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default BasicModal;