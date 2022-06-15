import React from 'react'
import propTypes from 'prop-types'

export default function Modal(props) {
  return (
    <>
      
      <button type="button" className={`btn btn-${props.modalmode} form-control border border-primary fw-bold`} data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Happy Scrolling! 
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className= "modal-dialog modal-dialog-centered">
          <div className={`modal-content bg-${props.modalmode} text-${props.txtmode}`}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Hello!</h5>
              <button type="button" className="btn-close border border-primary" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Welcome to our Website, you will enjoy and will get full value by surfing our site
            </div>
            <div className="modal-footer">
              <button type="button" className={`btn btn-${props.modalmode} border border-primary text-${props.txtmode}`} data-bs-dismiss="modal">Thanks</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>p
        </div>
      </div>

    
    </>
  )
}

Modal.propTypes = {
  modalmode: propTypes.string.isRequired,
  textmode: propTypes.string.isRequired
}