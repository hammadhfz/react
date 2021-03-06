import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.navmode} bg-${props.navmode} border border-primary rounded sticky-top mb-1`}>
        <div className = "container-fluid">
          <a className={`navbar-brand text-${props.textmode} mx-1 border border-primary px-3 rounded p-1 fw-bold`} href="/">{props.logo}</a>
          <button className="navbar-toggler border border-primary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li className="nav-item bg-primary border border-primary mx-1 rounded">
                <a className={`nav-link active text-${props.textmode} mx-3 fw-bold`} aria-current="page" href="/">{props.pagename}</a>
              </li>
              <li className = "nav-item border border-primary mx-1 rounded" >
                <a className={`nav-link text-${props.textmode} mx-3 fw-bold`} href="/">{props.about}</a>
              </li>
              <li li className = "nav-item border border-primary mx-1 rounded" >
                <a className={`nav-link text-${props.textmode} mx-3 fw-bold`} href="/">{props.contact}</a>
              </li>
              <li className="nav-item border border-primary mx-1 rounded">
                <a className={`nav-link text-${props.textmode} mx-3 fw-bold`} href="/">{props.gallery}</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className={`form-control me-2 bg-${props.navmode} border border-primary text-${props.textmode}`} type="search" placeholder="....Search" aria-label="Search"/>
              <button className={`btn btn-outline-primary text-${props.textmode} fw-bold`} type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.prototype = {
    logo: propTypes.string.isRequired,
    pagename : propTypes.string.isRequired,
    about : propTypes.string,
    contact : propTypes.string,
    gallery : propTypes.string,
    navmode: propTypes.string.isRequired,
    textmode: propTypes.string.isRequired
}

Navbar.defaultProps = {
    contact : "L'amour",
    gallery : "Gallery"
}
