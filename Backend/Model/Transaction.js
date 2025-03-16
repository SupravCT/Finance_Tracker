import mongoose from "mongoose";

const transaction = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    category: {
      type: String,
      required: true,
      default: "unknown",
    },
    type: {
      type: String,
      required: true,
      enum: ["expense", "income"],
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const transactionModel = mongoose.model("transaction", transaction);
export default transactionModel;
