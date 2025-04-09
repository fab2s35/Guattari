const subcategoryController = {};
import subcategoryModel from "../models/subcategory.js";

// SELECT
subcategoryController.getSubcategory = async (req, res) => {
  const subcategory = await subcategoryModel.find();
  res.json(subcategory);
};

// INSERT
subcategoryController.createSubcategory = async (req, res) => {
  const {idsubcategory, nameSubCategory, idCategory, orderStatus} = req.body;
  const newSubcategory = new SubcategoryModel({ idsubcategory, nameSubCategory, idCategory, orderStatus});
  await newSubcategory.save();
  res.json({ message: "Subcategory saved" });
};

// DELETE
subcategoryController.deleteSubcategory = async (req, res) => {
  const deleteSubcategory = await subcategoryModel.findByIdAndDelete(req.params.id);
  if (!deleteSubcategory) {
    return res.status(404).json({ message: "Subcategory no encontrado" });
  }
  res.json({ message: "Subcategory deleted" });
};

// UPDATE
subcategoryController.updateSubcategory = async (req, res) => {
  // Solicito todos los valores
  const {idsubcategory, nameSubCategory, idCategory, orderStatus} = req.body;
  // Actualizo
  await saleModel.findByIdAndUpdate(
    req.params.id,
    {
        idsubcategory, nameSubCategory, idCategory, orderStatus
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Subcategory updated" });
};

export default subcategoryController;
