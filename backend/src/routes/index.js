import express from "express";
import {
  add_customer,
  edit_customer,
  get_all_customer,
  get_customer,
  remove_customer,
} from "../controllers/CustController.js";
import {
  add_vegetable,
  edit_vegetable,
  remove_vegetable,
} from "../controllers/VegController.js";
const router = express.Router();

// customers
router.get("/customers", get_all_customer);
router.get("/customer/:cust_id", get_customer);
router.post("/customer", add_customer);
router.put("/customer/:cust_id", edit_customer);
router.delete("/customer/:cust_id", remove_customer);

// vegetables
router.post("/vegetable", add_vegetable);
router.put("/vegetable/:veg_id", edit_vegetable);
router.delete("/vegetable/:cust_id/:veg_id", remove_vegetable);

export default router;
