import React from 'react'
import Head from './Head'
import './Details.css'
import { useLocation, useNavigate } from 'react-router-dom'

function ProductDetails() {
    let {state} = useLocation();
    let navigate = useNavigate();

    function onBack(){
      navigate("/");
    }

  return (
    <div>
      <div className="header">
        <Head />
      </div>
      <div className='container-fluid proback'>
        <div className="row">
            <div className="col-4">
                <img src={state.image} alt="" className='rimg'/>
            </div>
            <div className="col-8 detail">
                <h2 className='fs-1 fw-bolder' style={{color:'#3E2723'}}>{state.title}</h2>
                <p className='fs-3 fw-bold fst-italic'>Category : {state.category}</p>
                <h5 className='fst-italic' style={{color:'#263238'}}>{state.description}</h5>
                <h2 className='fw-normal fst-italic' style={{fontWeight:900}}>Price : ₹{(state.price)*85} </h2>
                <h2 className='fst-italic'>Rating : {state.rating.rate}</h2>
                <button className="btn btn-secondary backbtn" onClick={onBack}>BACK</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
