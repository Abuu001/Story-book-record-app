const express = require('express')
require('dotenv').config({path : './config/config.env'})
const app= express()
const chalk = require('chalk')
const connectDb = require('./config/db')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
connectDb()


//middleware
app.engine('.hbs', exphbs({defaultLayout:'main' ,extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use('/',require('./Routes/index'))
 
//static folder
app.use(express.static(path.join(__dirname,'public')))

if(process.env.NODE_ENV==='development'){
      app.use(morgan('dev'))
}

const PORT =process.env.PORT || 3000 ;
app.listen(PORT,()=>console.log(`${chalk.cyan(`Server`)} running in ${chalk.yellow(process.env.NODE_ENV)} mode in  PORT ${chalk.red(PORT)}`))