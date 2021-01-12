import React, { Component } from 'react'
import woccelli from '../images/woccelli-logo-black.svg'
import { Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"

class Landing extends Component {

    render() {
        return (
            <div className="landing">
                <img className="woccelli-logo" src={woccelli} alt="woccelli" width="50" height="55" />
                <div className="landing-half" id="landing-left">
                    <Button component={Link} to="/work" color="primary" variant='outlined' style={{ margin: "auto", borderRadius: 10, border: '2px solid' }}><Typography variant="h2">Work</Typography></Button>
                </div>
                <div className="landing-half" id="landing-right">
                    <Button component={Link} to="/occupations" color="primary" variant='outlined' style={{ margin: "auto", borderRadius: 10, border: '2px solid' }}><Typography variant="h2">Occupations</Typography></Button>
                </div>
            </div>
        )
    }
}


export default (Landing)