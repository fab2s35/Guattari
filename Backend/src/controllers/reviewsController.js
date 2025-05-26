const reviewController = {};
import reviewModel from  "../models/reviews.js";

//SELECT 
reviewController.getReview = async (req, res) => {
  const review = await reviewModel.find().populate("idClient");
  res.json(review);
};

//INSERT

reviewController.insertReview = async (req, res) => {
    const {comment, rating, idClient} = req.body;
    const newReview = new reviewModel({comment,rating, idClient});
    await newReview.save()
    res.json({message:"review saved"})
}

//DELETE
reviewController.deleteReview = async (req, res) => {
  await reviewModel.findByIdAndDelete(req.params.id);
  res.json({ message: "review deleted" });
};

//UPDATE 
reviewController.updateReview = async (req, res) => {
    const {comment, rating, idClient} = req.body;
    await reviewModel.findByIdAndUpdate(
        req.params.id,
        {comment, rating, idClient},
        {new: true}
    );
    res.json({message:"review update"});
};

export default reviewController;