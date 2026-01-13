import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();



// Check environment variables
const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SUPPORT_EMAIL'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error("❌ CRITICAL: Missing environment variables:", missingVars);
  throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
}



// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: parseInt(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  debug: true,
  logger: true
});

// Generic email sending function
export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    
    
    const mailOptions = {
      from: process.env.SMTP_FROM || `"inte-QT" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html
    };

    

    const info = await transporter.sendMail(mailOptions);
    
 
    
    return info;
  } catch (error) {
    console.error("\n❌ EMAIL SENDING FAILED!");
    console.error("Error Name:", error.name);
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
    console.error("Error Stack:", error.stack);
    
    if (error.responseCode) {
      console.error("SMTP Response Code:", error.responseCode);
    }
    if (error.response) {
      console.error("SMTP Response:", error.response);
    }
    
    throw new Error(`Email sending failed: ${error.message}`);
  }
};

/* ================= SUPPORT EMAIL ================= */
export const sendSupportEmail = async (data) => {
  try {
   
    
    const { firstName, lastName, companyName, serviceId, email, phone, region, concern, countryCode } = data;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
          🆘 New Support Request
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold; width: 30%;">
              👤 Name
            </td>
            <td style="padding: 8px; border: 1px solid #ddd;">
              ${firstName} ${lastName}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">
              🏢 Company
            </td>
            <td style="padding: 8px; border: 1px solid #ddd;">
              ${companyName}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">
              🔢 Service ID
            </td>
            <td style="padding: 8px; border: 1px solid #ddd;">
              ${serviceId}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">
              📧 Email
            </td>
            <td style="padding: 8px; border: 1px solid #ddd;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">
              📞 Phone
            </td>
            <td style="padding: 8px; border: 1px solid #ddd;">
              ${countryCode} ${phone}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">
              🌍 Region
            </td>
            <td style="padding: 8px; border: 1px solid #ddd;">
              ${region}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold; vertical-align: top;">
              💬 Concern
            </td>
            <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-line;">
              ${concern.replace(/\n/g, '<br>')}
            </td>
          </tr>
        </table>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #4F46E5;">
          <p style="margin: 0; color: #333;">
            <strong>📅 Received:</strong> ${new Date().toLocaleString()}<br>
            <strong>🆔 Ticket ID:</strong> SUPP-${Date.now()}
          </p>
        </div>
      </div>
    `;

    const textContent = `
NEW SUPPORT REQUEST
===================

Name: ${firstName} ${lastName}
Company: ${companyName}
Service ID: ${serviceId}
Email: ${email}
Phone: ${countryCode} ${phone}
Region: ${region}

Concern:
${concern}

Received: ${new Date().toLocaleString()}
Ticket ID: SUPP-${Date.now()}
    `;

    
    
    const result = await sendEmail({
      to: process.env.SUPPORT_EMAIL,
      subject: `🆘 Support Request: ${companyName} - ${serviceId}`,
      text: textContent,
      html: htmlContent
    });

   
    return result;
    
  } catch (error) {
    console.error("❌ SUPPORT EMAIL FAILED:", error.message);
    throw error;
  }
};

/* ================= SALES EMAIL ================= */
export const sendSalesEmail = async (data) => {
  try {
   
    
    const htmlContent = `
      <h2>New Sales Enquiry</h2>
      <p><b>Company:</b> ${data.company}</p>
      <p><b>Name:</b> ${data.fullName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Address:</b> ${data.address}</p>
      <p><b>Postal:</b> ${data.postal}</p>
      <p><b>Product:</b> ${data.product}</p>
      <p><b>Contract:</b> ${data.contractYear} year(s)</p>
      <p><b>IP:</b> ${data.ip}</p>
      <p><b>Message:</b><br/>${data.message.replace(/\n/g, "<br>")}</p>
    `;

    return sendEmail({
      to: process.env.SALES_EMAIL,
      subject: `💰 Sales Enquiry: ${data.company} - ${data.product}`,
      text: `Sales enquiry from ${data.fullName} (${data.company})`,
      html: htmlContent
    });
  } catch (error) {
    console.error("❌ SALES EMAIL FAILED:", error.message);
    throw error;
  }
};

/* ================= GENERAL EMAIL ================= */
export const sendGeneralEmail = async ({ name, email, message }) => {
  try {
    
    
    const htmlContent = `
      <h2>New General Enquiry</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b><br/>${message.replace(/\n/g, "<br>")}</p>
    `;

    return sendEmail({
      to: process.env.GENERAL_EMAIL,
      subject: `📞 General Contact: ${name}`,
      text: `General enquiry from ${name} (${email})`,
      html: htmlContent
    });
  } catch (error) {
    console.error("❌ GENERAL EMAIL FAILED:", error.message);
    throw error;
  }
};

export default transporter;