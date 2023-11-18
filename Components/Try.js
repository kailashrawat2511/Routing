import React from 'react'
import { Link } from 'react-router-dom'

function Try() {
  return (
    <div className='d-flex justify-content-center text-center mx-auto mt-3'>
        <div className='mx- px-2'><Link to={"/"} class="badge">All</Link></div>
        <div className='mx- px-2'><Link to={"/krishna"} class="badge">Krishna</Link></div>
        <div className='mx- px-2'><Link to={"/car"} class="badge">Car</Link></div>
        <div className='mx- px-2'><Link to={"/bike"} class="badge">Bike</Link></div>
        <div className='mx- px-2'><Link to={"/nature"} class="badge">Nature</Link></div>
        <div className='mx- px-2'><Link to={"/places"} class="badge">Places</Link></div>

    </div>
  )
}

export default Try