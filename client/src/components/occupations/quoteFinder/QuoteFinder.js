import React, { Component } from 'react';
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, Container, List, ListItem, Card, Button, IconButton, TextField, CardContent } from '@material-ui/core';
import { GitHub, ArrowBackIos, Search } from "@material-ui/icons"
import { withStyles } from '@material-ui/core/styles';
import backgroundImage from "../../../images/occupations/cite_de_la_peur_2.jpg"
import Link from '@material-ui/core/Link';
import * as actions from "../../../actions/quoteActions"

const styles = theme => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${backgroundImage})`,
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
    search: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center"
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
});

class QuoteFinder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputWord: ""
        }
    }

    componentDidMount() {
        window.scroll(0, 0)
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault()
        const contentText = this.state.inputWord
        this.props.getQuotes(contentText)
    }

    render() {
        const { classes } = this.props;
        const { quotes } = this.props.quotefinder
        return (
            <div >
                <Paper className={classes.mainFeaturedPost}>
                    {<img style={{ display: 'none' }} src={backgroundImage} alt={"test"} />}
                    <div className={classes.overlay} />
                    <Grid container xl spacing={3} className={classes.mainFeaturedPostContent}>
                        <Grid item>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                <IconButton onClick={() => this.props.history.goBack()} color="primary"><ArrowBackIos /></IconButton> Trouvez des répliques !
                            </Typography>

                            <Link variant="subtitle1" href="https://woccelli.com/occupations/quote-finder" target="_blank" rel="noopener noreferrer">
                                <Button color="primary" ><GitHub style={{ marginRight: "10px" }} /> Github </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12}><Typography variant="body2" color="textSecondary" component="p">
                                        La cité de la peur, un film culte. Rien de tel qu'une ou deux répliques de ce chef d'oeuvre pour briller en soirée. Mais vous avez un terrible doute... 
                                        On peut tromper 1000 personnes 1 fois... Non, on peut tromper 1 personne... Non... Vous ne savez plus. Grâce à ce moteur de recherche, retrouvez facilement vos répliques préférées à partir d'un simple mot !
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Les répliques sont issues de l'API Wikiquotes (https://fr.wikiquote.org/w/api.php). Toutes les répliques du film n'y sont pas, toute mes excuses si votre réplique préférée n'y est pas...
              </Typography>
          </Grid>
                        <Grid item xs={12}  lg={4}  className={classes.search}>
                            <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                                <TextField id="inputWord" onChange={this.onChange} value={this.state.inputWord} label="Mot ou expression" color="secondary" />
                                <IconButton type="submit"><Search /></IconButton>
                            </form>
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <Typography variant="h6">Répliques correspondantes</Typography>
                            <List className={classes.list} aria-label="mailbox folders">
                                {quotes.map(quote => {
                                    const quoteHtmlString = quote.content.replaceAll("\\n", "")
                                    return (
                                        <ListItem >
                                            <Card>
                                                <CardContent>
                                                    <div dangerouslySetInnerHTML={{ __html: quoteHtmlString }} />
                                                </CardContent>
                                            </Card>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Grid>
                    </Grid>
                </Container>
                {console.log(this.props.quotefinder)}
            </div>

        )
    }
}

QuoteFinder.propTypes = {
    getQuotes: PropTypes.func.isRequired,
    post: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        quotefinder: state.quotefinder
    }
}

export default connect(mapStateToProps, actions)(withStyles(styles)(QuoteFinder));