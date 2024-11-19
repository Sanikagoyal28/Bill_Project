import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const billSchema = new mongoose.Schema(
  {
    customer: {
      type: ObjectId,
      ref: "customer",
      required: true,
    },
    vegetables: [
      {
        name: String,
        price_per_kg: Number,
        quantity: Number,
      },
    ],
    total_amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    bill_number:{
      type:Number,
      unique:true
    }
  },
  {
    timestamps: true,
  }
);

const Bill = mongoose.model("bill", billSchema);

export default Bill;
