import React,{Component} from 'react';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Home} from './Projects'
import {Employee} from './Campaigns'
import {Departments} from './Organization'
import {Groups} from './Groups'
import {Users} from './Users'
import {login} from './Login'
import { makeStyles,useTheme } from "@material-ui/core/styles"
import Menu from "@material-ui/icons/Menu";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography, formatMs, AppBar,
  Toolbar,Button,
  IconButton,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import AddShoppingCart from "@material-ui/icons/AccountCircle"
import People from "@material-ui/icons/People"
import EventNote from "@material-ui/icons/EventNote"
import QueuePlayNext from "@material-ui/icons/QueuePlayNext"
import Login from './Login';
import Registation from './Registation';


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  appBar: {
    background:"none",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))



function Welcome() {

  
  const classes = useStyles();

 // const preventDefault = (event) => event.preventDefault();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const clickevent =() =>{
 // <Home/>
}

 return (
    <div className={classes.root}>
      <CssBaseline />
    <AppBar position="sticky"  className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} >
    <Toolbar>
      <IconButton aria-label="app" color="#eb34c9"
       aria-label="open drawer"
       onClick={handleDrawerOpen}
       edge="start"
       className={clsx(classes.menuButton, {
         [classes.hide]: open,
       })}>
        <Menu />
      </IconButton>
      <img style={{width: 50, height: 50}}  src={process.env.PUBLIC_URL + 'images/log.jpg'} />
      <Typography  style ={{align: "center",flexGrow: 1}} variant="h3"> Welcome to DUE App </Typography>
      <Typography  style ={{align: "center",flexGrow: 1}}variant="h7"> login </Typography>
      <Typography  style ={{align: "center",flexGrow: 1}}variant="h7"> Registations </Typography>
    </Toolbar>
  </AppBar>,
    <Router>
      <div style={{ display: 'flex' }}>

        <Drawer
           style={{ width: '220px'}}
           variant="persistent"
           anchor="left"
           open={true}

          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
           <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
          <List>
          <Link to="/Reg" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <AddShoppingCart/>
                </ListItemIcon>
                <ListItemText primary={"Registation"} />
              </ListItem>
            </Link>
            <Link to="/Log" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <AddShoppingCart/>
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItem>
            </Link>
            <Link to="/pro" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <QueuePlayNext/>
                </ListItemIcon>
                <ListItemText primary={"Projects"} />
              </ListItem>
            </Link>
            <Link to="/org" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <People/>
                </ListItemIcon>
                <ListItemText primary={"Organization"} />
              </ListItem>
            </Link>
            <Link to="/camp" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <EventNote/>
                </ListItemIcon>
                <ListItemText primary={"Campaigns"} />
              </ListItem>
            </Link>
            <Link to="/form" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Forms"} />
              </ListItem>
            </Link>
            <Link to="/group" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText primary={"Groups"} />
              </ListItem>
            </Link>
            <Link to="/users" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"Users"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
        <Route exact path="/Reg">
            <Container>
            <Registation/>
            </Container>
          </Route>
          <Route exact path="/Log">
            <Container>
            <Login/>
            </Container>
          </Route>
          <Route exact path="/pro">
            <Container>
            <Home/>
            </Container>
          </Route>
         
          <Route exact path="/org">
            <Container>
             <Departments/>
            </Container>
          </Route>
          <Route exact path="/camp">
            <Container>
             <Employee/>
            </Container>
          </Route>

          <Route exact path="/group">
            <Container>
             <Groups/>
            </Container>
          </Route>
          <Route exact path="/users">
            <Container>
             <Users/>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  </div>

  );
  
}

export default Welcome;