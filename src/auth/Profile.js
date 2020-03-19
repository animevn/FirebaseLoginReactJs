import React, {useContext} from "react";
import {AuthContext} from "../firebase/Auth";
import {Redirect} from "react-router-dom";
import firebase from "../firebase/Firebase";

const Profile = ()=>{
  const {currentUser} = useContext(AuthContext);
  if (!currentUser){
    return <Redirect to="/"/>;
  }
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5 text-success">My Profile</h1>
      <h5 className="text-center mt-5 mb-5 text-success">
        {currentUser.uid}
      </h5>
      <div className="row">
        <div className="btn-group group-button mx-auto col-xl-6 col-lg-7 col-md-9 col-sm-11 col-11">
          <button className="btn login-button btn-outline-success btn-lg"
                  onClick={()=>firebase.auth().signOut()}>
            Logout
          </button>
          <button className="btn login-button btn-outline-success btn-lg"
                  onClick={()=>firebase.auth().currentUser.delete()}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;