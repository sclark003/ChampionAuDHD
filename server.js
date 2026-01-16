// Backend server for handling SMTP email sending
// Install dependencies: npm install express nodemailer dotenv cors

import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Validate SMTP configuration
const requiredEnvVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD']
const missingVars = requiredEnvVars.filter(varName => !process.env[varName])

if (missingVars.length > 0) {
  console.error('❌ Missing required SMTP environment variables:', missingVars.join(', '))
  console.error('Please configure SMTP settings in your .env file')
}

// SMTP Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  // Add connection timeout
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 10000,
  socketTimeout: 10000,
})

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    // Check if SMTP is configured
    if (missingVars.length > 0) {
      return res.status(500).json({ 
        error: 'SMTP not configured',
        details: `Missing environment variables: ${missingVars.join(', ')}. Please configure SMTP settings in your .env file.`
      })
    }

    const { name, email, message, to, subject } = req.body

    // Validate input
    if (!name || !email || !message || !to) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Use custom subject if provided, otherwise default
    const emailSubject = subject || `Contact Form Message from ${name}`

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: to,
      replyTo: email,
      subject: emailSubject,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
      html: `
        <h2>${emailSubject}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    console.log('✅ Email sent successfully:', info.messageId)
    res.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email sent successfully' 
    })
  } catch (error) {
    console.error('❌ Error sending email:', error)
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode
    })
    
    // Provide more helpful error messages
    let errorMessage = error.message
    if (error.code === 'EAUTH' || error.responseCode === 535) {
      errorMessage = 'SMTP authentication failed. Please check your SMTP_USER and SMTP_PASSWORD in the .env file. Make sure they are correct and that you are using an app-specific password if required by your email provider.'
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = `Cannot connect to SMTP server at ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}. Please check your SMTP_HOST and SMTP_PORT settings.`
    } else if (error.code === 'EENVELOPE') {
      errorMessage = 'Invalid email address. Please check the recipient email.'
    } else if (error.responseCode === 535) {
      errorMessage = 'Invalid login credentials. Please verify your SMTP_USER and SMTP_PASSWORD in the .env file.'
    }

    res.status(500).json({ 
      error: 'Failed to send email',
      details: errorMessage,
      code: error.code
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
