import axios from "axios";
import { useState, useEffect } from "react";
import React from 'react'

const Test = () => {
    const URL = `/like/2022-05-17/${1}`
    const [data, setData] = useState('')

    useEffect(() => {
        axios({
            method: 'GET',
            url: URL,
        }).then(res => {
            const datas = res.data
            setData(datas[0].imgurl)
        }).catch(e => {
        })
    }, [])
    
  return (
    <div>
        <img src={data} alt="" />
    </div>
  )
}

export default Test