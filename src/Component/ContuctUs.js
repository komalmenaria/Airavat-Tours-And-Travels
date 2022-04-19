import React, {useState } from 'react'
import Location from "../img/Locationicon.svg"
import Mail from "../img/mail.svg"
import Call from "../img/call.svg"
import Time from "../img/time.svg"
import contactus from "../img/Contactus1.svg"
// import {useHistory}  from 'react-router-dom'




function   ContuctUs  (){

   
  const [credential, setCredential] = useState({ name:"" , phone :"" ,email :"" ,query :""  })
  // let history = useHistory();

  const handleSubmit = async (e)=>{
  e.preventDefault();
  const {name , phone,email,query } = credential;
  const response = await fetch("http://localhost:4000/api/contactForm/createuser" , {
      method: 'POST', 
      
      headers: { 
        'Content-Type': 'application/json',
        
      },
      
      body: JSON.stringify({name , phone,email,query })
    });
  const json = await response.json()
  console.log(json)
  if (json.success) {
    //  save the auth token and redirect
    // history.push("/")
    alert(` hello  ${name} with email id ${email} your your form submited Successfully` ,"success")
}else{
alert("  Invalid credentials ","danger")
}
  }
  const onChange = (e)=>{
      setCredential({...credential , [e.target.name]: e.target.value})
          }

  return (
    <>
      <div className="contactus-section">
        <img  className='contactUsImgLeft' src={contactus} alt="" />
        
        <div className="contactForm">
          <form onSubmit={handleSubmit} autoComplete="on">
            <h4>Get In Touch</h4>
            <input type="text" placeholder='Name' className='inputArea' required   onChange={onChange}  name="name" />
            <input type="text" placeholder='Phone' className='inputArea' required  onChange={onChange}   name="phone"  />
            <input type="email" placeholder='Email' className='inputArea' required  onChange={onChange} name="email"  />
            <input type="text" placeholder='What you want to Ask? ' className='inputArea'  onChange={onChange}  name="query"  />
            <button type='submit'>Submit</button>
          </form>

        </div>

        <div className="contactInfo">
          <h4>Contact Info </h4>
          <div className="infoItems">
            <div className="infoItem">
              <span> <img src={Location} alt="" />Our Location </span>
              <address>Stable no 7 , Near new Atul engineering works
                , Gogate wadi , Aarey road ,
                Goregaon East ,Mumbai.</address>
            </div>
            <div className="infoItem">
              <span> <img src={Mail} alt="" />Our Email  </span>
              <p><a href="mailto:info.airavata@gmail.com">info.airavata@gmail.com</a></p>
            </div>
            <div className="infoItem">
              <span> <img src={Call} alt="" />Call Us  </span>
              <p><a href="tel:+918000354629">+918000354629</a></p>
            </div>
            <div className="infoItem">
              <span> <img src={Time} alt="" />Working Hours  </span>
              <p>Mon-Fri: 9AM-8PM</p>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}


export default ContuctUs