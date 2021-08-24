const API = require('call-of-duty-api')();

const express = require("express");
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const bodyParse = require('body-parser');
const { response } = require('express');

const app = express();

app.use(cors())
app.use(express.json())


const login = async () => {

    try {
        const login = await API.login('antcliffryan@yahoo.com', password);
        console.log(login);
        console.log('Credentails Valid');
    } catch (err) {
        console.log(err);
    }
   

}
login();

app.get('/api/warzone/standard/matches/:platform/:user/', async (req, res) => {
    try {
        const user = req.params.user;
        const platform = req.params.platform;
        await API.MWcombatwz(user, platform)

        .then(response => response)
        .then(function (data) {
            res.json({ data });
        })
   

    } catch (err) {
        res.json({ error: err.message})
    }
})

app.get('/api/warzone/standard/profile/:platform/:user/', async (req, res) => {
    try {
        const user = req.params.user;
        const platform = req.params.platform;
        await API.MWwz(user, platform)
        .then(response => response)
        .then(function (data) {
            res.json({ data });
        })
    }catch (err) {
        res.json({ error: err.message})
    }
})

app.get('/api/warzone/standard/matches/weekly/:platform/:user', async (req, res) => {
    try {
          const user = req.params.user;
        const platform = req.params.platform;
        await API.MWAnalysis(user, platform)

        .then(response => response)
        .then(function (data) {
            res.json({ data });
        })
    }catch (err) {
        res.json({ error: err.message})
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});