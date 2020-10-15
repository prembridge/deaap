import React,{Component} from 'react'
import NaveDrawer from './components/Welcome'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    minHeight :'100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/hands.jpeg"})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
    
  },
});


function App() {
  const classes = useStyles();
    return (
      <div className= {classes.root}>
          <CssBaseline />
        <NaveDrawer />
      </div>
    );
  }

 
export default App;