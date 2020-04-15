import React from "react";
import Header from "./frame/Header"
import Footer from "./frame/Footer";
import {Route, BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./firebase/Auth";
import PrivateRoute from "./route/PrivateRoute";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Login from "./auth/Login";
import Register from "./auth/Register";
import SignIn from "./auth/SignIn";
import Profile from "./auth/Profile";

function App() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" minHeight="100vh">
      <Grid>
        {/*app goes in here*/}

        <AuthProvider>
          <BrowserRouter>
            <Header/>
            <PrivateRoute exact path="/" component={Profile} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/register" component={Register}/>
          </BrowserRouter>
        </AuthProvider>

        {/*app goes in here*/}
      </Grid>
      <Footer/>
    </Box>
  );
}

export default App;
