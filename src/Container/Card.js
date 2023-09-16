import React, { useEffect } from "react";
import items from "./Items";
import { connect } from "react-redux";
import {addorder, resetfilter, resettablenumber} from "../Action"

const Card = ({filter_name, addorder, table_number}) => {
  const [data, setData] = React.useState([]);
  const [cloneData , setCloneData] = React.useState([]);

  React.useEffect(() => {
    setCloneData(items.map((item) => item)); 
  
    if (filter_name !== 'All Items') {
      let specific = items.filter((item) => item.category === filter_name);
      setData(specific);
    } else {
      setData(cloneData);
    }
  }, [filter_name]);

  const Handler = async (id,name,price,url) => {
    if(table_number != null){
      await addorder(id,name,price,table_number,url);
      await resettablenumber();
      await resetfilter();
      alert("Order Placed Successfully")
    }
    else{
      alert("Please Select The Table Number");
    }
  }
  
  return (
    <div>
      <center>
      {data.length > 0 ?
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-md-4" style={{padding:"5px"}} key = {item.id} >
              <div className='card' style={{width:"18rem",padding:"3px"}}>
                <img src={item.url} className="card-img-top"></img>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
              <div className="card-text">Rs.{item.price}</div>
              <button className="btn btn-primary" onClick={() => Handler(item.id,item.name,item.price,item.url)}>Order</button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      :
      <div className="h3">No Items Available</div>
      }
      </center>
    </div>
  );
};

const mapStateToProps = state => ({
  filter_name : state.filterreducer.filter_name,
  table_number : state.tablereducer.table_number
})

export default connect(mapStateToProps,{addorder,resetfilter,resettablenumber})(Card);
