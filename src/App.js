import * as React from 'react';
// import './App.css';
import styled from 'styled-components';


// import { Animated } from "react-animated-css";


function App() {
  return (

    <Layout>
      <div className="App">


        {/* <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={4000} animationOutDuration={1000} isVisible={true}>
        <img className="img-responsive" src="https://cdn1.vectorstock.com/i/thumb-large/63/85/black-smiley-flat-silhouette-white-background-vector-26856385.jpg" alt="pawel" width="50%" />

      </Animated> */}


        <h2>About Us</h2>
        <p>Meet Pawel, Nicole and Paula</p>

        <div class="container">
          <div className="row">
          <img src="https://cdn1.vectorstock.com/i/thumb-large/63/85/black-smiley-flat-silhouette-white-background-vector-26856385.jpg" alt="pawel" />
          <div class="overlay1">
            <div class="text">Pawel is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </div>
          </div>

          <div className="row">
          <img src="https://cdn1.vectorstock.com/i/thumb-large/63/85/black-smiley-flat-silhouette-white-background-vector-26856385.jpg" alt="pawel" />
          <div class="overlay">
            <div class="text">Pawel is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </div>
          </div>








        </div>





      </div>


    </Layout >

  );
}

const Layout = styled.div`

.container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 50%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: 50%;
  opacity: 0;
  transition: .5s ease;
  background-color: green;
}



.container:hover .overlay{
  opacity: 1;
}














.text {
  // color: black;
  // font-size: 12px;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // -webkit-transform: translate(-50%, -50%);
  // -ms-transform: translate(-50%, -50%);
  // transform: translate(-50%, -50%);
  // text-align: justify;
  
  color: white;
  font-size: 16px;
  text-align: justify;
  margin: 5px;
  padding-top" 2px;

  
  
}


`

export default App;
