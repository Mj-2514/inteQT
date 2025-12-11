// routes/formRoutes.js
const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

// === SMTP TRANSPORTER ===
// .env should already be loaded in server.js via require('dotenv').config()
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true, // SSL on connect
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});


// Optional: verify once when this file loads
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection error:", error);
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

// === EMAIL BODY BUILDERS ===

const buildSupportEmailHtml = (body) => {
  const {
    firstName,
    lastName,
    companyName,
    serviceId,
    email,
    phone,
    countryCode,
    region,
    concern,
  } = body;

  return `
    <h2>New Support Request</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Company:</strong> ${companyName}</p>
    <p><strong>NSOC ID / ORDER ID / CIRCUIT ID:</strong> ${serviceId}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${(countryCode || "") + " " + (phone || "")}</p>
    <p><strong>Region:</strong> ${region}</p>
    <p><strong>Concern:</strong></p>
    <p>${(concern || "").replace(/\n/g, "<br />")}</p>
  `;
};

const buildSalesEmailHtml = (body) => {
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
    message,
  } = body;

  return `
    <h2>New Sales Enquiry</h2>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Contact Person:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Postal Code:</strong> ${postal}</p>
    <p><strong>Product:</strong> ${product}</p>
    <p><strong>Contract Duration:</strong> ${contractYear}</p>
    <p><strong>IP Requirement:</strong> ${ip}</p>
    <p><strong>Message / Requirements:</strong></p>
    <p>${(message || "").replace(/\n/g, "<br />")}</p>
  `;
};

const buildGeneralEmailHtml = (body) => {
  const { name, email, message } = body;

  return `
    <h2>New General Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${(message || "").replace(/\n/g, "<br />")}</p>
  `;
};

// === ROUTES ===

// SUPPORT FORM → globalsupport@inte-qt.com
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
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    await transporter.sendMail({
      from: `"inte-QT Support" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "globalsupport@inte-qt.com",
      subject: "New Support Request",
      html: buildSupportEmailHtml(req.body),
    });

    return res.json({ success: true, message: "Support email sent" });
  } catch (err) {
    console.error("Support email error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send support email" });
  }
});

// SALES FORM → sales@inte-qt.com
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
      message,
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
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    await transporter.sendMail({
      from: `"inte-QT Sales" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "sales@inte-qt.com",
      subject: "New Sales Enquiry",
      html: buildSalesEmailHtml(req.body),
    });

    return res.json({ success: true, message: "Sales email sent" });
  } catch (err) {
    console.error("Sales email error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send sales email" });
  }
});

// GENERAL FORM → generalops@inte-qt.com
router.post("/general", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    await transporter.sendMail({
      from: `"inte-QT Contact" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "generalops@inte-qt.com",
      subject: "New General Contact Message",
      html: buildGeneralEmailHtml(req.body),
    });

    return res.json({ success: true, message: "General email sent" });
  } catch (err) {
    console.error("General email error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send general email" });
  }
});

module.exports = router;
