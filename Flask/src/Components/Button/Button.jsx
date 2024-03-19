import React from 'react'
import './Button.css'
import { useState } from 'react'

const Button = (props) => {
  const [info, setInfo] = useState(null)

  const getData = () => {
    fetch("http://localhost:8080/WApp")
    .then(response => {
      return response
    })
    .then(data => {
      setInfo(data)
    })
  }

  return (
    <>
      <button className={props.class} onClick={getData}>{props.name}</button>
      <div><p>{ info ? <h1>{info}</h1> : <div/>}</p></div>
    </>
  )
}

export default Button
