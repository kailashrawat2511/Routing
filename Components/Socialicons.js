import React from 'react'
import{ Link} from 'react-router-dom'

export default function Socialicons() {
  return (
    <div className='bg'>
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Youtube</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        {/* <li className="nav-item btn btn-outline-danger px-3 mx-2">
          <Link className="nav-link active text-light" to={"/"}>Krishna</Link>
        </li>
        <li className="nav-item btn btn-outline-danger px-3 mx-2">
          <Link className="nav-link text-light" to={"/car"}>Car</Link>
        </li>
        <li className="nav-item btn btn-outline-danger px-3 mx-2">
          <Link className="nav-link text-light" to={"/bike"}>Bike</Link>
        </li>
        <li className="nav-item btn btn-outline-danger px-3 mx-2">
          <Link className="nav-link text-light" to={"/nature"}>Nature</Link>
        </li>
        <li className="nav-item btn btn-outline-danger px-3 mx-2">
          <Link className="nav-link text-light" to={"/places"}>Places</Link>
        </li> */}
        
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to={"/service"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link" to={"/https://www.amazon.in/-/hi/ap/signin"}>Amazon</Link>
        </li> */}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
