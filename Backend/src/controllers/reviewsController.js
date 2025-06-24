const reviewController = {};
import reviewModel from "../models/Review.js";

// SELECT
reviewController.getReview = async (req, res) => {
  const reviews = await reviewModel.find().populate("idClient idProduct");
  res.json(reviews);
};

// INSERT
reviewController.insertReview = async (req, res) => {
  const { qualification, comment, idClient, idProduct } = req.body;
  const newReview = new reviewModel({ qualification, comment, idClient, idProduct });
  await newReview.save();
  res.json({ message: "Review saved" });
};

// DELETE
reviewController.deleteReview = async (req, res) => {
  await reviewModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Review deleted" });
};

// UPDATE
reviewController.updateReview = async (req, res) => {
  const { qualification, comment, idClient, idProduct, estado } = req.body;
  await reviewModel.findByIdAndUpdate(
    req.params.id,
    { qualification, comment, idClient, idProduct, estado },
    { new: true }
  );
  res.json({ message: "Review updated" });
};

export default reviewController;
