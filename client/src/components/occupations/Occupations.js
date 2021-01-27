import React, { Component } from 'react'
import { PropTypes } from "prop-types"
import { Container, Grid, withStyles, Typography, Card, CardContent, CardActionArea, CardMedia } from '@material-ui/core';
import { Link } from "react-router-dom"
import cite_de_la_peur from "../../images/occupations/cite_de_la_peur.jpg"

const styles = theme => ({
    root: {
        margin: "auto",
        height: "100vh"
    },
    container: {
        flexDirection: "row",
        marginTop: theme.spacing(3)
    },
    item: {
        flexDirection: "column",
        alignItems: "center"
    },
    text: {
        padding: theme.spacing(3)
    },
    card: {
        maxWidth: 345
    },
    media: {
        height: 170,
    }
})

class Occupations extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Container className={classes.root} >
                <Grid container className={classes.container}>
                    <Grid item className={classes.item}>
                        <Card className={classes.card}>
                            <CardActionArea component={Link} to="/occupations/quote-finder">
                                <CardMedia
                                    className={classes.media}
                                    image={cite_de_la_peur}
                                    title="La cité de la peur (https://images.app.goo.gl/fDxKjTLonzdR9ARq7)"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Vous voulez un ... ?
          </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        La cité de la peur, un film culte. Rien de tel qu'une ou deux répliques de ce chef d'oeuvre pour briller en soirée. Mais vous avez un terrible doute... 
                                        On peut tromper 1000 personnes 1 fois... Non, on peut tromper 1 personne... Non... Vous ne savez plus. Grâce à ce moteur de recherche, retrouvez facilement vos répliques préférées à partir d'un simple mot !
          </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

Occupations.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Occupations)