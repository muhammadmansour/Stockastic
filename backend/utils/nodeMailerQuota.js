const nodemailer = require('nodemailer')



const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
	user: process.env.EMAIL_USER, 
	pass: process.env.EMAIL_PASS  
  }
});

async function QuotaEmail(body) {
  const { name, email, phone, details } = body;

  const mailOptions = {
    from: '"Stockastic" <no-reply@stockastic.com>',
    to: 'info@stockastic.app',
    subject: 'Stockastic Quota Request',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background: #f9f9f9;">
        <h2 style="text-align: center; color: #4CAF50; margin-bottom: 10px;">Quota Increase Request </h2>
        

        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f4f4f4;">Name</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f4f4f4;">Email</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f4f4f4;">Phone</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; background: #f4f4f4;">Details</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${details}</td>
          </tr>
        </table>

       
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${email}`);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    throw new Error('Failed to send email.');
  }
}



module.exports = QuotaEmail