import React from 'react'
import avatar from '../images/woccelli-avatar.png'
import { Grid, Tooltip } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';

const Landing = () => {
    return (
        <Grid container justify="center" >
            <Grid item >
            <Tooltip 
            title="Hi there ! I'm William. " 
            open={true} 
            arrow 
            TransitionComponent={Zoom}
            TransitionProps={{ timeout: 1500 }}>
                <img
                    height="512px"
                    alt="avatar"
                    src={avatar}>
                </img>
                </Tooltip>
            </Grid>
        </Grid>
    )
}


export default Landing