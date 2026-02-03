import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    profilePic: {
      // cloduinary img
      type: String,
      default: "",
    },
    profilePicId: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "admin", "masteradmin"],
      default: "user",
    },
    token: {
      type: String,
      default: null,
    },
    isVarified: {
      type: Boolean,
      default: false,
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);


export const User= mongoose.model("User",userSchema);