import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


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
    content: {
        margin: 'auto'
    }
});

class Study extends Component {

    render() {
        const { classes } = this.props;
        const { title, description, link } = this.props.study
        return (
            <Card className={classes.root}>
                <CardContent className={classes.content}>
                    <Typography variant="h4">
                        {title}
                    </Typography>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Button>SEE DOCUMENT</Button>
                    </a>
                </CardActions>
            </Card>
        )
    }
}

Study.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Study);