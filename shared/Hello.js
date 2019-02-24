import React from 'react'

export default function Hello(props) {
  const { sender = 'someone' } = props
  return ( 
    <h2>Hello from {sender}</h2>
  )
}