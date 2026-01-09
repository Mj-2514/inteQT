import express from "express";
import dotenv from "dotenv";
dotenv.config();

import {
  sendSupportEmail,
  sendSalesEmail,
  sendGeneralEmail
} from "../utils/sendMail.js";

const router = express.Router();

/* ============================
   SUPPORT FORM
============================ */
router.post("/support", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      companyName,
      serviceId,
      email,
      phone,
      region,
      concern,
      countryCode = ""
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !companyName ||
      !serviceId ||
      !email ||
      !phone ||
      !region ||
      !concern
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    await sendSupportEmail({
      firstName,
      lastName,
      companyName,
      serviceId,
      email,
      phone,
      region,
      concern,
      countryCode
    });

    return res.json({
      success: true,
      message: "Support request submitted successfully"
    });
  } catch (err) {
    console.error("SUPPORT MAIL ERROR:", err.code, err.message);

    return res.status(500).json({
      success: false,
      message: "Failed to send support request",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
});

/* ============================
   SALES FORM
============================ */
router.post("/sales", async (req, res) => {
  try {
    const {
      company,
      fullName,
      email,
      phone,
      address,
      postal,
      product,
      contractYear,
      ip,
      message
    } = req.body;

    if (
      !company ||
      !fullName ||
      !email ||
      !phone ||
      !address ||
      !postal ||
      !product ||
      !contractYear ||
      !ip ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    await sendSalesEmail(req.body);

    return res.json({
      success: true,
      message: "Sales enquiry submitted successfully"
    });
  } catch (err) {
    console.error("SALES MAIL ERROR:", err.code, err.message);

    return res.status(500).json({
      success: false,
      message: "Failed to send sales enquiry",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
});

/* ============================
   GENERAL CONTACT FORM
============================ */
router.post("/general", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    await sendGeneralEmail({ name, email, message });

    return res.json({
      success: true,
      message: "Message sent successfully"
    });
  } catch (err) {
    console.error("GENERAL MAIL ERROR:", err.code, err.message);

    return res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
});

export default router;
