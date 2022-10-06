const express = require('express')

const app = express();
const Controller = require('./components/user/network')

const port = 3000;
app.use(express.json())//Metodo para analizar las solicitudes entrantes

app.use('/api/user', Controller)
app.listen(port, function(){
    console.log("Corriendo sin problemas")
})