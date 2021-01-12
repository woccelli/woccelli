import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, Typography, Button, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import profilePic from "../../images/me.png"
const styles = theme => ({
    root: {
        minWidth: 275,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
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
    }
});

class ProfileCard extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.root}>
                <Avatar
                    alt="Profile image"
                    src={profilePic}
                    className={classes.avatar}
                />
                <CardContent>

                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        )
    }
}

ProfileCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);