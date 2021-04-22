const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const FormData = require('form-data')
const fetch = require('node-fetch');


const app = express()

var cloudAPI = {
    application_key: process.env.API_KEY
}

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/sentiment', async function (req, res) {

    const formdata = new FormData()
    formdata.append("key", cloudAPI.application_key);
    formdata.append("url",req.query.url);
    formdata.append("lang", "auto");

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };
    
    try{
        const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
        const data = await response.json();
        res.send(data);
    } catch (err){
        res.send(err);
    }
})