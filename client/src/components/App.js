import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";
import Landing from "./Landing"
import Work from "./Work"
import Occupations from "./Occupations"
import Header from "./Header";
import "./App.css"


/*
 Nice pink :  main: pink[100]
*/


const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[100],
    },
    secondary: {
      main: green[500],
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
     <ThemeProvider theme={theme}>
       <Route path="/:url" component={Header} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/occupations" component={Occupations} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
