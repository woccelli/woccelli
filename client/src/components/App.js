import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { pink, green,  red, yellow } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import Landing from "./Landing"
import Work from "./Work"
import Occupations from "./Occupations"
import Header from "./Header";
import ProjectDetails from "./projects/ProjectDetails"
import projectDetails from "./projects/data/projectDetails"
import { fade } from '@material-ui/core/styles/colorManipulator';
import "./App.css"


/*
 Nice pink :  main: pink[100]
*/


const theme = createMuiTheme({
  palette: {
    background: {
      default: pink[0],
      paper: 'rgba(255, 255, 255, 0.9)'
    },
    primary: {
      main: pink[100],
    },
    secondary: {
      main: green[500],
    },
    timeline: {
      work: {
        primary: "#9AC4F8",
        secondary: fade("#9AC4F8", 0.7)
      },
      project: {
        primary: pink[100],
        secondary: fade(pink[100], 0.7)
      },
      study: {
        primary: "#99EDCC",
        secondary: fade("#99EDCC",0.7)
      }
    }
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Route path="/:url" component={Header} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/occupations" component={Occupations} />
        </div>
        {projectDetails.map((project, i) => {
            return (
              <Route key={i} exact path={`/work/projects/${project.shortname}`} render={(props) => (<ProjectDetails {...props} project={project} />)} />
            )
          })

          }
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
