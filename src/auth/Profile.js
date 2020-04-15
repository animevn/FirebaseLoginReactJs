import React, {useContext} from "react";
import {AuthContext} from "../firebase/Auth";
import {Redirect} from "react-router-dom";
import firebase from "../firebase/Firebase";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const width = {xs:"90%", sm:"550px", md:"550px", lg:"550px", xl:"550px"};
const boxWidth = {xs:"90%", sm:"50%", md:"50%", lg:"50%", xl:"50%"};

const Profile = ()=>{
  const {currentUser} = useContext(AuthContext);
  if (!currentUser){
    return <Redirect to="/login"/>;
  }
  return (
    <Grid container direction="row" justify="center">
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"
           width={width}>

        <Typography componet="div" variant="h4">
          <Box fontWeight="fontWeightBold" mt={5} color="secondary.main">
            My Profile
          </Box>
        </Typography>

        <Typography componet="div" variant="h6">
          <Box fontWeight="fontWeightBold" mt={5} color="secondary.main">
            {currentUser.uid}
          </Box>
        </Typography>

        <Box display="flex" flexDirection="row" justifyContent="space-between"
             mt={5} width={boxWidth} border={1} borderColor="secondary.main" borderRadius={3}>

          <Box width={0.5} >
            <Button fullWidth variant="text" color="secondary" size="large"
                    onClick={()=>firebase.auth().signOut()}>
              Logout
            </Button>
          </Box>

          <Box width={0.5} borderLeft={1} borderColor="secondary.main">
            <Button fullWidth variant="text" color="secondary" size="large"
                    onClick={()=>firebase.auth().currentUser.delete()}>
              Delete
            </Button>
          </Box>

        </Box>

      </Box>
    </Grid>

  );
};

export default Profile;