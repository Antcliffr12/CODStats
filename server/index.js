const API = require('call-of-duty-api')();

const express = require("express");
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const bodyParse = require('body-parser');
const { response } = require('express');

const app = express();

app.use(cors())
app.use(express.json())


app.get("/api", (req, res) => {
    console.log('api');
    res.json({ message: "Hello from server" });
})

const login = async () => {

    try {
        const login = await API.login('user, 'pass');
        console.log(login);
        console.log('Credentails Valid');
    } catch (err) {
        console.log(err);
    }
   

}
login();

app.get('/warzone/profile/:platform/:user/overview', async (req, res) => {
    try {
        const user = req.params.user;
        await API.MWwz(user, 'xbl')
        .then(response => response)
        .then(function (data) {
            res.json({ data });
        })
   

    } catch (err) {
        res.json({ error: err.message})
    }
})






app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});
