import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Trail from './Trail'
import { render } from 'react-dom'


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
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
  

const WithMaterialUI = () => {
    const [open, set] = useState(true)

    const classes = useStyles();

  const formik = useFormik({
    initialValues: {
        name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    
    <div id="form" className={classes.root}>
         <Trail open={open} onClick={() => set((state) => !state)}>
      <span>Contact</span>
      <span>Me</span>
       </Trail>
         <br/>
         <br/> 
         <Grid container spacing={8}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
      <form  id="newForm" onSubmit={formik.handleSubmit}>
          
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
                <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          type="text"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <br/>
        <br/><Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      </Paper>
        </Grid>
        </Grid>
    </div>
  );
};

ReactDOM.render(<WithMaterialUI />, document.getElementById('root'));
export default WithMaterialUI;