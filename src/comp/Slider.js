import React from 'react'
import propTypes from 'prop-types'

export default function Slider(props) {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide container" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <center>
                  <img src = {props.img1} className = "d-block w-75 img-fluid rounded" alt = "..."/>
                </center>
              </div >
              <div className="carousel-item ">
                <center>
                  <img src = {props.img2} className = "d-block w-75 img-fluid rounded" alt = "..."/>
                </center>
              </div >
              <div className="carousel-item ">
                <center>
                  <img src ={props.img3} className = "d-block w-75 img-fluid rounded" alt = "..."/>
                </center>
              </div >
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}

Slider.propTypes = {
    img1: propTypes.string.isRequired,
    img2: propTypes.string.isRequired,
    img3: propTypes.string.isRequired
}

