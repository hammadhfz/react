import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border border-light rounded">
        <div className = "container-fluid">
          <a className="navbar-brand text-light mx-1 border border-light px-3 rounded p-1" href="/">Logo</a>
          <button className="navbar-toggler border rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li className="nav-item bg-secondary border mx-1 rounded">
                <a className="nav-link active text-light mx-3 fw-bold" aria-current="page" href="/">{props.pagename}</a>
              </li>
              <li className = "nav-item border mx-1 rounded" >
                <a className="nav-link text-light mx-3" href="/">{props.about}</a>
              </li>
              <li li className = "nav-item border mx-1 rounded" >
                <a className="nav-link text-light mx-3" href="/">{props.contact}</a>
              </li>
              <li className="nav-item border mx-1 rounded">
                <a className="nav-link text-light mx-3" href="/">{props.gallery}</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 bg-dark text-light" type="search" placeholder="....Search" aria-label="Search"/>
              <button className="btn btn-secondary border" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.prototype = {
    pagename : propTypes.string.isRequired,
    about : propTypes.string
}

Navbar.defaultProps = {
    contact : "L'amour",
    gallery : "Gallery"
}
