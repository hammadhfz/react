import React from 'react';
import Modal from './comp/Modal';
import Navbar from './comp/Navbar';
import Slider from './comp/Slider';
import Text from './comp/Text';

function App() {
  return (
    <>
      <Navbar logo = "XevCon" pagename = "Home" about = "About"/>

      < Slider img1 = "slider1.png" img2 = "slider2.png" img3 = "slider3.png" />
      
      <Modal/>

      <Text textLabel = "Enter your text here"/>

    </>
  );
}

export default App;
