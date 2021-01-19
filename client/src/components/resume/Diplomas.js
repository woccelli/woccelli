import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Grid, Switch, Chip, Checkbox } from '@material-ui/core';
import { School, Settings,FavoriteBorder, Favorite } from "@material-ui/icons"
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
    diplomas: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    list: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center"
    },
    schoolimage: {
        width: "150px",
        marginRight: theme.spacing(2)
    },
    settings: {
        display: 'flex',
        flexDirection: 'column',
    },
    second: {
        paddingRight: theme.spacing(4)
    }
});

class Diplomas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activatedFirst: false,
            colorFirst: "default",
            activatedSecond: false,
            colorSecond: "default",
            activatedThird: false,
            colorThird: "default",
            iconFirst: false,
            iconSecond: false,
            iconThird: false
        }
    }

    componentDidMount() {
        setTimeout(
            () => this.setState({ activatedFirst: true, colorFirst: "secondary" }), 
            2000
        )
        setTimeout(
            () => this.setState({ activatedSecond: true, colorSecond: "secondary" }), 
            3000
        )
        setTimeout(
            () => this.setState({ iconFirst: true}), 
            3500
        )
        setTimeout(
            () => this.setState({ iconSecond: true}), 
            4000
        )
        setTimeout(
            () => this.setState({ iconThird: true}), 
            4500
        )
    }

    render() {


        const { classes } = this.props;
        return (
            <Card className={classes.root}>
                <Grid container >
                    <Grid item md={8} xs={12} className={classes.diplomas}>
                        <CardContent className={classes.list} >
                            <Grid item className={classes.list}>
                                <School />
                                <Typography variant="h5">Diplomas</Typography>
                            </Grid>
                            <Grid item>
                                <List >
                                    <ListItem>
                                        <ListItemIcon>
                                            <img className={classes.schoolimage} src={insa} alt="insa" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Institut National des Sciences Appliquées de Lyon"
                                            secondary="Master of Engineering - Computer Science and Information Technologies" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <img className={classes.schoolimage} src={passau} alt="passau" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Universität Passau"
                                            secondary="Master of Science - Information and Communication Systems" />
                                    </ListItem>
                                </List>
                            </Grid>
                        </CardContent>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.second}>
                        <CardContent className={classes.list}>
                            <Grid item className={classes.list}>
                                <Settings />
                            </Grid>
                            <Grid item className={classes.settings}>
                            <List >
                                    <ListItem>
                                        <Switch checked={this.state.activatedFirst} /><Chip variant="outlined" color={this.state.colorFirst} label={this.state.activatedFirst ? <Typography>Driver's license activated</Typography> : <Typography>Driver's license</Typography>} />
                                        </ListItem>
                                    <ListItem>
                                    <Switch checked={this.state.activatedSecond} /><Chip variant="outlined" color={this.state.colorSecond} label={this.state.activatedSecond ? <Typography>Vehicle activated</Typography> : <Typography>Vehicle</Typography>} />
                                    </ListItem>
                                    <ListItem>
                                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked={this.state.iconFirst} name="checkedH1" /> French (native)
                                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked={this.state.iconSecond} name="checkedH2" />  English (fluent)
                                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked={this.state.iconThird} name="checkedH3" /> German (experimented)
                                    </ListItem>
                                </List>
                            </Grid>
                        </CardContent>
                    </Grid>

                </Grid>
            </Card>
        )
    }
}

Diplomas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Diplomas);