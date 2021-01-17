import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, TextField, Container, IconButton } from '@material-ui/core';
import { Send } from "@material-ui/icons"
import { withStyles } from '@material-ui/core/styles';

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
    content : {
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
    }
});

class SendResume extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.root}>
                <CardContent className={classes.content}>
                    <Container className={classes.name}>
                        <Typography variant="h6">
                            Want my resume just for yourself?
                    </Typography>
                    </Container>
                    <Container>
                        <Typography>
                            <p>Enter your email address and I'll ship my PDF resume to you ! </p>
                        </Typography>
                        <form className={classes.form} autoComplete="off">
                            <TextField color="secondary" fullWidth className={classes.form.input} id="standard-basic" label="your@email.com" required/>
                            <IconButton className={classes.form.button} type="submit"><Send/> </IconButton>
                        </form>
                        <Typography>
                            <p>Don't worry, I won't keep any data. I won't even know who asked for it ! </p>
                        </Typography>
                    </Container>
                </CardContent>



            </Card>
        )
    }
}

SendResume.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendResume);