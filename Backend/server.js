const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config({path : "./config.env"})

const app = require("./app.js")

const DB = process.env.DATABASE

mongoose
    .connect(DB)
    .then(() => console.log("Database Connected Successfully !"))
    .catch((err) => console.log(`Database Not Connected ! , ${err}`))

app.listen(5000 , () => {
    console.log("Server Running !")
})    