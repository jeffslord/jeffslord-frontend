import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Jumbotron from 'react-bootstrap/Jumbotron'

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%"
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

// export default function Welcome(props) {
//   const classes = useStyles();

//   useEffect(() => {
//     document.title = "Home";
//   });

//   return (
//     <div className={classes.root}>
//       <Grid container justify="center" alignItems="center" direction="column">
//         <Grid item xs={12}>
//           <Typography variant="h1">WELCOME</Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="body1">This is the one and only website of Jeff Lord. Feel free to browse our limited selection of things.</Typography>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
function Welcome(props) {
  return (
    <div>
      <Jumbotron flud>
        <h1>Welcome</h1>
      </Jumbotron>
      <p>
        There is nothing else here at the moment.
      </p>
    </div>
  )
}

export default Welcome;