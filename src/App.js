import React, {useState} from 'react';
import Modal from './comp/Modal';
import Navbar from './comp/Navbar';
import Slider from './comp/Slider';
import Text from './comp/Text';
import Accdn from './comp/Accdn'

function App() {
	const [frontMode, setFrontMode] = useState('light');
	const [backMode, setBackMode] = useState('dark');

	let changeMode = () => {
		if (frontMode === 'dark') {
			setFrontMode('light');
			setBackMode('dark');
		} else {
			setFrontMode('dark');
			setBackMode('light');
		}
	}

  return (
    <>
      <div className={`bg-${backMode}`} >

		<Navbar navmode={backMode} textmode = {frontMode} logo = "XevCon" pagename = "Home" about = "About"/>
		
		<div className="container-fluid">
			<div className='row gx-1'>
				<div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-1 my-lg-3">
					<button className={`form-control btn btn-outline-primary text-${frontMode} fw-bold`} onClick={changeMode}>{frontMode}Mode</button>
				</div>
				<div className="col-lg-9 col-md-6 col-sm-12 mt-1 mb-3 my-lg-3">
					<Modal modalmode = {backMode} txtmode = {frontMode}/>
				</div>
			</div>
		</div>

		< Slider img1 = "slider1.png" img2 = "slider2.png" img3 = "slider3.png" />
		
		<Text colormode = {frontMode} backcolormode={backMode} textLabel = "Enter your text here..."/>

		<Accdn f_color={frontMode} b_color={backMode} />
	  </div>

    </>
  );
}

export default App;
