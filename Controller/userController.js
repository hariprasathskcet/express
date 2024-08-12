import mongoexpresses from '../Models/userModel.js'    

export const create = async(req,res)=>{
    try
    {
    const userDetails=new mongoexpresses(req.body);
    const {email}=userDetails;
    const isExist=await mongoexpresses.findOne({email});
    if(isExist)
    {
        res.status(400).json({message:"user already exists"})
    }
    const newUser=await userDetails.save();
    res.send(200).json(newUser)
}  
catch(err)
{
    res.status(500).json({message:"Inter server error"})
}
}
export const fetch=async(req,res)=>{
    try
    {
        const users=await mongoexpresses.find();
        if(users.length==0)
            {
                return res.status(404).json({message:"No user found"})
            }
            res.status(200).json(users);
    }
    catch(error)
    {
        res.status(500).json({error:"internal"});
    }
 }
export const update=async(req,res)=>{
    try
    {
        const id=req.params.id;
        const userExist=await mongoexpresses.findOne({_id:id});
        if(!userExist)
            {
                return res.status(404).json({message:"user not found"})
            }
            const updatedUser=await mongoexpresses.findByIdAndUpdate(id,req.body,{new:true});
            res.status(200).json(updatedUser);
    }
    catch(error)
    {
        res.status(500).json({error:"internal error"});
    }
 }
