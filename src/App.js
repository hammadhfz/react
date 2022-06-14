import React from 'react';
import Modal from './comp/Modal';
import Navbar from './comp/Navbar';
import Slider from './comp/Slider';

function App() {
  return (
    <>
      <Navbar pagename = "Home" about = "About"/>

      < Slider img1 = "slider1.png" img2 = "slider2.png" img3 = "slider3.png" / >
      
      <Modal/>
    </>
  );
}

export default App;
