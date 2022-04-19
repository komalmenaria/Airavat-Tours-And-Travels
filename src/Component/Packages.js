import React from 'react'
import SinglePackage from "./SinglePackage"
import packagedata from './packagedata';
function Packages() {
 return (
  <>
  <h1  className="packages-heading">
  Pilgrims Packages
  </h1>
<section className='packages-section'>
  
  
  {packagedata.packData.map((item,index)=>{
      return(
        <SinglePackage 
        imurl={item.imurl}
        state={item.state}
        Day={item.Day}
        key={index}
          />
      )
  })}

  
  </section>
  </>
)
}

export default Packages

