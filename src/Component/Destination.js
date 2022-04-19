import React from 'react'

function Destination({url , title}) {
  return (
    <>
    <div className="single-destination-section">
<a href= "/packages" >
<img src={url} alt="" />
<p>{title}</p>

</a>

    </div>
    </>
  )
}

export default Destination