const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "New Message From Website",
      text: `From: ${email}\n\n${message}`,
      replyTo: email
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
