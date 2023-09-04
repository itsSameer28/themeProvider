import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@mui/styles";

//UseStyles used for injected css to each components
//makeStles used for making css classes
const useStyles = makeStyles({
  root: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    // height: 48,
    padding: "0 30px",
    textAlign: "center",
  },
  container1: {
    marginTop: 20,
  },
  container2: {
    marginTop: 50,
  },
});

export default function Page2() {
  const classes = useStyles();

  return (
    <div className="noselect" >
      <div style={{display : 'flex' ,justifyContent:"space-around"}}>
          <Typography className={classes.container2} color="secondary">
            <b>About Us</b><br/><br/>
            There are many variations of passages of Lorem Ipsum available, but
            the
            <br />
            majority have suffered alteration in some form, by injected humour,
            or
            <br />
            randomised words which don't look even slightly believable. If you
            are
            <br />
            going to use a passage of Lorem Ipsum, you need to be sure there
            isn't
            <br />
            anything embarrassing hidden in the middle of text. All the Lorem
            Ipsum
            <br />
            generators on the Internet tend to repeat predefined chunks as
            <br />
            necessary, making this the first true generator on the Internet. It
            uses
            <br />
            a dictionary of over 200 Latin words, combined with a handful of
            model
            <br />
            sentence structures, to generate Lorem Ipsum which looks reasonable.
            The
            <br />
            generated Lorem Ipsum is therefore always free from repetition,
            injected
            <br />
            humour, or non-characteristic words etc.
          </Typography>
          <br />
          <br />
            <img src="https://media.istockphoto.com/id/1163589059/photo/about-us.jpg?s=612x612&w=0&k=20&c=xiAumkYaKpQc3xepslDpn-lFhYPae6ivX_rRkgSXJgs=" alt="" style={{margin : "30px"}}></img>

      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import { Button, TextField } from '@mui/core';
// import { Container, Grid, Typography } from '@mui/material';

// const Form = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Submitted');
//   };

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" align="center" gutterBottom>
//         Example Form
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               label="Name"
//               variant="outlined"
//               fullWidth
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               type="email"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Password"
//               variant="outlined"
//               fullWidth
//               type="password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant="contained" color="primary" type="submit">
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default Form;
