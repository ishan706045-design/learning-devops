const express = require("express")

const app = express();
require('dotenv').config()

const port = process.env.PORT ?? 3000;

const env = process.env;


app.get("/",(req,res)=>{
    res.status(200).json({success:true,message:"app is working fine",data:env})
})


app.get("/health",(req,res)=>{
    res.status(200).json({success:true,message:"app health was good"})
})

app.get('/country/:name', async (req, res, next) => {
  try {
    const name = encodeURIComponent(req.params.name);
    const resp = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await resp.json();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
});


app.listen(port,()=>{
    console.log(`app is listening on port ${process.env.PORT}`)
})
