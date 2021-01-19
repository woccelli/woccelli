export const JOB = "job"
export const PROJECT = "projet"
export const STUDY = "study"

const experiences = [
    {
        type: PROJECT,
        content: {
            name: "woccelli.com",
            shortname: "woccelli",
            type: "Web application",
            startDate: new Date("12/01/2020"),
            description: "Well... this website",
            features: [
                { text: 'React.js', value: 100},
                { text: 'Express', value: 70},
                { text: 'Redux', value: 80},
                { text: 'Material-UI', value: 100},
                { text: 'Mailgun', value: 60},
                { text: 'Heroku', value: 50},
                { text: 'vertical-timeline-component', value: 50},
                { text: 'moment', value: 40},
                { text: 'carousel', value: 30},
                { text: 'react-wordlcoud', value: 70},
                { text: 'Resume', value: 40},
                { text: 'express-rate-limit', value: 60},
                { text: 'personal website', value: 50},
                { text: 'mini-games', value: 40},
                { text: 'blog posts', value: 40},
                { text: 'Work & Occupations', value: 60},
                { text: 'William Occelli', value: 50},

            ]
        }
    },
    {
        type: JOB,
        content: {
            company: "Pharmarep conseil",
            logo: "pharmarep.jpg",
            startDate: new Date("05/01/2020"),
            title: "Full Stack Developer",
            description: "Development of a MERN application for medical workers. The app includes dynamic media rendering, printing and sending in order to easily share information and recommandations about pathologies"
        }
    },
    {
        type: PROJECT,
        content: {
            name: "Toposanté",
            shortname: "toposante",
            startDate: new Date("05/01/2020"),
            type: "Web application",
            description: "Have access to tens of summary sheets about pathologies. Print them ! Send them by email !",
            features: [
                { text: 'MERN', value: 100},
                { text: 'Passport', value: 40},
                { text: 'Redux', value: 80},
                { text: 'Bootstrap', value: 80},
                { text: 'JWT', value: 60},
                { text: 'nodemailer', value: 30},
                { text: 'Webhooks', value: 40},
                { text: 'Heroku', value: 50},
                { text: 'React-PDF', value: 40},
                { text: 'Axios', value: 30},
                { text: 'Mongoose', value: 30},
                { text: 'Passport', value: 30},
                { text: 'Chartjs', value: 40},
                { text: 'Medical', value: 50},
                { text: 'Pathologies', value: 30},
                { text: 'Advices', value: 20},
                { text: 'Health', value: 30},
            ]
        }
    },
    {
        type: PROJECT,
        content: {
            name: "Emaily",
            shortname: "emaily",
            type: "Web application",
            startDate: new Date("11/01/2020"),
            endDate: new Date("12/01/2020"),
            description: "Create and send surveys to thousands of email recipients",
            features: [
                { text: 'MERN', value: 100},
                { text: 'Google OAuth', value: 80},
                { text: 'Redux', value: 80},
                { text: 'Redux-Form', value: 20},
                { text: 'Materializecss', value: 30},
                { text: 'Mailgun', value: 20},
                { text: 'Webhooks', value: 50},
                { text: 'Heroku', value: 70},
                { text: 'React-router', value: 40},
                { text: 'Axios', value: 30},
                { text: 'Mongoose', value: 30},
                { text: 'Passport', value: 30},
                { text: 'Stripe', value: 70},
                { text: 'Payments', value: 20},
                { text: 'Cookies', value: 40},
                { text: 'lodash', value: 10},
            ]
        }
    },
    {
        type: JOB,
        content: {
            company: "Telamon SAS",
            logo: "telamon.jpg",
            startDate: new Date("10/01/2020"),
            endDate: new Date("01/01/2021"),
            title: "ETL engineer",
            description: "Extract-Transform-Load management, anomaly detection and data maintenance for construction and retail companies"
        }
    },
    {
        type: STUDY,
        content: {
            title: "Double Master's degree",
            startDate: new Date("10/01/2019"),
            endDate: new Date("11/01/2020"),
            description: "Master of Engineering at INSA Lyon and Master of Science at Universität Passau",
        }
    },
    {
        type: STUDY,
        content: {
            title: "Master's thesis",
            startDate: new Date("03/01/2019"),
            endDate: new Date("09/01/2020"),
            description: "Game-theoretical optimizations for honeypot deployment in AMI networks",
            link: "https://github.com/woccelli/game-simulator/blob/master/Game-theoretic%20optimizations%20for%20honeypot%20deployment%20in%20AMI%20networks.pdf"
        }
    },
    {
        type: PROJECT,
        content: {
            name: "Game theory simulator",
            shortname: "game-simulator",
            startDate: new Date("03/01/2020"),
            endDate: new Date("09/01/2020"),
            description: "Python game simulator for practical evaluation of game theories",
            features: [
                { text: 'Python', value: 90},
                { text: 'pytest', value: 60},
                { text: 'pytest_mock', value: 60},
                { text: 'Game Theory', value: 70},
                { text: 'Nash equilibrium', value: 70},
                { text: 'Honeypots', value: 80},
                { text: 'Cybersecurity', value: 30},
                { text: 'Smart Grid', value: 80},
                { text: 'Master thesis', value: 50},
                { text: 'AMI network', value: 70},
                { text: 'substation', value: 20},
            ]
        }
    },
    {
        type: JOB,
        content: {
            company: "AEDI - Association des Élèves du Département Informatique",
            logo: "aedi.jpg",
            startDate: new Date("02/01/2018"),
            endDate: new Date("04/01/2019"),
            title: "Student's Union President",
            description: "23 members, 100k€ budget, major events, recruitment forum"
        }
    },
    {
        type: JOB,
        content: {
            company: "Fiducial",
            logo: "fiducial.jpg",
            startDate: new Date("05/01/2019"),
            endDate: new Date("09/01/2019"),
            title: "Data scientist",
            description: "Management of a data science project. From the data sources to the results display, I had to understand the functional need, pre-proccess the data, benchmark supervised and unsupervised models, tune the models and communicate about the whole process to executives"
        }
    },
    {
        type: JOB,
        content: {
            company: "oXya, a Hitachi Group Company",
            logo: "oxya.jpg",
            startDate: new Date("05/01/2018"),
            endDate: new Date("08/01/2018"),
            title: "SAP administrator and managed services",
            description: "SAP servers maintenance. Server status data extraction and visualisation"
        }
    },
   
]


export default experiences