import React from 'react'
import propTypes from 'prop-types'

export default function Slider(props) {
  return (
    <>
    <div id="carouselExampleControls" class="carousel slide container" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <center>
                  <img src = {props.img1} class = "d-block w-75 img-fluid" alt = "..."/>
                </center>
              </div >
              <div class="carousel-item ">
                <center>
                  <img src = {props.img2} class = "d-block w-75 img-fluid" alt = "..."/>
                </center>
              </div >
              <div class="carousel-item ">
                <center>
                  <img src ={props.img3} class = "d-block w-75 img-fluid" alt = "..."/>
                </center>
              </div >
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
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

