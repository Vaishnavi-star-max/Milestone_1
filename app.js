const express=require("express");
const app=express();
app.use(express.json());

const port=8134;

app.get('/test',(req,res)=>{
    res.send("Signup")
})
app.post('/submit',async(req,res)=>{
    try {
        const{username,email,password,dateOfBirth}=req.body
        if(!username || !email){
            res.status(400).json("Username cannot be empty")
        }
        if(password.length<8 || password.length>=16){
            res.status(401).json("Password length should be greater than 8 or less than or equal to 16")
        }
        
    } catch (error) {
        res.status(500).json("Server error")
    }
})

app.listen(port,()=>{
   console.log(`server is running in http://localhost:${port}`);
})