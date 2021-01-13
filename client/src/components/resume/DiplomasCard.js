import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { School } from "@material-ui/icons"
import { withStyles } from '@material-ui/core/styles';
import insa from "../../images/insa.png"
import passau from "../../images/passau.png"

const styles = theme => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    schoolimage: {
        width: "150px",
        marginRight: theme.spacing(2)
    }
});

class DiplomasCard extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.root}>
                <School /> 
                <Typography variant="h5">Diplomas</Typography>
                <CardContent className={classes.list} >
                    <Container className={classes.name}>
                        <List component="nav" >
                            <ListItem>
                                <ListItemIcon>
                                    <img className={classes.schoolimage} src={insa} alt="insa"/>
                                </ListItemIcon>
                                <ListItemText  
                                primary="Institut National des Sciences Appliquées de Lyon"
                                secondary="Master of Engineering - Computer Science and Information Technologies"/>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <img className={classes.schoolimage} src={passau} alt="passau"/>
                                </ListItemIcon>
                                <ListItemText  
                                primary="Universität Passau"
                                secondary="Master of Science - Information and Communication Systems"/>
                            </ListItem>
                        </List>
                    </Container>
                </CardContent>
            </Card>
        )
    }
}

DiplomasCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiplomasCard);