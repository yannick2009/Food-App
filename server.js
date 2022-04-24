// MODULES REQUIRED
const dotenv = require('dotenv')
const app = require('./app')
const mongoose = require('mongoose')

// CODE
dotenv.config({ path: './config.env' })

//connecter la base de donnée
mongoose.connect(process.env.DB).then(() => {
    console.log('DB connected !')
})

// faire marcher le serveur
app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})
