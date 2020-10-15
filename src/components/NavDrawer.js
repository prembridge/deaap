import React from "react";
import {Home} from './Projects'
import {Employee} from './Campaigns'
import {Departments} from './Organization'
import {Groups} from './Groups'
import {Users} from './Users'
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom";
  import Divider from '@material-ui/core/Divider';
  import {
    Drawer, List, ListItem,
    ListItemIcon, ListItemText,
    Container, Typography, formatMs, AppBar,
    Toolbar,Button,
    IconButton,
  } from "@material-ui/core";
  
  import HomeIcon from "@material-ui/icons/Home";
  import InfoIcon from '@material-ui/icons/Info';
  import HomeIcon from "@material-ui/icons/Home";
  import AddShoppingCart from "@material-ui/icons/AccountCircle"
export class NavDrawer extends React.Component {
    constructor(props) {
        super(props);
        //this.sayHello = this.sayHello.bind(this);
      }
    
    //   sayHello() {
    //     <project/>
    //   }
  render() {
    return (
        <Router> 
      <Drawer
        anchor="left"
        open={this.drawerOpened}
        onClose={this.toggleDrawer(false)}
      >
        <div
          onClick={this.toggleDrawer(false)}
          onKeyDown={this.toggleDrawer(false)}
        >
          
          <Divider />
          <List>
            <Link to="/pro">
              <ListItem button>
                <ListItemIcon>
                  <AddShoppingCart/>
                </ListItemIcon>
                <ListItemText primary={"Projects"} />
              </ListItem>
            </Link>
            <Link to="/org">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Organization"} />
              </ListItem>
            </Link>
            <Link to="/camp" >
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Campaigns"} />
              </ListItem>
            </Link>
            <Link to="/form" >
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Forms"} />
              </ListItem>
            </Link>
            <Link to="/group" >
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Groups"} />
              </ListItem>
            </Link>
            <Link to="/users">
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"Users"} />
              </ListItem>
            </Link>
          </List>
        <Switch>
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
      </Drawer>
      </Router>
    );
    }
}
export default NavDrawer;