import React from 'react'

function Service({url , heading , desc}) {
  return (
    <>
    <div className="single-service">
        <img src={url} alt="" />
        <p className='single-service-heading'> {heading} </p>
        <p className='single-service-desc' > {desc} </p>
    </div>
    
    </>
  )
}

export default Service