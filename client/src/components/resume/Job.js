import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';
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

class Job extends Component {

    render() {
        const { classes } = this.props;
        const { company, title, description } = this.props.job
        return (
            <Card className={classes.root}>
                <CardContent className={classes.content}>
                    <Typography variant="h4">
                        {title}
                    </Typography>
                    <Typography component="h6" >
                        {company}
                    </Typography>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

Job.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Job);