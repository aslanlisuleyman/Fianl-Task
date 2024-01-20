const express =require("express")

const router =express.Router()
const {AshController}=require("../controller/Product.controller")

router.get("/",AshController.getAll)
router.get("/:id",AshController.getById)
router.delete("/:id",AshController.delete)
router.post("/",AshController.add)
router.put("/:id",AshController.edit)

module.exports=router