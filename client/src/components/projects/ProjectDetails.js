import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, Container, List, ListItem, ListItemText, Divider, Button, IconButton } from '@material-ui/core';
import { GitHub, ArrowBackIos } from "@material-ui/icons"
import { withStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

const styles = theme => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    grid: {
    
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
});

class ProjectDetails extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render () {
    const { classes } = this.props;
    const { project } = this.props;
    const image = require(`../../images/projects/${project.image}`).default
    return (
        <div>
            <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image})` }}>
                {/* Increase the priority of the hero background image */}
                {<img style={{ display: 'none' }} src={image} alt={"test"} />}
                <div className={classes.overlay} />
                <Grid container xl spacing={3} className={classes.mainFeaturedPostContent}>
                    <Grid item>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                           <IconButton onClick={() => this.props.history.goBack()} color="primary"><ArrowBackIos/></IconButton> {project.name}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {project.description}
                        </Typography>
                        <Link variant="subtitle1" href={project.link}>
                            <Button color="primary" ><GitHub style={{marginRight: "10px"}}/> Github </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
            <Container>
                <Grid container spacing={4}>
                    <Grid item lg={4}>
                        <Typography variant="h3">What?</Typography>
                        <Typography variant="body1">
                            {project.what}
                        </Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography variant="h3">Why?</Typography>
                        <Typography variant="body1">
                            {project.why}
                        </Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography variant="h3">Who?</Typography>
                        <Typography variant="body1">
                            {project.who}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">How?</Typography>
                        <List className={classes.list} aria-label="mailbox folders">
                            {project.how.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <ListItem >
                                            <ListItemText primary={<Typography variant="h6">{item.title}</Typography>} />
                                        </ListItem>
                                        <Divider></Divider>
                                        <ListItem >
                                                {item.content}
                                        </ListItem>
                                    </div>
                                )
                            })}
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
                        }
}

ProjectDetails.propTypes = {
    post: PropTypes.object,
};

export default withStyles(styles)(ProjectDetails);