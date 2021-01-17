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
      main: "#fde2e4", //landing "#F1E3D3"
      second: "#99c1de"
    },
    secondary: {
      main: "#7DB5B3",
    },
    timeline: {
      work: {
        primary: "#7DB5B3",
        secondary: fade("#c5dedd", 0.7)
      },
      project: {
        primary: "#FBC5C8",
        secondary: fade("#fde2e4", 0.7)
      },
      study: {
        primary: "#FFDCC2",
        secondary: fade("#fff1e6",0.7)
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
