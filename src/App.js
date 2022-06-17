import React, { useState } from 'react';
import Modal from './comp/Modal';
import Navbar from './comp/Navbar';
import Slider from './comp/Slider';
import Text from './comp/Text';
import Accdn from './comp/Accdn';
import Alert from './comp/Alert';

function App() {
	const [frontMode, setFrontMode] = useState('light');
	const [backMode, setBackMode] = useState('dark');
	const [alarm, setalarm] = useState("");
	const objAlarm = (message, type) => {
		setalarm({
			message: message,
			type: type
		})
		setTimeout(() => {
			objAlarm(null);
		}, 3000);
	}
	// objAlarm('Dark mode is enabled', 'success');


	function changeMode() {
		if (frontMode === 'dark') {
			setFrontMode('light');
			setBackMode('dark');
			objAlarm('Dark mode is enabled', 'success');
		} else {
			setFrontMode('dark');
			setBackMode('light');
			objAlarm('Light mode is enabled', 'dark');
		}
	}

	return (
		<>
			<div className={`bg-${backMode}`} >

				<Navbar navmode={backMode} textmode={frontMode} logo="XevCon" pagename="Home" about="About" />

				<div className="container-fluid position-relative">
					<div className='row gx-1'>
						<div className="col-lg-2 col-md-6 col-sm-12 mt-3 mb-1 my-lg-3">
							<button className={`form-control btn btn-outline-primary text-${frontMode} fw-bold`} onClick={changeMode}>{frontMode}Mode</button>
						</div>
						<div className="col-lg-9 col-md-6 col-sm-12 mt-1 mb-1 my-lg-3">
							<Modal modalmode={backMode} txtmode={frontMode} />
						</div>
						<div className="col-lg-1 col-md-6 col-sm-12 mt-1 mb-3 my-lg-3 ">
							<div class="d-flex justify-content-center py-2 form-check form-switch border border-primary rounded">
								{/* <label class="form-check-label" >{frontMode}mode</label> */}
								<input class="form-check-input" type="checkbox" onChange={changeMode} role="switch" />
							</div>
						</div>
					</div>
				</div>

				<Slider img1="slider1.png" img2="slider2.png" img3="slider3.png" />
				
				{/* <Alert f_color = {frontMode} alarm = {alarm} /> */}

				<Text objAlarm = {objAlarm} colormode={frontMode} backcolormode={backMode} textLabel="Enter your text here..." />

				<Accdn f_color={frontMode} b_color={backMode} />

			</div>
		</>
	);
}

export default App;
