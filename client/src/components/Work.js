import React, { Component } from "react"
import { Container, Grid } from "@material-ui/core";
import ExpCarousel from "./resume/ExpCarousel"
import ProfileCard from "./resume/ProfileCard";


class Work extends Component {

    render() {
        return (
            <Container>
                <Grid container spacing={-5}>
                    <ProfileCard />
                    <ExpCarousel />
                </Grid>
            </Container>
        )
    }
}


export default (Work)