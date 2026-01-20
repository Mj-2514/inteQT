// routes/formRoutes.js
import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

// === SMTP TRANSPORTER ===
// .env should already be loaded in server.js via require('dotenv').config()
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
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
    console.log("📋 Support form received:", {
      timestamp: new Date().toISOString(),
      body: req.body,
    });

    const {
      firstName,
      lastName,
      companyName,
      serviceId,
      email,
      phone,
      region,
      concern,
      countryCode,
    } = req.body;

    // Validate required fields
    const requiredFields = {
      firstName, lastName, companyName, serviceId, 
      email, phone, region, concern
    };
    
    const missingFields = Object.entries(requiredFields)
      .filter(([key, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      console.log("❌ Missing fields:", missingFields);
      return res.status(400).json({ 
        success: false, 
        message: `Missing required fields: ${missingFields.join(', ')}` 
      });
    }

    // Build email
    const mailOptions = {
      from: `"inte-QT Support" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "globalsupport@inte-qt.com",
      subject: `Support Request: ${firstName} ${lastName} - ${companyName}`,
      html: buildSupportEmailHtml(req.body),
      // Add text version for compatibility
      text: `
        New Support Request
        ===================
        Name: ${firstName} ${lastName}
        Company: ${companyName}
        Service ID: ${serviceId}
        Email: ${email}
        Phone: ${countryCode || ''} ${phone}
        Region: ${region}
        Concern: ${concern}
        Submitted: ${new Date().toISOString()}
      `,
    };

    console.log("📤 Attempting to send support email...");

    const info = await transporter.sendMail(mailOptions);
    
    console.log("✅ Support email sent successfully:", {
      messageId: info.messageId,
      accepted: info.accepted,
      timestamp: new Date().toISOString(),
    });

    return res.json({ 
      success: true, 
      message: "Support request submitted successfully",
      emailId: info.messageId,
    });
    
  } catch (err) {
    console.error("❌ Support email error:", {
      message: err.message,
      code: err.code,
      command: err.command,
      response: err.response,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      timestamp: new Date().toISOString(),
    });

    // User-friendly error messages
    let errorMessage = "Failed to submit support request";
    let statusCode = 500;

    if (err.code === 'EAUTH') {
      errorMessage = "Email authentication failed. Please check SMTP credentials.";
    } else if (err.code === 'ECONNECTION') {
      errorMessage = "Cannot connect to email server. Please try again later.";
      console.error("💡 Try changing port: 587 with secure: false OR 465 with secure: true");
    } else if (err.code === 'ENOTFOUND') {
      errorMessage = "Email server not found. Please check SMTP configuration.";
    }

    return res.status(statusCode).json({ 
      success: false, 
      message: errorMessage,
      ...(process.env.NODE_ENV === 'development' && { debug: err.message }),
    });
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

export default router;