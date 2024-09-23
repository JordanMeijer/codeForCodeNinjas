import React, { useState } from 'react'

export default function Contact({setCounter}) {
    
  return (
    <>
    <div>Contact
    </div>
        <button onClick={()=>{setCounter((prevCounter) => prevCounter+ 1)}}>counter</button>
    </>
  )
}
