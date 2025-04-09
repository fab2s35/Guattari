const branchesController = {};
import branches from "../models/branches.js"
import branchesModel from "../models/branches.js"

//SELECT 
branchesController.getBranches = async (req, res) => {
     const branches = await branchesModel.find()
     res.json(branches)
}

//INSERT
branchesController.insertBranches = async (req, res) =>{
    const {nameBranches, emailBranches, phoneBranches, scheduleBranches, addressBranches} = req.body;
    const newBranches = new branchesModel({nameBranches, emailBranches, phoneBranches, scheduleBranches, addressBranches})
    await newBranches.save()
    res.json({message: "Branches saved"})
}   

//DELETE
branchesController.deleteBranches = async (req, res) =>{
    await branchesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Branches deleted"}) 
}

//UPDATE
branchesController.updateBranches = async (req, res) =>{
    const {nameBranches, emailBranches, phoneBranches, scheduleBranches, addressBranches} = (req.params.id,
        {nameBranches, emailBranches, phoneBranches, scheduleBranches, addressBranches}, {new: true})
    res.json({message: "Branches updated successfully"})
}

export default branchesController;