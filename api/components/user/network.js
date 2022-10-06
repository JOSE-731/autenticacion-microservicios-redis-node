//Toda la parte de red de nuestro componente principal
const express = require('express')
const router = express.Router()

const response = require('../../../network/response');
const Controller = require('./index')

router.get('/', function(req, res){
   Controller.list()
      .then((lista) => {
        response.success(req, res, lista, 200)
      })
      .catch((err) =>{
        response.success(req, res, lista, 500)
      })
});

router.get('/:id', function(req, res){
    Controller.get(req.params.id)
       .then((user) => {
         response.success(req, res, user, 200)
       })
       .catch((err) =>{
         response.success(req, res, user, 500)
       })
 });
 

module.exports = router