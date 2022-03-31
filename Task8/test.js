
const axios = require("axios");

axios.defaults.baseURL = 'http://localhost:3000/';

axios.get("/class")
.then(res => {
    console.log(res.data);
    })
.catch(err => {
    console.log(err);
    });

axios.post("/class", {
    "totalStudent:": 10,
    "supervising_Teacger:": "Mr.A",
    "avatar_Teacher:": "https://cdn.fakercloud.com/avatars/stefvdham_128.jpg",
    "createdAt:":1602240800000,
    "updatedAt:":1602240800000
})
.then(res => {
    console.log(res.data);
    })
.catch(err => {
    console.log(err);
    });

axios.put("/class/1", {
    "totalStudent:": 20,
    "supervising_Teacher:": "Mr.B",
    "avatar_Teacher:": "https://cdn.fakercloud.com/avatars/jeremiespoken_128.jpg"
    })
.then(res => {
    console.log(res.data);
    })
.catch(err => {
    console.log(err);
    });

axios.delete("/class/5")
.then(res => {
    console.log(res.data);
    }
)
.catch(err => { 
    console.log(err);
    });

