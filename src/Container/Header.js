import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

export const Header = ({count}) => {
  return (
    <div>
        <nav className='navbar navbar-light bg-light'>
            <Link to = "/" className='navbar-brand'> Restaurant </Link>
            <button className='btn btn-primary'>
                <Link to = "/orders" style={{textDecoration:"none", color:"white"}}>Orders</Link><span className='badge badge-light'>{count}</span>
            </button>
        </nav>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count : state.orderreducer.length
})

export default connect(mapStateToProps)(Header)