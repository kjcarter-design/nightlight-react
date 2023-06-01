import React from 'react'

export default function Light({status}) {
  return (
    <p className="Light">
      This light is {status ? "on" : "off"}!
    </p>
  )
}



