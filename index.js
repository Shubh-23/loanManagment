const express = require('express')
const router = require('./router/index')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors({
        origin: "*"
    }

))
app.use(bodyParser.json())
app.use(router)
    //app.use('/upload',express.static(path.join(__dirname,'upload')))


 let hostName = '0.0.0.0'
 app.listen('8081',hostName, () => {
    console.log('server is working on 8080')
})