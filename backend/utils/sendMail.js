import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || `"inte-QT" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html
    });

    console.log("MAIL SENT:", info.messageId);
    return info;
  } catch (err) {
    console.error("MAIL FAILED:", err.code, err.message);
    throw err;
  }
};

/* ================= SUPPORT ================= */
export const sendSupportEmail = async (data) => {
  const { firstName, lastName, companyName, serviceId, email, phone, region, concern, countryCode } = data;

  return sendEmail({
    to: process.env.SUPPORT_EMAIL,
    subject: `Support Request: ${companyName} - ${serviceId}`,
    html: `
      <h2>New Support Request</h2>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Company:</b> ${companyName}</p>
      <p><b>Service ID:</b> ${serviceId}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${countryCode} ${phone}</p>
      <p><b>Region:</b> ${region}</p>
      <p><b>Concern:</b><br/>${concern.replace(/\n/g, "<br>")}</p>
    `
  });
};

/* ================= SALES ================= */
export const sendSalesEmail = async (data) => {
  return sendEmail({
    to: process.env.SALES_EMAIL,
    subject: `Sales Enquiry: ${data.company} - ${data.product}`,
    html: `
      <h2>New Sales Enquiry</h2>
      <p><b>Company:</b> ${data.company}</p>
      <p><b>Name:</b> ${data.fullName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Address:</b> ${data.address}</p>
      <p><b>Postal:</b> ${data.postal}</p>
      <p><b>Product:</b> ${data.product}</p>
      <p><b>Contract:</b> ${data.contractYear}</p>
      <p><b>IP:</b> ${data.ip}</p>
      <p><b>Message:</b><br/>${data.message.replace(/\n/g, "<br>")}</p>
    `
  });
};

/* ================= GENERAL ================= */
export const sendGeneralEmail = async ({ name, email, message }) => {
  return sendEmail({
    to: process.env.GENERAL_EMAIL,
    subject: `General Contact: ${name}`,
    html: `
      <h2>New General Enquiry</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b><br/>${message.replace(/\n/g, "<br>")}</p>
    `
  });
};

export default transporter;
