import React, {useState} from 'react'

export default function Accdn() {

    let [myStyle, setStyle] = useState({
        color: 'white',
        backgroundColor: 'black',
    });

    const [btnText, setbtn] = useState("lightMode");

    let lightDarkToggle = () => {
        if (myStyle.color == 'black') {
            setStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setbtn("lightMode");
            
        } else if (myStyle.color == 'white') {
            setStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setbtn("darkMode");
        }
    }

  return (
    <>
        <div className="container">
            <div className="accordion"  id="accordionExample">
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button style={myStyle} className="accordion-button border border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Click to Read More
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>

                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button style={myStyle} className="accordion-button collapsed border border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Click to Read More
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>

                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button style={myStyle} className="accordion-button collapsed border border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Click to Read More
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-3 text-light">
            <button className='btn btn-outline-primary text-light m-1' onClick={lightDarkToggle}>{btnText}</button>
        </div>
    </>
  )
}
