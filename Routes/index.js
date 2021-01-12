const express = require('express')
const router = new express.Router()

//@desc Login / Landing page
router.get('/',(req,res)=>{
    res.render('login',{
        layout : 'login'
    })
})
//32
router.get('/dashboard',(req,res)=>{
    res.render('dashboard')
})

module.exports= router