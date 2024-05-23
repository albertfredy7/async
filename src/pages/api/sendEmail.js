// pages/api/sendEmail.js
import { Resend } from 'resend'; // Ensure Resend is installed and properly configured

const resend = new Resend('re_F1nAe9AV_HTzXAVNYPLLPE9NqcU4yZBYM'); // Make sure RESEND_API_KEY is defined in your environment variables

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, company, email, phone, message } = req.body;

      // Construct the email body dynamically based on form data
      let emailBody = `From: ${firstName} ${lastName}\n`;
      emailBody += `Company: ${company}\n`;
      emailBody += `Email: ${email}\n`;
      emailBody += `Phone: ${phone}\n`;
      emailBody += `Message: ${message}\n`;

      // Assuming EmailTemplate is a React component and needs to be rendered server-side
      // This might require additional setup or a different approach depending on your setup
      const emailContent = `<html><body>${emailBody}</body></html>`; // Simplified for demonstration

      const { data, error } = await resend.emails.send({
        from: `${firstName} ${lastName} <${email}>`, // Replace with your actual email address
        to: ['albertfredy007@gmail.com.com'], // Replace with the recipient's email address
        subject: 'New Inquiry',
        html: emailContent, // Use the HTML content constructed from form data
      });

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(200).json({ status: 'success', message: 'Email sent!', data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}