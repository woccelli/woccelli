import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing'
import Resume from './resume/Resume'
import { Container,CssBaseline}  from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#14213D"
    },
    text: {
      primary: "#00000",
      red: "e63946",
      light: "f1faee",
      light2: "a8dadc",
      dark: "457b9d"
    }
  }
});

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={themeDark}>
      
        <CssBaseline />
        <Container>
          <Route exact path="/" component={Landing} />
          <Route exact path="/resume" component={Resume} />
        </Container>
       
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App;
