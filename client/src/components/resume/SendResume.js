import React, { Component } from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, TextField, Container, IconButton, FormControl, FormHelperText, CircularProgress, Grid, Button } from '@material-ui/core';
import { Send, Check, Error, GetApp } from "@material-ui/icons"
import { withStyles } from '@material-ui/core/styles';
import * as actions from '../../actions/index'

const styles = theme => ({
    root: {
        minWidth: 275,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    content: {
        margin: 'auto'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        input: {
            margin: theme.spacing(1),
            width: '50ch',
            color: "secondary"
        },
        button: {
            margin: theme.spacing(1),
            width: '20ch',
        }
    },
    loading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    success: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        marginRight: theme.spacing(1)
    },
    inputContainer: {
        marginBottom: theme.spacing(4)
    },
    text: {
        marginBottom: theme.spacing(2)
    }
});

class SendResume extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: ""
        }
    }

    onSubmit = e => {
        e.preventDefault()
        const data = {
            dest: this.state.email
        }
        this.props.sendResume(data)
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    renderForm(classes, { status }) {
        switch (status) {
            case "loading":
                return (
                    <div>
                        <Container className={classes.text}>
                            <Typography variant="h6">
                                Want my resume just for yourself?
                        </Typography>
                        </Container>
                        <Container className={classes.loading} >
                            <CircularProgress color="secondary" />
                        </Container>
                    </div>)
            case "sent":
                return <Container>
                    <Grid container className={classes.success} >
                        <Typography className={classes.item}>
                            <Check color="secondary" className={classes.icon} />
                             The resume has been sent to: {this.state.email}
                        </Typography>
                        <Grid item className={classes.item} xs={12}><Button onClick={() => this.props.resetSendResume()}> Send new</Button></Grid>
                    </Grid>
                </Container>
            case "limit":
                return (
                    <Container>
                        <Grid container className={classes.success} >
                            <Typography className={classes.item}>
                                <Error className={classes.icon} />
                            Sorry, the limit of requests for this IP address has been reached. Try again in 1 hour. This limit is set to avoid unnecessary traffic.
                        </Typography>
                            <Grid item className={classes.item} xs={12}><Button onClick={() => this.props.resetSendResume()}> Send new</Button></Grid>
                        </Grid>
                    </Container>
                )
            default:
                return (
                    <div>
                        <Container className={classes.text}>
                            <Typography variant="h6">
                                Want my resume just for yourself?
                    </Typography>
                        </Container>
                        <Container className={classes.inputContainer}>
                            <Typography>
                                Enter your email address and I'll ship my PDF resume to you !
                            </Typography>
                            <form className={classes.form} onSubmit={this.onSubmit} autoComplete="off">

                                <FormControl fullWidth>
                                    <TextField
                                        id="email"
                                        type="email"
                                        color="secondary"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        className={classes.form.input}
                                        label="your@email.com"
                                        required />
                                    <FormHelperText id="my-helper-text">Don't worry, I won't keep any data. I won't even know who asked for it !</FormHelperText>
                                </FormControl>
                                <IconButton className={classes.form.button} type="submit"><Send /></IconButton>
                            </form>
                        </Container>
                        <Container>
                            <Typography className={classes.text}>
                                You can also download my resume here :
                            </Typography>
                            <a href="/api/download-resume" download>
                                <Button> <GetApp/>download</Button>
                            </a>
                        </Container>
                    </div>)
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.root}>
                <CardContent className={classes.content}>

                    {this.renderForm(classes, this.props.resume)}
                </CardContent>

            </Card>
        )
    }
}

SendResume.propTypes = {
    sendResume: PropTypes.func.isRequired,
    resume: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        resume: state.resume
    }
}

export default connect(mapStateToProps, actions)(withStyles(styles)(SendResume));