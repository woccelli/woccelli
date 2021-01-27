import { Typography, Avatar, Card, Grid } from "@material-ui/core"
import { Business } from "@material-ui/icons"


const whoTile = (name, avatarImg) => {
    return (
        <Card style={{ margin: "8px" }}>
            <Grid container style={{
                padding: "5px", display: 'flex',
                alignItems: 'center',
            }}>
                <Grid item xs={3}>
                    {avatarImg ?
                        <Avatar alt="Profile image" src={require(`../../../../images/projects/${avatarImg}`).default} />
                        :
                        <Avatar><Business /></Avatar>
                    }

                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h6">{name}</Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

const projectDetails = [
    {
        name: "Game simulator",
        shortname: "game-simulator",
        description: "Python game simulator for practical evaluation of game theories",
        image: "game-simulator.jpg",
        link: "https://github.com/woccelli/game-simulator",
        what:
            <Typography align="justify">
                <Typography>
                    A Python application implemented in TDD that allows the simulation of evolutionary games in which several types of players confront for the survival of their population.
            </Typography>
                <Typography>
                    This game simulator is designed to reproduce situations that are depicted in Game theories (non-cooperative game theory with no pure equilibrium). The ultimate goal is to simualte interactions between network administrators (defenders) and potential hackers (attackers).
            </Typography>
                <Typography>
                    The hackers want to destroy the defenders' critical servers and the defenders increase their survival fitness by deploying honeypots (dummy servers acting as intrusion detection systems) alongside their critical servers.
            </Typography>
                <Typography>
                    The game simulator computes thousands of games with varying populations in order to extract the best honeypot proportion for defenders.
            </Typography>
                <Typography>
                    To have more information and a better understanding of the context, you can read my <a target="_blank" rel="noopener noreferrer" href="https://github.com/woccelli/game-simulator/blob/master/Game-theoretic%20optimizations%20for%20honeypot%20deployment%20in%20AMI%20networks.pdf">master's thesis</a>.
                </Typography>
            </Typography>,
        why:
            <Typography align="justify">
                <Typography>
                    During my double master's degree at INSA Lyon and Universität Passau, I did a master's thesis on game theory applied to honeypot deployment in Advanced Metering Infrastructures networks (AMI networks) in Smart Grids. In order to evaluate the optimal honeypot proportion to deploy in a network, I used game theory to compute equilibrium strategies for the defenders (network administrators).
            </Typography>
                <Typography>
                    To assess my theoretical results, I needed to simulate encounters between the various populations (players) of the considered game. That's why I developped this game simulator. It helped me extracting the best strategies for honeypot deployment in AMI networks. Again, you can find more information in my <a target="_blank" rel="noopener noreferrer" href="https://github.com/woccelli/game-simulator/blob/master/Game-theoretic%20optimizations%20for%20honeypot%20deployment%20in%20AMI%20networks.pdf">master's thesis</a>.
            </Typography>
            </Typography>,
        who:
            <Grid container style={{ flexDirection: "column" }}>
                <Grid item >
                    <Typography>
                        Theory and implementation:
                </Typography>
                </Grid>
                <Grid item>
                    {whoTile("William Occelli", "me.png")}
                </Grid>
            </Grid>,
        how: [
            {
                title: "Implementation",
                content: <Typography> Python Object-Oriented-Programming (OOP)</Typography>
            },
            {
                title: "Test-Driven-Development",
                content: <Typography> pytest, pytest_mock </Typography>
            },
            {
                title: "Theory behind it",
                content: <Typography> <a target="_blank" rel="noopener noreferrer" href="https://github.com/woccelli/game-simulator/blob/master/Game-theoretic%20optimizations%20for%20honeypot%20deployment%20in%20AMI%20networks.pdf" > Game-theoretical optimizations for honeypot deployment in AMI networks</a> </Typography>
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
            <Typography align="justify">
                <Typography >
                    A MERN (MongoDB, Express.js, React.js, Node.js) application allowing subscribed users to print or send by email PDF summary sheets to patients with pathologies.
          </Typography>
                <Typography>
                    A user can create an account, login, subscribe, search for a specific summary sheet about a pathology, dynamically vizualize it, print it or send it to an email address with a personalized header.
                    </Typography>
                <Typography>
                    The administrator of the app has way more functionalities. The administrator can add content to the app by creating new summary sheets via a dynamic form. The dynamic form instantly renders the final PDF version of the sheet.
                    The administrator has access to the list of sheets and users along with some visual information about their activity on the app (e.g: number of sheets sent per day). The admin can also modify or delete sheets and offer subscription to users.
                    </Typography>
                <Typography>
                    The app also naturally implements basic features such as account information update, password reinitialization or account deletion.
                    </Typography>

            </Typography>,
        why:
            <Typography align="justify">
                <Typography>
                    The idea behind this app is to provide medical workers with a simple, efficient and reliable way to share information about a pathology. The goal is to create visually attractive summary sheets that patients can easily understand, with the certainty that the content of the sheet is reliable, since provided by an acknowledged medical expert.
                </Typography>
                <Typography>
                    In addition, we make sure that no information is kept about the patient. This latter is totally anonymous in our application, ensuring the absence of any kind of tracking. Patients are sure to remain unknown.
                </Typography>
            </Typography>,
        who:
            <Grid container style={{ flexDirection: "column" }}>
                <Grid item >
                    <Typography>
                        Initial concept and funding:
                </Typography>
                </Grid>
                <Grid item>
                    {whoTile("Pharmarep conseil")}
                </Grid>
                <Grid item >
                    <Typography>
                        Implementation:
                </Typography>
                </Grid>
                <Grid item>
                    {whoTile("William Occelli", "me.png")}
                </Grid>
            </Grid>,
        how: [
            {
                title: "Stack",
                content: <Typography> MongoDB, Express.js, React.js, Node.js </Typography>
            },
            {
                title: "Structure",
                content: <Typography> Separated backend (server) and fronted (client) - React + React Bootstrap + Redux as client framework </Typography>
            },
            {
                title: "Authentication",
                content: <Typography> Passport.js JWT - Authorized client routes with react-router-dom - Authorized server routes with passport authentication</Typography>
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
        description: "Create and send surveys to thousands of email recipients",
        image: "emaily1.jpg",
        link: "https://github.com/woccelli/emaily",
        what:
            <Typography align="justify">
                <Typography >
                    A MERN (MongoDB, Express.js, React.js, Node.js) application where authenticated Google users pay for credits allowing them to create email survey campaigns. The survey campaigns are automatically sent to a list of email recipicients. The answers of the recipients are gathered and displayed in the application.
                </Typography>
                <Typography>
                    The user can hence, authenticate with its Google account, buy credits with its credit card, create a survey by specifying the content of the email (yes or no question) and a list of email addesses, send the survey and visualise how many recipients answered 'yes' or answered 'no'.
                </Typography>
            </Typography>,
        why:
            <Typography align="justify">
                I implemented this app in the scope of a Udemy certification course by Stephen Grider. It allowed me to train on features such as Google OAuth, Stripe payments, Webhooks and deployment.
            </Typography>,
        who: <Grid container style={{ flexDirection: "column" }}>
            <Grid item >
                <Typography>
                    Model, structure and concept:
        </Typography>
            </Grid>
            <Grid item>
                {whoTile("Udemy - Stephen Grider", "udemy.png")}
            </Grid>
            <Grid item >
                <Typography>
                    Implementation:
        </Typography>
            </Grid>
            <Grid item>
                {whoTile("William Occelli", "me.png")}
            </Grid>
        </Grid>,
        how: [
            {
                title: "Stack",
                content: <Typography> MongoDB, Express.js, React.js, Node.js </Typography>
            },
            {
                title: "Structure",
                content:
                    <Typography>
                        <Typography> Dev: 2 servers - The frontend server redirects requests to the backend thanks to a proxy </Typography>
                        <Typography> Prod: 1 server - The frontend (client) is wrapped into the backend server (public assets)</Typography>
                    </Typography>
            },
            {
                title: "Authentication",
                content: <Typography>Google OAuth and Passport.js authentication</Typography>
            },
            {
                title: "Client",
                content: <Typography>React Material-UI, React Redux, React Redux-forms</Typography>
            },
            {
                title: "Mailing",
                content: <Typography>Mailgun linked to "woccelli.com" domain + Mailgun hooks</Typography>
            },
            {
                title: "Payments",
                content: <Typography>Stripe</Typography>
            }
        ]
    },
    {
        name: "woccelli.com",
        shortname: "woccelli",
        description: "Well... this website",
        image: "woccelli1.jpg",
        link: "https://github.com/woccelli/woccelli",
        what:
            <Typography align="justify">
                <Typography >
                    A MERN (MongoDB, Express.js, React.js, Node.js) application that displays an interactive Resume, blog posts and that allows users to play mini-games.
                </Typography>
                <Typography>
                    The app is divided into two parts: "Work" and "Occupations", which initials are the same as "William Occelli".
                </Typography>
                <Typography>
                    The "Work" part of the application is inspired by public personal websites. It includes a Resume (formation, experience etc.) and a portfolio with project presentations. It implements features such as email sending, dynamic wordclouds and an interactive timeline.
                </Typography>
                <Typography>
                    The "Occupations" part of the application is more diversified. It features blog posts and mini-games. However, it is not yet production ready.
                </Typography>
            </Typography>,
        why:
            <Typography align="justify">
                <Typography>
                    After my master's degree at INSA Lyon and Universität Passau, my profile matched with IT engineers job offers which were oriented towards data manipulation. However, after a few months in this domain, I realised that I was more attracted to content creation. I always have plenty of delirious (and sometimes promising) ideas, it would be a shame to elude that part of me.
            </Typography>
                <Typography>
                    Hence, I needed to orient my career in a way that allowed me to design and create content. That's why I chose Fullstack engineering. This ever-evolving domain is both technical and wide. I can create the content I wish to and learn plenty of new things.
            </Typography>
                <Typography>
                    Having a personal website is not an "ego" thing. It's just a way to train yourself on new technologies and experiment new features. The "Occupations" part of this web app is really a sandbox for me, and I love it.
            </Typography>
            </Typography>,
        who: <Grid container style={{ flexDirection: "column" }}>
            <Grid item >
                <Typography>
                    Implementation:
        </Typography>
            </Grid>
            <Grid item>
                {whoTile("William Occelli", "me.png")}
            </Grid>
        </Grid>,
        how: [
            {
                title: "Stack",
                content: <Typography> MongoDB, Express.js, React.js, Node.js </Typography>
            },
            {
                title: "Structure",
                content:
                    <Typography>
                        <Typography> Dev: 2 servers - The frontend server redirects requests to the backend thanks to a proxy </Typography>
                        <Typography> Prod: 1 server - The frontend (client) is wrapped into the backend server (public assets)</Typography>
                    </Typography>
            },
            {
                title: "Client",
                content: <Typography> React Material-UI (a lot) and React Redux</Typography>
            },
            {
                title: "Media",
                content: <Typography> Freely usable images: https://unsplash.com/ </Typography>
            },
            {
                title: "To be continued..."
            }
        ]
    },

]

export default projectDetails