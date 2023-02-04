const { application, request } = require('express');
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var JWT_SCRRET = 'ubaidisagoodb$oy';


//creat a user with post' not using auth http://localhost:4000/api/auth/createuser

router.post('/createuser' , 
[
    body('name', 'Enter valid name').isLength({ min: 3 }),
    body('email' , 'Enter valid email').isEmail(),
    body('password' , 'Password must be atleast 5 Char').isLength({ min: 5 }),

], async (req, res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    const errors = validationResult(req);
    // reutrn error if fields empty
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with this email is exisit or not

    try { 
    let user = await User.findOne({email: req.body.email});
    if(user){
      return res.status(400).json({error: 'Sorry user with this email is alreay exists.'});
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password , salt);
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      }).then(
          user => res.json(user) // commeting for seeing authtoken
        );
      // .catch(err=>{
      //     console.log(err);
      //     res.json({error: 'Please enter a unique email', message: err.message});
      // }); 
    // });
    // JSON.stringify(user);
    const data = {
      user:{
        _id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SCRRET);
      console.log(authtoken)
      res.json({authtoken})

  } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
  }
  
});
//authenticate user 
module.exports = router;