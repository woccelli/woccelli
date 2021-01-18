import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Work, ImportantDevices, School } from "@material-ui/icons"
import { withStyles } from '@material-ui/core/styles';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experiences from './data/experiences'
import { JOB, PROJECT, STUDY } from './data/experiences'
import Project from "./Project"
import Job from "./Job"
import Study from "./Study"
import { pink } from '@material-ui/core/colors';
import Moment from 'moment'

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
    },
    date : {
        color: "black"
    }
});

class Jobs extends Component {

    renderExperience(experience, theme, classes) {
        const colorPalette = theme.palette.timeline
        switch (experience.type) {
            case JOB:
                const job = experience.content
                var workcolor = colorPalette.work
                return (
                    <VerticalTimelineElement key={experience.content.title}
                        className="vertical-timeline-element--work"
                        dateClassName={classes.date}
                        contentStyle={{ background: workcolor.secondary, color: '#fff' }}
                        contentArrowStyle={{ borderRight: `7px solid  ${workcolor.secondary}` }}
                        date={`${Moment(job.startDate).format('MM/YYYY')} - ${job.endDate ? Moment(job.endDate).format('MM/YYYY') : "Current"}`}
                        iconStyle={{ background: workcolor.primary, color: '#fff' }}
                        icon={<Work />}
                    >
                        <Job job={job}/>
                    </VerticalTimelineElement>
                )
            case PROJECT:
                    const project = experience.content
                    var projectcolor = colorPalette.project
                    return (
                        <VerticalTimelineElement key={experience.content.name}
                            className="vertical-timeline-element--work"
                            dateClassName={classes.date}
                            contentStyle={{ background: projectcolor.secondary, color: '#fff' }}
                            contentArrowStyle={{ borderRight: `7px solid  ${projectcolor.secondary}` }}
                            date={`${Moment(project.startDate).format('MM/YYYY')} - ${project.endDate ? Moment(project.endDate).format('MM/YYYY') : "Current"}`}
                            iconStyle={{ background: projectcolor.primary, color: '#fff' }}
                            icon={<ImportantDevices />}
                        >
                            <Project project={project}/>
                        </VerticalTimelineElement>
                    )
            case STUDY:
                const study = experience.content
                const studycolor = colorPalette.study
                return (
                    <VerticalTimelineElement key={experience.content.title}
                        className="vertical-timeline-element--education"
                        dateClassName={classes.date}
                        contentStyle={{ background: studycolor.secondary, color: '#fff' }}
                        contentArrowStyle={{ borderRight: `7px solid  ${studycolor.secondary}` }}
                        date={`${Moment(study.startDate).format('MM/YYYY')} - ${study.endDate ? Moment(study.endDate).format('MM/YYYY') : "Current"}`}
                        iconStyle={{ background: studycolor.primary, color: '#fff' }}
                        icon={<School />}
                    >
                        <Study study={study}/>
                    </VerticalTimelineElement>
                )
            default:
                break;
        }
    }


    render() {
        const { classes, theme } = this.props
        console.log(theme.palette.primary.main, pink[100])
        return (
            <Card className={classes.root}>
                <Work />
                <Typography variant="h5">Experience</Typography>
                <CardContent className={classes.list} >
                    <VerticalTimeline>
                        {experiences.map((experience, i) => {
                            return this.renderExperience(experience, theme, classes)
                        })}
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