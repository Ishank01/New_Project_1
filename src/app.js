const express=require('express')
const path=require('path')
const app=express()
const port= process.env.PORT || 7000

// app.set('view engine','hbs')
app.use(express.static(path.join(__dirname,'../public')))

app.get("/",(req,res)=>{
    res.send('OK')
})
app.get("/next",(req,res)=>{
    res.send('Next Page')
})

app.listen(port,()=>{
    console.log(`This is rendering on port ${port}`)
})