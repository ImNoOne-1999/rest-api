const express = require('express');
const userRouter = express.Router();
const User = require('../models/userdb');

userRouter.get('/iot',function(req,res,next){
    User.find({ userName: req.query.name, password: req.query.pwd }).then(function(users){
        res.send(users);
    });
});    

userRouter.post('/iot',function(req,res,next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

userRouter.put('/iot/:id',function(req,res,next){
    User.findByIdAndUpdate({ _id: req.params.id}, req.body).then(function(){
        User.findOne({ _id: req.params.id }).then(function(user){
            res.send(user);
        });
    });
});

userRouter.delete('/iot/:id',function(req,res,next){
    User.findByIdAndRemove({ _id: req.params.id }).then(function(user){
        res.send(user);
    });
});

module.exports = userRouter;