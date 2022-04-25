const express = require('express');
const Subscribe = require('../models/Subscribe');
const router = express.Router();
const { body, validationResult } = require('express-validator');







// route 1 : create a user using post "/api/auth/createuser" . no login required
router.post('/createSubscribe',[
    body('email','Enter a valid email').isEmail(),
    
], async (req ,res)=>{
  let success= false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }


    // check weather the user with the email exist already
try {
  

    let subscribe = await Subscribe.findOne({useremail: req.body.email});
    
    // if(contact){
    //   return res.status(400).json({success, errors: "Sorry a user with this email already exists" });
    // }

   
    subscribe = await Subscribe.create({
       
        useremail: req.body.email

      })
      
      // .then(user => res.json(user)).catch(err=>{ console.log(err)
      // res.json({error : 'Please enter a unique value for email',message: err.message})})
 
//  console.log(jwtData);
success = true;
res.json({success })

}
catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error")
}
// res.send("im noob")
   
})

module.exports = router