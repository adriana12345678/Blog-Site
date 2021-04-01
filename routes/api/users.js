const express = require('express')
const router = express.Router()
const  User = require('../../models/User')

router.get('/',async (req,res)=>{
 
    try{
      const user = await User.find({})
  
      if(user.length === 0){
        res.json({err: 'No User Exist'})
      }else{
        res.json(user)
      }
    }catch(e){
      res.json({Error: `Error is ${e}`})
    }
  })
  
  router.post('/',async (req,res)=>{
    const {title, image,description} = req.body
  
    const newUser = new User({
      title,
      image,
      description
    })
  
    try{
      const user = await newUser.save()
      res.json(user)
    }catch(e){
      res.json({Error: `Error is ${e}`})
    }
  })
  
  router.get('/:id',async (req,res)=>{

    try{
      const user = await User.findById(req.params.id)
      if(user.length === 0){
        res.json({err: 'No User Exist with this id'})
      }else{
        res.json(user)
      }
    }catch(e){
      res.json({Error: `Error is ${e}`})
    }
  })

  router.delete('/:id',async (req,res)=>{

    try{
      const user = await User.findByIdAndRemove({_id: req.params.id})
     res.json({success: 'User deleted successfully'})
    }catch(e){
      res.json({Error: `Error is ${e}`})
    }
  })
  
  router.put('/:id',async(req,res)=>{
    try{
      const user = await User.findByIdAndUpdate({_id: req.params.id},req.body)
      res.json({success: 'User updated successfully'})
    }catch(e){
      res.json({Error: `Error is ${e}`})
    }
  })


module.exports = router