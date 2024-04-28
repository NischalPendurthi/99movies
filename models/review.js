import { Schema,model,models } from "mongoose";

const ReviewSchema = new Schema({
    creater: {
        type: String,
        ref: "User",
        required: [true, "User is required."]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required."]
    },
    movie: {
        type: String,
        required: [true,"Movie name is required."],
    },
    review: {
        type: String,
        required: [true,"Movie name is required."],
    },
    image: {
        type: String,
        required: [true,"Movie name is required."],
    },
});

const Review = models.Review || model("Review", ReviewSchema);

export default  Review;