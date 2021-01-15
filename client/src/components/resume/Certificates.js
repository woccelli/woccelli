import React, { Component } from 'react'
import { Card, Grid, Typography, CardContent, CardActions, Button } from '@material-ui/core';
import { PropTypes } from 'prop-types'
import certificates from './data/certificates'
import Carousel from 'react-material-ui-carousel'
import { withStyles } from '@material-ui/core/styles';
import { Assignment } from '@material-ui/icons';

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
    card: {
        padding: theme.spacing(1),
        height: "300px",
        maxWidth: "250px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        verticalAlign: 'middle'
    },
    logo: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        maxWidth: "70px",
        maxHeight: "70px"
    }

})


class Certificates extends Component {
    render() {
        const { classes } = this.props;

        function Item(props) {
            const certificateGroup = props.item
            const reqImages = require.context("../../images/certificates", false)
            return (
                <Grid container justify="center" spacing={2} className={classes.grid}>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            {certificateGroup.type}
                        </Typography>
                    </Grid>
                    {certificateGroup.certificates.map((certificate, i) => {
                        const image = reqImages(`./${certificate.logo}`).default
                        return (
                            <Grid item key={i}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.content}>
                                        <img src={image} alt={certificate.logo} className={classes.logo} />
                                        <Typography align="center" variant="subtitle1"> {certificate.name} </Typography>
                                        <Typography align="center" variant="caption">{certificate.date.toLocaleDateString()}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                                            <Button>See certificate</Button>
                                        </a>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            )
        }

        return (

            <Card className={classes.root}>
                <Assignment />
                <Typography variant="h5">Certificates</Typography>
                <CardContent>
                    <Carousel>
                        {
                            certificates.map((certificateGroup, i) => <Item key={i} item={certificateGroup} />)
                        }
                    </Carousel>
                </CardContent>
            </Card>

        )
    }
}

Certificates.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Certificates);