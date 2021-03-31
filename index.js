const express = require('express')

const PORT = 3000;
const app = express();

let data = {
    subscribers: [
        {
            name: "John Dohe",
            sex: "Male",
            age: 35,
        },
        {
            name: "Sarah Fisher",
            sex: "Female",
            age: 26,
        }
    ]
    
}

app.get('/', (req, res) => {
    res.send(data);
})

app.listen(PORT, () => {
    console.log("App listening on port " + String(PORT) + "!");
})