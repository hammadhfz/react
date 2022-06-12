
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className = "container-fluid ">
          <a className="navbar-brand text-light" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
              </li>
              <li li className = "nav-item" >
                <a className="nav-link text-light" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-dark" href="/">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    {  /* <==================> slider <=================> */ } 

        <div id="carouselExampleControls" class="carousel slide container" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <center>
                  <img src = "slider1.png" class = "d-block w-75 img-fluid" alt = "..."/>
                </center>
              </div >
              <div class="carousel-item ">
                <center>
                  <img src = "slider2.png" class = "d-block w-75 img-fluid" alt = "..."/>
                </center>
              </div >
              <div class="carousel-item ">
                <center>
                  <img src = "slider3.png" class = "d-block w-75 img-fluid" alt = "..."/>
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

    {  /* <==================> modal <=================> */ }
    
      <button type="button" class="btn btn-secondary my-1 form-control" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Launch 
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class = "modal-dialog modal-dialog-centered" >
          <div class="modal-content bg-secondary text-light">
            <div class="modal-header border-secondary">
              <h5 class="modal-title" id="exampleModalLabel">Hello!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" >
              Welcome to our Website, you will enjoy and will get full value by surfing our site
            </div>
            <div class="modal-footer border-secondary">
              <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Thanks</button>
              {/* <button type="button" class="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
