import { Typography } from "@material-ui/core"

const projectDetails = [
    {
        name: "Game simulator",
        shortname: "game-simulator",
        description: "Python game simulator for practical evaluation of game theories",
        image: "game-simulator.jpg",
        link: "https://github.com/woccelli/game-simulator",
        what: "Python game simulator for practical evaluation of game theories",
        why: "because",
        who: "William Occelli",
        how: [
            {
                title: "Frontend",
                content: <Typography> C MOI </Typography>
            },
            {
                title: "Backend",
                content: <Typography> COUCOU </Typography>
            },
        ]
    },
    {
        name: "Toposanté",
        shortname: "toposante",
        description: "Have access to tens of summary sheets about pathologies. Print them ! Send them by email !",
        image: "toposante1.jpg",
        link: "https://github.com/woccelli/pharma-app",
        what: 
        <Typography>
            A MERN (MongoDB, Express.js, React.js, Nodejs) application allowing subscribed users to print or send by email PDF summary sheets to patients with pathologies.
            A user can create an account, login, subscribe, search for a specific summary sheet about a pathology, dynamically vizualize it, print it or send it to an email address with a personalized header.
            The administrator of the app has way more functionalities. The administrator can add content to the app by creating new summary sheets via a dynamic form which is instantly rendering the final PDF version of the sheet. 
            The administrator has access to the list of sheets and users along with some visual information about their activity on the app (e.g: number of sheet sent per day). The admin can also modify or delete sheets and offer subscription to users.
            The app also naturally implements basic features such as account information update, password reinitialization or account deletion. 
        </Typography>,
        why: 
        <Typography>
            The idea behind this app is to provide medical workers with a simple, efficient and reliable way to share information about a pathology. The goal is to create visually attractive summary sheets that patients can easily understand, with the certainty that the content of the sheet is reliable, since provided by an acknowledged medical expert.
            In addition, we make sure that no information is kept about the patient. This latter is totally anonymous in our application, ensuring the absence of any kind of tracking. Patients are sure to remain unknown.
        </Typography>,
        who: 
        <Typography>
            Idea and funding: Pharmarep conseil 
            Implementation: William Occelli 
        </Typography>,
        how: [
            {
                title: "Stack",
                content: <Typography> MongoDB, Express.js, React.js, Nodejs </Typography>
            },
            {
                title: "Structure",
                content: <Typography> Separated backend (server) and fronted (client) - React + React Bootstrap + Redux as client framework </Typography>
            },
            {
                title: "Authentication",
                content: <Typography> Passport.js JWT - Authorized client routes with react-router-dom - Authorized server routes with passport authentication.</Typography>
            },
            {
                title: "Mailing",
                content: <Typography> nodemailer package with Mailgun SMTP</Typography>
            },
            {
                title: "Media manipulation",
                content: <Typography>PDF rendering with react-pdf package - PDF sending with react-pdf and pdf-to-base64 packages </Typography>
            },
            {
                title: "Admin dashboards",
                content: <Typography>Material-table package + react-chartjs-2 package for charts in the detail panels</Typography>
            },
        ]
    },
    {
        name: "Emaily",
        shortname: "emaily",
        description: "Create and send surveys to thousands of email addresses",
        image: "emaily1.jpg",
        link: "https://github.com/woccelli/emaily",
        what: 
        <Typography> 
            A MERN (MongoDB, Express.js, React.js, Nodejs) application where authenticated Google users pay for credit allowing them to create email survey campaigns that are automatically sent to a list of email recipicients. The answers of the recipients are gathered and displayed in the application.
            The user can hence, authenticate with its Google user account, buy credits with its credit card
        </Typography>,
        why: "because",
        who: "William Occelli",
        how: [
            {
                title: "Frontend",
                content: <Typography> C MOI </Typography>
            },
            {
                title: "Backend",
                content: <Typography> COUCOU </Typography>
            },
        ]
    },
    {
        name: "woccelli.com",
        shortname: "woccelli",
        description: "Well... this website",
        image: "woccelli1.jpg",
        link: "https://github.com/woccelli/woccelli",
        what: "Well... this website",
        why: "because",
        who: "William Occelli",
        how: [
            {
                title: "Frontend",
                content: <Typography> C MOI </Typography>
            },
            {
                title: "Backend",
                content: <Typography> COUCOU </Typography>
            },
        ]
    },

]

export default projectDetails