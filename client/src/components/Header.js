import React, { Component } from "react"
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
import woccelli from "../images/woccelli-logo-black.svg"
import { Link } from "react-router-dom";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        flexDirection: "column",
        alignItems: "center"
    },
    menuButton: {
        flex: "0 1 auto",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)"
    },
    title: {
        flexGrow: 1,
        marginRight: theme.spacing(5),
    },
    button: {
        marginLeft: theme.spacing(5)
    }

});

class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            <AppBar className={classes.appbar} position="static">
                
              <Toolbar>
              <Typography variant="h6" className={classes.title}>
                  William Occelli
                </Typography>
                <IconButton  edge="start" className={classes.menuButton} component={Link} to="/" color="inherit" aria-label="menu">
                  <img src={woccelli} alt="woccelli" height="44"/>
                </IconButton>
      
                <Button component={Link} to="/work" className={classes.button} color="inherit">Work</Button>
                <Button component={Link} to="/occupations" color="inherit">Occupations</Button>
    
              </Toolbar>
            </AppBar>
          </div>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);