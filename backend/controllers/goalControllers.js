const asyncHandler=require('express-async-handler')
const Goal=require('../model/goals')
const getGoals= asyncHandler(async(req,res)=>
{
    try {
        const goal= await Goal.find({})
    res.status(200).json({goal})
    
  
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
)
    

const postGoals=asyncHandler (async(req,res)=>
{
    try {
        const goal=await Goal.create({text:req.body.text})
        res.status(200).json({goal})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

)

const updateGoals= asyncHandler(async(req,res)=>
{

    try {
        const goal= await Goal.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(201).json({goal})
    } catch (error) {
     res.status(400).json({msg:error})   
    }
}
)

const deleteGoals= asyncHandler(async(req,res)=>
{
    try 
    {
        const goal=await Goal.findByIdAndDelete(req.params.id)
        res.status(200).json({goal})
        
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
)

module.exports={getGoals,postGoals,updateGoals,deleteGoals}