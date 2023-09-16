import React from 'react'
import { connect } from 'react-redux'
import Header from './Container/Header'

const Orders = ({list}) => {
  return (
    <div>
      <Header />
      <center>
      {list.length > 0 ?
      <div className="container">
        <div className="row">
          {list.map((item) => (
            <div className="col-md-4" style={{padding:"5px"}} key = {item.id} >
              <div className='card' style={{width:"18rem",padding:"3px"}}>
                <img src={item.url} className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
              <div className="card-text">BillingAmount Rs.{item.price}</div>
              <p>Table Number : {item.table_number}</p>
              </div>
              </div> 
            </div>
          ))}
        </div>
      </div>
      :
      <div className='h4'>No Orders Placed</div>
      }
      </center>
    </div>
  )
}

const mapStateToProps = (state) => ({
  list : state.orderreducer
})

export default connect(mapStateToProps)(Orders)