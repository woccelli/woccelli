import React, { Component } from "react"
import PropTypes from 'prop-types';
import { Container, Grid } from "@material-ui/core";
import Profile from "./resume/Profile";
import SendResume from "./resume/SendResume";
import { withStyles } from '@material-ui/core/styles';
import Diplomas from "./resume/Diplomas";
import Certificates from "./resume/Certificates";
import Experiences from "./resume/Experiences";

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    workGrid: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center'
    }
})

class Work extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.root}>
                <Grid container justify="center" spacing={2} className={classes.workGrid}>
                    <Grid item xs >
                        <Profile />
                    </Grid>
                    <Grid item xs >
                        <SendResume />
                    </Grid>
                    <Grid item xs={12}>
                        <Diplomas />
                    </Grid>
                    <Grid item xs={12}>
                        <Experiences />
                    </Grid>
                    <Grid item xs={12}>
                        <Certificates />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}


Work.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Work)