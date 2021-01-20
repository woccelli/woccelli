import React, { Component } from 'react'
import PropTypes from 'prop-types';
import woccelli from '../images/woccelli-logo-black.svg'
import { Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"
import { withStyles } from '@material-ui/core/styles';
import backgroundImg from "../images/landing.jpg"

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: 0,
        display: 'inline-flex',
        flexDirection: 'row',
        backgroundImage: `url(${backgroundImg})`,
        backgroundColor: '#cccccc',
        height: '101vh',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    half: {
        display: 'flex',
        margin: 'auto',
        overflow: 'hidden',
        flex: 1,
        height: '100vh',
        textAlign: 'center',
        '&:hover': {
            background: "rgba(255, 255, 255, 0.1)",
        },
    },
    logo: {
        position: 'absolute',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '25px',
        zIndex: 5,
        height: '90px',
        width: '100%',
        opacity: '0.7',
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            verticalAlign: 'middle',
            zIndex: 5,
            width: '30%',
            opacity: 0.7,
        },
    },
    button :{
        margin: "auto", 
        borderRadius: 10, 
        border: '2px solid'
    }
});

class Landing extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <img className={classes.logo} src={woccelli} alt="woccelli" width="50" height="55" />
                <div className={classes.half} id="landing-left">
                    <Button component={Link} to="/work" color="primary" variant='outlined' className={classes.button}><Typography variant="h2">Work</Typography></Button>
                </div>
                <div className={classes.half} id="landing-right">
                    <Button component={Link} to="/occupations" color="primary" variant='outlined' className={classes.button}><Typography variant="h2">Occupations</Typography></Button>
                </div>
            </div>
        )
    }
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing)