import expressAsyncHandler from "express-async-handler";
import TransactionModel from "../Model/Transaction.js";

export const addTransaction = expressAsyncHandler(async (req, res, next) => {
  const { category, type, amount, description } = req.body;

  if (!category || !type || !amount) {
    return next(new Error("All fields are required", 400));
  }
  console.log(req.user);

  const transaction = await TransactionModel.create({
    user: req.user,
    category,
    type,
    amount,
    description,
  });

  res.status(200).json({
    success: true,

    transaction,
  });
});

export const getTransaction = expressAsyncHandler(async (req, res, next) => {
  const { startDate, endDate, type, category } = req.query;

  let filters = { user: req.user };
  if (startDate) {
    filters.date = { ...filters.date, $gte: new Date(startDate) };
  }
  if (endDate) {
    filters.date = { ...filters.date, $lte: new Date(endDate) };
  }
  if (type) {
    filters.type = type;
  }
  if (category) {
    if (category === "All") {
    } else if (category === "unknown") {
      filters.category = "unknown";
    } else {
      filters.category = category;
    }
  }

  const transaction = await TransactionModel.find(filters).sort({date:-1});
  res.json({
    transaction,
  });
});

export const updateTransaction=expressAsyncHandler(async(req,res,next)=>{
  const transaction=await TransactionModel.findById(req.params.id);
  if(transaction && transaction.user==req.user){
    transaction.type=req.body.type || transaction.type;
    transaction.category=req.body.category || transaction.category;
    transaction.amount=req.body.amount || transaction.amount;
    transaction.description=req.body.description || transaction.description;
    await transaction.save();
    res.json({
      success:true,
      transaction
    })

    
  }

})

export const deleteTransaction=expressAsyncHandler(async(req,res,next)=>{
  const transaction=await TransactionModel.findById(req.params.id);
  if(transaction && transaction.user==req.user){
    await transaction.deleteOne();
    res.json({
      success:true,
      message:"transaction deleted"
    })
  }
})  
