const brandsController = {};
import brands from "../models/brands.js"
import brandsModel from "../models/brands.js"

//SELECT 
brandsController.getBrands = async (req, res) => {
     const brands = await brandsModel.find()
     res.json(brands)
}

//INSERT
brandsController.insertBrands = async (req, res) =>{
    const {nameBrand} = req.body;
    const newBrands = new brandsModel({nameBrand})
    await newBrands.save()
    res.json({message: "Brand saved"})
}   

//DELETE
brandsController.deleteBrands = async (req, res) =>{
    await brandsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Brand deleted"}) 
}

//UPDATE
brandsController.updateBrands = async (req, res) =>{
    const {nameBrand} = (req.params.id,
        {nameBrand}, {new: true})
    res.json({message: "Brand updated successfully"})
}

export default brandsController;