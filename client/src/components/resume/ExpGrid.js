import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import ProjectCard from './ProjectCard'
import experiences from './experiences'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        alignItems: 'center'
    }
})

class ExpGrid extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center" className={classes.root} spacing={2}>
                {
                    experiences.map((experience, i) => <Grid item xs={12} md={6}><ProjectCard key={i} project={experience} /></Grid>)
                }
            </Grid>

        )
    }
}

export default withStyles(styles)(ExpGrid)