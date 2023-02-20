import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    friends: {
      type: Array,
      default: [],
    },
    picturePath: {
      type: String,
      default: "",
    },
    location: String,
    occupation: String,
    viewProfile: Number,
    impressions: Number,
  },
  // timestamp is used to let us know time , date etc.
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
