import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, Typography,Button, Container, Hidden} from '@material-ui/core';
import ReactWordcloud from 'react-wordcloud';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"


const wordCloudOptions = {
    enableTooltip: false,
    colors: ["#7DB5B3", "#84B4D7", "#9d8189", "#F49690"],
    fontFamily: "Roboto",
    padding: 1,
    rotations: 2,
    fontSizes: [10, 60],
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        background: 'transparent',
        border: 'none',
        boxShadow:'none'
    },
    content : {
        width:"105%",
        margin: 'auto'
    }
});

class Profile extends Component {

    render() {
        const { classes } = this.props;
        const { name, description, features, shortname } = this.props.project
        return (
            <Card className={classes.root}>
                <Container className={classes.content}>
                    <Typography variant="h4">
                        {name}
                    </Typography>
                    <Typography  component="p" >
                        {description}
                    </Typography>
                    </Container>
                <CardContent className={classes.content}>
                    <Hidden xsDown>
                    <ReactWordcloud words={features} options={wordCloudOptions} />
                    </Hidden>
                </CardContent>
                <CardActions>
                    <Link to={`/work/projects/${shortname}`}>
                        <Button size="large">Learn More</Button>
                    </Link>
                </CardActions>
            </Card>
        )
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);