import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, Typography, IconButton, Avatar, Container } from '@material-ui/core';
import { LinkedIn, GitHub, Work, Home, Cake } from "@material-ui/icons"
import { withStyles } from '@material-ui/core/styles';
import profilePic from "../../images/me.png"
import Moment from 'react-moment';
import moment from 'moment';

const styles = theme => ({
    root: {
        minWidth: 275,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        width: "100px",
        height: "100px"
    },
    name: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    carac: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',  
    },
    profileIcon: {
        marginRight: theme.spacing(1)
    }
});

class ProfileCard extends Component {

    render() {
        const { classes } = this.props;
        const birthDate = moment("03/03/1997 19:30")
        return (
            <Card className={classes.root}>
                <Avatar
                    alt="Profile image"
                    src={profilePic}
                    className={classes.avatar}
                />
                <CardContent>
                    <Container className={classes.name}>
                        <Typography variant="h6">
                            William Occelli
                    </Typography>
                    </Container>
                    <Container>
                        <Typography className={classes.carac}>
                            <Work className={classes.profileIcon}/>
                        <p>IT Engineer, Fullstack Dev</p>
                    </Typography>
                        <Typography className={classes.carac}>
                            <Home className={classes.profileIcon}/>
                            <p>Lyon, France</p>
                    </Typography>
                        <Typography className={classes.carac}>
                            <Cake className={classes.profileIcon}/>
                            <p><Moment date={birthDate} interval={60000} durationFromNow format /></p>
                        </Typography>
                    </Container>
                </CardContent>
                <CardActions>
                    <IconButton size="small" href="https://www.linkedin.com/in/william-occelli/">
                        <LinkedIn />
                    </IconButton>
                    <IconButton size="small" href="https://github.com/woccelli">
                        <GitHub />
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

ProfileCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);