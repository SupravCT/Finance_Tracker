import mongoose from "mongoose";

const categorgy = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    name: {
      type: String,
      required: true,
      default: "unknown",
    },
    type: {
      type: String,
      required: true,
      enum: ["expense", "income"],
    },
  },
  {
    timestamps: true,
  }
);

const categorgyModel = mongoose.model("category", categorgy);
export default categorgyModel;
