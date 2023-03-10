import mongoose from "mongoose";

export const commentSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    commentText: {
      type: String,
    },
    commentPicture: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const commentModel = mongoose.model("Comment", commentSchema);
export default commentModel;
