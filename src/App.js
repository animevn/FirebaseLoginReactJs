import React from "react";
import Header from "./Header"
import Footer from "./Footer";


function App() {
  return (
    <div className="main">
      <div className="container-fluid px-0">
        <Header/>

        {/*app goes in here*/}
        <div className="container pt-2">
          <h1 className="text-success">
            Hello World
          </h1>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
