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
        const login = await API.login('antcliffryan@yahoo.com', 'Sports99');
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

// app.get('/api/test/', async (req, res) => {
//     await API.MWwz('antcliffr12', 'psn')
//         .then(response => response)
//         .then(function (data) {
//             res.json({ data });
//     })
// })

// app.post("/api/test", async (req, res) => {
//     //res.send('/test')
//     try {
//         console.log(req.body.user)
//     } catch (err) {
//         console.log(err);
//     }
// });

// app.route('/api/test')
//     .post(async (req, res) => {
//         res.send(req.body.user)
//         console.log(req.body.user)
//     })
//     .get(async (req, res) => {
//         await API.MWwz('antcliffr12', 'psn')
//             .then(response => response)
//             .then(function (data) {
//                 res.json({ data });
//             })
//     })

// app.get("/api/test", async (req, res) => {
//     res.send('/test')
//     // try {
//     //     await API.MWwz('antcliffr12', 'psn')
//     //         .then(response => response)
//     //         .then(function (data) {
//     //            return res.json({ data });
//     //         })
//     // }catch(err){
//     //     console.log(err);
//     // }

   

// })





app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});