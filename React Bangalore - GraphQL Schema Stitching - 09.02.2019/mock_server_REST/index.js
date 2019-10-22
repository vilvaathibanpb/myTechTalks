'use strict';

const fs = require('fs');
const cors = require('cors')
const express = require('express')
const app = express();

app.use(cors())
const port = 4002
let ips;

app.use((req,res,next) => {
    let rawdata = fs.readFileSync('./ip.json');
    ips = JSON.parse(rawdata);
    next();
})

app.get('/getHistory', (req, res) => res.send(ips));

app.get('/saveIp', (req, res) => {
    const newIp = req.query.ip;
    if(ips.indexOf(newIp) < 0) { ips.push(newIp) };
    let data = JSON.stringify(ips);
    try{
        fs.writeFileSync('./ip.json', data);
        let rawdata = fs.readFileSync('./ip.json');
        ips = JSON.parse(rawdata);
        res.status(200).send(ips)
    } catch(err){
        res.send(err)
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))