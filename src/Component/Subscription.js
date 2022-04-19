import React ,{useState} from 'react'




function Subscription (){
  
  const [credential, setCredential] = useState({ email :""  })
  // let history = useHistory();

  const handleSubmit = async (e)=>{
  e.preventDefault();
  const {email} = credential;
  const response = await fetch("http://localhost:4000/api/subscribeForm/createsubscribe" , {
      method: 'POST', 
      
      headers: { 
        'Content-Type': 'application/json',
        
      },
      
      body: JSON.stringify({email })
    });
  const json = await response.json()
  console.log(json)
  if (json.success) {
    //  save the auth token and redirect
    // history.push("/")
    alert(` hello  ${email}  you subscribed for Airavat Successfully` ,"success")
}else{
alert("  Invalid credentials ","danger")
}
  }
  const onChange = (e)=>{
      setCredential({...credential , [e.target.name]: e.target.value})
          }

  return (
    <>
    <div className="subscription-div">
<p>Subscribe to get information, latest news and other
interesting offers about Airavat</p>
<form onSubmit={handleSubmit} className='subscription-form'>

  <input type="email" name="email" id="" placeholder='Your email' onChange={onChange}/>
  <button type='submit' className="subscription">
  Subscribe
  </button>
</form>

    </div>
    
    </>
  )
}

export default Subscription