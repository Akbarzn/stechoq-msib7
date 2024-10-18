const jwt = require('jsonwebtoken')

const adminAuthorization = async(req,res,next)=>{
    const token = req.headers.authorization
    
    if(!token){
       return res.status(401).json({message:"Token not provided"})
    }

    try{
        // validasi token
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        
        //cek apakah user rolenya admin? 
        if(decoded.role !== "ADMIN"){
            return res.status(403).json("Unauthorization")
        }
        next()
    }catch(error){
        return res.status(401).json({message:"Token Invalid"})
    }
}

module.exports = adminAuthorization