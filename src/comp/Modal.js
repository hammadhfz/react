import React from 'react'

export default function Modal() {
  return (
    <>
    <button type="button" class="btn btn-dark my-1 form-control border" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Happy Scrolling! 
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class = "modal-dialog modal-dialog-centered" >
          <div class="modal-content bg-secondary text-light">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Hello!</h5>
              <button type="button" class="btn-close border" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" >
              Welcome to our Website, you will enjoy and will get full value by surfing our site
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark border" data-bs-dismiss="modal">Thanks</button>
              {/* <button type="button" class="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
