const express = require("express")
const app = express()

app.get("/", (req,res)=>{
res.send("Video Tools API Running")
})

app.get("/api",(req,res)=>{

let url = req.query.url

res.json({
status:"success",
video:url,
download:"https://example.com/video.mp4"
})

})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
console.log("Server running on port "+PORT)
})
