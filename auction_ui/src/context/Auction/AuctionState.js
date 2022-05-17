import React from 'react'
import AuctionContext from './AuctionContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuctionState = (props) => {
    const state = {
        "user": {},
        "sets": false
    }

    const l1 = {
        "present": 0,
        "List": [],
    }




    const [List, setList] = useState(l1)
    const [user, setUser] = useState(state);

    const current = async () => {
        try {
            const data = await axios({
                withCredentials: true,
                method: "get",
                url: "http://localhost:8000/current_user",
            })
            console.log(data)
            if (data.data.Send == 0) {
                console.log(data.data.send)
                setUser({
                    ...user,
                    "user": data.data,
                    "sets": false
                })
            }
            else {
                setUser({
                    ...user,
                    "user": data.data,
                    "sets": true
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    const active= async()=>{
        try {
            const response=await axios({
                method: "get",
                url: "http://localhost:8000/",
                withCredentials: true
              })
                console.log(response.data)
                setList(response.data)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <AuctionContext.Provider value={{ user, current, active, List }}>
            {props.children}
        </AuctionContext.Provider>
    )
}

export default AuctionState;