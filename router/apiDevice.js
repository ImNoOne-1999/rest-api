const express = require('express');
const deviceRouter = express.Router();
const DeviceFetcher = require('../models/devicedb');

deviceRouter.get('/devicefetcher',function(req,res,next){
    DeviceFetcher.find().then(function(deviceFetcher){
        res.send(deviceFetcher);
    });
    
});


deviceRouter.get('/devicefetcher',function(req,res,next){
    DeviceFetcher.find({ macId: req.query.macid }).then(function(deviceFetcher){
        res.send(deviceFetcher);
    });
});



deviceRouter.post('/devicefetcher',function(req,res,next){
    DeviceFetcher.create(req.body).then(function(deviceFetcher){
        res.send(deviceFetcher);
    }).catch(next);
});

deviceRouter.put('/devicefetcher/:id',function(req,res,next){
    DeviceFetcher.findByIdAndUpdate({ _id: req.params.id}, req.body).then(function(){
        DeviceFetcher.findOne({ _id: req.params.id }).then(function(deviceFetcher){
            res.send(deviceFetcher);
        });
    });
});

module.exports = deviceRouter;