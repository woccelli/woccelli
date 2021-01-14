import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Work, Star } from "@material-ui/icons"
import { withStyles } from '@material-ui/core/styles';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import jobs from './data/jobs'
import { pink } from '@material-ui/core/colors';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    timeline: {
        background: theme.palette.primary.main,
        color: '#fff'
    }
});

class Jobs extends Component {

    render() {
        const { classes, theme } = this.props
        console.log(theme.palette.primary.main, pink[100])
        return (
            <Card className={classes.root}>
                <Work />
                <Typography variant="h5">Jobs</Typography>
                <CardContent className={classes.list} >
                    <VerticalTimeline>
                        {jobs.map((job, i) => {
                            return (
                                <VerticalTimelineElement key={i}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: theme.palette.secondary.main, color: '#fff' }}
                                    contentArrowStyle={{ borderRight: `7px solid  ${theme.palette.secondary.main}` }}
                                    date={`${job.startDate.toLocaleDateString()} - ${job.endDate ? job.endDate.toLocaleDateString() : "Current"}`}
                                    iconStyle={{ background: theme.palette.primary.main, color: '#fff' }}
                                    icon={<Work />}
                                >
                                    <Typography variant="h5">{job.title}</Typography>
                                    <Typography variant="h6">{job.company}</Typography>
                                    <Typography variant="body1">
                                        {job.description}
                                    </Typography>
                                </VerticalTimelineElement>
                            )
                        })}
                        <VerticalTimelineElement
                            iconStyle={{ background: theme.palette.secondary.main, color: '#fff' }}
                            icon={<Star />}
                        />
                    </VerticalTimeline>
                </CardContent>
            </Card>
        )
    }
}

Jobs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Jobs);