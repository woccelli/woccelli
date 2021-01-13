import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, Typography,Button, Container} from '@material-ui/core';
import ReactWordcloud from 'react-wordcloud';
import { withStyles } from '@material-ui/core/styles';



const wordCloudOptions = {
    enableTooltip: false,
    colors: ["#219ebc", "#14213D", "#FCA311", "#d62828"],
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
        padding: theme.spacing(2)
    },
    content : {
        margin: 'auto'
    }
});

class ProfileCard extends Component {

    render() {
        const { classes } = this.props;
        const { name, description, features } = this.props.project
        return (
            <Card className={classes.root}>
                <Container className={classes.content}>
                    <Typography variant="h5">
                        {name}
                    </Typography>
                    <Typography  component="p" >
                        {description}
                    </Typography>
                    </Container>
                <CardContent className={classes.content}>
                    <ReactWordcloud words={features} options={wordCloudOptions} />
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