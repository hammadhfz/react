import React from 'react'
import propTypes from 'prop-types'

export default function Accdn(props) {

  return (
    <>
        <div className={`container-fluid bg-${props.b_color} text-${props.f_color}`}>
            <div className="accordion"  id="accordionExample">
                <div className={`accordion-item bg-${props.b_color} text-${props.f_color}`}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className={`accordion-button border border-primary bg-${props.b_color} text-${props.f_color}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Click to Read More
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body border border-primary">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>

                <div className={`accordion-item bg-${props.b_color} text-${props.f_color}`}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className={`accordion-button border border-primary bg-${props.b_color} text-${props.f_color}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Click to Read More
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body border border-primary">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>

                <div className={`accordion-item bg-${props.b_color} text-${props.f_color}`}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className={`accordion-button border border-primary bg-${props.b_color} text-${props.f_color}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Click to Read More
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body border border-primary">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

Accdn.propTypes = {
    f_color: propTypes.string.isRequired,
    b_color: propTypes.string.isRequired
}
