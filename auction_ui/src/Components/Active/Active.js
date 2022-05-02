import React from 'react'
import axios from 'axios';
import "./Active.css"
import { useState } from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import { useEffect } from 'react';
const Active = (props) => {
    console.log(props.List)
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
        <div className="row">
          {
            List.map((value) => {
              return (
                <div key={value[0].id} className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value[0].image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value[0].title}</h5>
                      <p className="card-text">{value[0].description}</p>
                      <a href="#" className="btn btn-primary">Main</a>
                    </div>
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

export default Active