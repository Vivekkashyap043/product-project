import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Product.css'
function Product({product}) {
    let navigate = useNavigate()
    function seeProductDetails(){
        navigate('/product-details', {state:product}) 
    }
  return (
      <div className="card m-2 shadow-lg">
          <img src={product.image}  alt={product.title} className='proimg'/>
              <div className="card-body justify-content-center">
                  <h5 className="card-title">{product.title}</h5>
                  <button className="btn btn-outline-primary mt-2" style={{margin:"auto"}} onClick={seeProductDetails}>See Details</button>
              </div>
      </div>
  )
}

export default Product
