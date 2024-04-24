import { Schema,model,models } from "mongoose";

const RatingSchema = new Schema({
    creater: {
        type:Schema.Types.ObjectId,
        ref: "User",
        // required: [true, "User is required."]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required."]
    },
    movie: {
        type: String,
        required: [true,"Movie name is required."],
    }
});

const Rating = models.Rating || model("Rating", RatingSchema);

export default  Rating;