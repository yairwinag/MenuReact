import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
}from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import MailIcon from '@material-ui/icons/Mail';

const styles =  {
  header : {
    height : 100,
    background : 'gray',
  },
  drawer :{
    width : 300,
  },

}
class App extends React.Component {
  state = {
    drawer : false
  };

  toggleDrawer = () =>{
    this.setState ({
      drawer : !this.state.drawer
    });
  }
  render(){
    return(
      <Router>
      <div>
        <AppBar position = "static">
          <Toolbar>
            <IconButton color = "inherit" onClick = {this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography varient = 'h5'>
              Menu React
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer open = {this.state.drawer} onClose = {this.toggleDrawer}>
          <header style = {styles.header}> </header>
          <List style = {styles.drawer}>
              <Link to= "/" style = {{textDecoration:'none'}}>
                  <ListItem onClick = {this.toggleDrawer}>
                     <ListItemIcon >
                          <HomeIcon />
                     </ListItemIcon>
                     <ListItemText primary = "Home" />
                 </ListItem>
              </Link>
              <Link to ="/users">
                   <ListItem onClick = {this.toggleDrawer}>
                      <ListItemIcon >
                         <FaceIcon />
                      </ListItemIcon>
                      <ListItemText primary = "Users" />
                  </ListItem>
              </Link>

              <Link to ="/contact">
                    <ListItem onClick = {this.toggleDrawer}>
                       <ListItemIcon >
                          <MailIcon />
                       </ListItemIcon>
                    <ListItemText primary = "Contact" />
                   </ListItem>
             </Link>
          </List>

        </Drawer>
          <div>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/users" component = {Users} />
            <Route  path = "/users/:name" component = {Detail} />
            <Route  path = "/contact" component = {Contact} />

          </div>
      </div>
      </Router>
    )
  }
}

const Home = props => <div><h1>Home</h1></div>;
const Contact = props => <div><h1>Contact</h1></div>;
const Users = props => (
  <div>
    <h1>User</h1>
    <ul>
      <li>
          <Link to = "/users/alice">Alice</Link>
      </li>
      <li>
          <Link to = "/users/bob">bob</Link>
      </li>
    </ul>
  </div>
);
const Detail = props => <div> <h1>User- {props.match.params.name}</h1></div>;

export default App;
