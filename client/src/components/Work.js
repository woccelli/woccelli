import React, { Component } from "react"
import PropTypes from 'prop-types';
import { Container, Box, Grid } from "@material-ui/core";
import ExpCarousel from "./resume/ExpCarousel"
import ProfileCard from "./resume/ProfileCard";
import SendResume from "./resume/SendResume";
import { withStyles } from '@material-ui/core/styles';
import DiplomasCard from "./resume/DiplomasCard";


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    profile: {
        flexGrow: 1,
        display: 'flex',
    },
    profileCard: {
        marginRight: theme.spacing(2)
    },
    sendResumeCard: {
        marginLeft: theme.spacing(2)
    }
})

class Work extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Container>
                <Grid container justify="center" spacing={2} className={classes.profile} xs="auto" sm="auto" md="auto">
                    <Grid item >
                        <ProfileCard />
                    </Grid>
                    <Grid item >
                        <SendResume />
                    </Grid>
                    <Grid item>
                        <DiplomasCard />
                    </Grid>
                </Grid>
                <ExpCarousel />
            </Container>
        )
    }
}


Work.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Work)