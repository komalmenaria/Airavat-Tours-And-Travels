import React from 'react'

function BookTrip ({url , title , desc }) {
  return (
    <>
<div className="single-booktrip">
    
<img src={url} alt="" />
<div>
<p className='single-booktrip-title' >{title}</p>
<p className='single-booktrip-desc' >{desc}</p>
</div>
</div>

    </>
  )
}

export default  BookTrip