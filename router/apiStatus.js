const express = require('express');
const statusRouter = express.Router();
const StatusFetcher = require('../models/statusdb');

statusRouter.get('/statusfetcher',function(req,res,next){
    StatusFetcher.find({ macId: req.query.macid }).then(function(statusFetcher){
        res.send(statusFetcher);
    });
});

statusRouter.post('/statusfetcher',function(req,res,next){
    StatusFetcher.create(req.body).then(function(statusFetcher){
        res.send(statusFetcher);
    }).catch(next);
});

statusRouter.put('/statusfetcher/:id',function(req,res,next){
    StatusFetcher.findByIdAndUpdate({ _id: req.params.id}, req.body).then(function(){
        StatusFetcher.findOne({ _id: req.params.id }).then(function(statusFetcher){
            res.send(statusFetcher);
        });
    });
});

module.exports = statusRouter;