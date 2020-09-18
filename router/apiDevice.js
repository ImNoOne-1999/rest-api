const express = require('express');
const deviceRouter = express.Router();
const DeviceFetcher = require('../models/devicedb');

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

module.exports = deviceRouter;