const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();
const { body, validationResult } = require('express-validator');







// route 1 : create a user using post "/api/auth/createuser" . no login required
router.post('/createUser',[
    body('name','Enter a valid name').isLength({ min: 5 }),
    body('phone','Enter a valid phone number').isLength(10),
    body('email','Enter a valid email').isEmail(),
    
], async (req ,res)=>{
  let success= false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }


    // check weather the user with the email exist already
try {
  

    let contact = await Contact.findOne({useremail: req.body.email});
    
    // if(contact){
    //   return res.status(400).json({success, errors: "Sorry a user with this email already exists" });
    // }

   
    contact = await Contact.create({
        username: req.body.name,
        useremail: req.body.email,
       userphone:req.body.phone,
       userquery:req.body.query

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