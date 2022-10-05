import express from "express";

const app = express();
import  user from './components/user/network.js';

const port = 3000;
app.use(express.json())//Metodo para analizar las solicitudes entrantes

app.use('/api/user', user)
app.listen(port, function(){
    console.log("Corriendo sin problemas")
})