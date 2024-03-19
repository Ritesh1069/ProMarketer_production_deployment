import React from 'react'
import './Button.css'
import { useState } from 'react'

const Button = (props) => {
  const [res, setRes] = useState(null)

  const getData = (a1) => {
    if(a1=="email"){
    fetch("http://localhost:8080/WApp")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setRes(data.message)
    })}
  }

  return (
    <>
      <button className={props.class} onClick={() => getData(props.bid)}> {props.name}</button>
      <div id='api_res'><p>{res}</p></div>
    </>
  )
}

export default Button
