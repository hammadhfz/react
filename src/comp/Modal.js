import React from 'react'

export default function Modal() {
  return (
    <>
    <button type="button" className="btn btn-dark my-1 form-control border" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Happy Scrolling! 
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className= "modal-dialog modal-dialog-centered" >
          <div className="modal-content bg-secondary text-light">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Hello!</h5>
              <button type="button" className="btn-close border" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" >
              Welcome to our Website, you will enjoy and will get full value by surfing our site
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark border" data-bs-dismiss="modal">Thanks</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
