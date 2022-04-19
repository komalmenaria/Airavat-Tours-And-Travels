import React from 'react'

function SinglePackage({imurl ,state ,Day}) {
  return (
    <>
    <div className="singlepackage">
<img src={imurl} alt={state} />
<div className="singlepackage-info">
    <strong>{state}</strong>
    <strong>{Day}</strong>
</div>


    </div>


    </>
  )
}

export default SinglePackage