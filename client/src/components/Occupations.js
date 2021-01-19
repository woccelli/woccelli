import React, { Component } from 'react'
import { PropTypes } from "prop-types"
import { Container, Grid, withStyles, Typography } from '@material-ui/core';
import logo from "../images/woccelli-logo-pink.png"
const styles = theme => ({
    root: {
        margin: "auto",
        height: "100vh"
    },
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center"
    },
    item: {
        flexDirection: "column",
        alignItems: "center",
        margin: "auto"
    },
    text: {
        padding: theme.spacing(3)
    }
})

class Occupations extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.root}>
                <Grid container className={classes.container}>
                    <Grid container className={classes.item}>
                        <Grid item className={classes.text}><Typography color="primary" variant="h2">WORK IN PROGRESS...</Typography></Grid>                            
                        <Grid item><img className="Occupations-logo" src={logo} alt="logo" height="150px"></img></Grid>
                        <Grid item className={classes.text}><Typography color="primary" variant="subtitle">I'll publish content asap.</Typography></Grid>    
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

Occupations.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Occupations)