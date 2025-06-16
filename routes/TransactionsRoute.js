import express from "express";
import { createTransaction, getTransactionsByUserId,
    deleteTransaction, getsummaryByUserId
 } from "../controller/transactioncontroller.js";

const router= express.Router();

router.get("/:user_id",getTransactionsByUserId);
router.post("/",createTransaction );
router.delete("/:id", deleteTransaction);
router.get("/summary/:user_id",getsummaryByUserId);

export default router;