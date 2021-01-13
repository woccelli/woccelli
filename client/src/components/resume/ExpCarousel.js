import React, { Component } from 'react'
import { Paper, Grid, Card, Typography, CardContent } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import ReactWordcloud from 'react-wordcloud';
import experiences from './experiences'

class ExpCarousel extends Component {
    render() {
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

        const Item = ({ item: { name, description, features } }) => {
            return (
                <Card>
                    <Typography variant="h6">{name}</Typography>
                    <Typography>{description}</Typography>
                    <CardContent>
                        <ReactWordcloud words={features} options={wordCloudOptions} />
                    </CardContent>
                </Card>
            )
        }

        return (
            <Grid  xs="auto" sm="auto" md="auto">
                {
                    experiences.map((experience, i) => <Item key={i} item={experience} />)
                }
            </Grid>

        )
    }
}

export default ExpCarousel