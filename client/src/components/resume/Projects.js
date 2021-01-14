import React, { Component } from 'react'
import { Card, Grid, Typography, CardContent } from '@material-ui/core';
import Project from './Project'
import projects from './data/projects'
import { withStyles } from '@material-ui/core/styles';
import { ImportantDevices } from '@material-ui/icons';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    grid: {
        alignItems: 'center'
    },

})

class Projects extends Component {
    render() {
        const { classes } = this.props;
        return (

            <Card className={classes.root}>
                <ImportantDevices />
                <Typography variant="h5">Projects</Typography>
                <CardContent>
                    <Grid container justify="center" className={classes.grid} spacing={2}>
                        {
                            projects.map((project, i) => <Grid key={i} item xs={12} md={6}><Project project={project} /></Grid>)
                        }
                    </Grid>
                </CardContent>
            </Card>

        )
    }
}

export default withStyles(styles)(Projects)