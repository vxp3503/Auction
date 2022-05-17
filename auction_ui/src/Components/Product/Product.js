import React from 'react'
import "./Product.css"

const Product = (props) => {
    let List=props.List.List
    if(props.List.present==0)
    {
        return (
            <>
            <h2>Nothing Present</h2>
            </>
        )
    }
    return (
        <>
        <div className="container">
        <div className="main">
          {
            List.map((value) => {
              return (
                  <div key={value[0].id}className="card">
                    <img src={value[0].image} alt="..." />
                    <div className='card-content'>
                      <h5>{value[0].title}</h5>
                      <p>{value[0].description}</p>
                      <a href="#" className="btn btn-primary">Main</a>
                    </div>
                  </div>
              );
            })
          }
        </div>
      </div>
      </>
    )
}

export default Product