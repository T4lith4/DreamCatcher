//Auth Routes here

//bring in express router
const express = require('express');
//create router variable
const router = express.Router();
//bring in User model file
const User = require('../../models/User');
const bcrypt = require ('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//register user:
router.post('/',(req, res) => {
   const{ email, password } = req.body;
   //simple validation
   if (!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields'});
   }
 //check for existing user by email
   User.findOne({ email })
      .then(user => {
         if(!user) return res.status(400).json( { msg: 'User does not exist'});
        //validate password
        bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          )
        })
      })
});
//get user data by token
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

//export the module
module.exports = router;

