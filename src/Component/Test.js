import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function Test() {
  const classes = useStyles();
  return (
    
      <div className={classes.root}>
          <Grid container spacing={6}>
        <Grid item xs={6}>
          <Paper className={classes.paper}><h2>REACT DEVELOPER</h2>
       
           <h1>Skills</h1>
           <p><b>HTML/CSS skills.<br/>
Analytical skills.<br/>
Responsive design skills.<br/>
JavaScript skills.<br/>
Interpersonal skills.<br/>
Testing and debugging skills.<br/>
Back-end basics.<br/>
Search engine optimization</b></p></Paper>
        </Grid>
        </Grid>
      </div>
      
    
  )
}

export default Test
