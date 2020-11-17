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

      <h2>Fade in Overlay</h2>
      <p>Hover over the image to see the effect.</p>

      <div class="container">
        <img src="https://cdn1.vectorstock.com/i/thumb-large/63/85/black-smiley-flat-silhouette-white-background-vector-26856385.jpg" alt="pawel" width="50%" />
          <div class="overlay">
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </div>
        </div>

      </div>

</Layout>
  
  );
}

const Layout = styled.div `

.container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.container:hover .overlay {
  opacity: 10;
}

.text {
  color: white;
  font-size: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}


`

export default App;
