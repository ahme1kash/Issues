import app from "./db/conn.js"
import bodyParser from "body-parser"
import route from './route/routes.js'
import cors from "cors"

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',route)
