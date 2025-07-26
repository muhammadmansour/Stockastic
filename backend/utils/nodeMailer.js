const nodemailer = require('nodemailer')



const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS  
  }
});

 async function sendOtpEmail(toEmail, otp) {

  const mailOptions = {
    from: '"Stockastic" <no-reply@stockastic.com>',
    to: toEmail,
    subject: 'Your Stockastic OTP Code',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background: #f9f9f9;">
        <h2 style="text-align: center; color: #4CAF50;">Stockastic Verification Code</h2>
        <p>Hello,</p>
        <p>Your One-Time Password (OTP) is:</p>
        <div style="font-size: 32px; font-weight: bold; text-align: center; margin: 20px 0; color: #333;">
          ${otp}
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ OTP sent to ${toEmail}: ${otp}`);
    return otp; 
  } catch (error) {
    console.error('❌ Failed to send OTP:', error);
    throw new Error('Failed to send OTP email.');
  }
}


module.exports = sendOtpEmail