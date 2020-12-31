import React from 'react'
import { Paper, Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import ReactWordcloud from 'react-wordcloud';
import experiences from './experiences'

const Resume = () => {

    const wordCloudOptions = {
        enableTooltip: false,
        colors: ["#219ebc", "#14213D", "#FCA311", "#d62828"],
        fontFamily: "Roboto",
        padding: 1,
        rotations: 2,
        fontSizes: [10, 60],
        rotationAngles: [0, 90],
        scale: "sqrt",
        spiral: "archimedean",
    }

    function Item({ item: { name, description, features } }) {
        return (
            <Paper>
                <Grid container>
                    <div>
                    <p style={{ margin: '20px 50px 0px', fontSize: 50 }}>{name}</p>
                    <br/>
                    <p style={{ margin: '0 50px',fontSize: 25 }}>{description}</p>
                    </div>
                    <div style={{ height: '100%', width: '100%' }}>
                    <ReactWordcloud style={{ margin: '15px 0'}} words={features} options={wordCloudOptions} />
                    </div>
                </Grid>
            </Paper>
        )
    }

    return (
        <Carousel navButtonsAlwaysVisible autoPlay={false}>
            {
                experiences.map((experience, i) => <Item key={i} item={experience} />)
            }
        </Carousel>
    )
}

export default Resume