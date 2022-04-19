import React from 'react'
import Loaderimg from "../img/Loader.gif"
function Loader() {
  return (
    <>
        <div className="Loader-div">
        <img className="Loader" src={Loaderimg} />
        </div>
    </>
  )
}

export default Loader