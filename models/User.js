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
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
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
