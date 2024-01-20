const Table = require("../models/Product.model")

const AshController={
    getAll:async(req,res)=>{
        try{
            const ashs=await Table.find()
            res.status(200).send(ashs)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    getById:async(req,res)=>{
        try{
            const{id}=req.params
            const target=await Table.findById(id)
            res.status(200).send(target)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    delete:async(req,res)=>{
        try{
            const{id}=req.params
            await Table.findByIdAndDelete(id)
            const ashh=await Table.find({})
            res.send(ashh)
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    add:async(req,res)=>{
        try{
            const {image,name,price}=req.body
            const newTable=new Table({image,name,price})
            await newTable.save()
            res.status(201).send("success")
        }
        catch(error){
            res.status(404).send("error")
        }
    },
    edit:async(req,res)=>{
        try{
            const{id}=req.params
            const {image,name,price}=req.body
            await Table.findByIdAndUpdate(id,{image,name,price})
            res.status(200).send("success")
        }
        catch(error){
            res.status(404).send("error")
        }
    }
}

module.exports={AshController}