import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "All fields (name, email, message) are required" 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address" 
        });
      }

      // In a real application, you would:
      // 1. Save the contact form submission to a database
      // 2. Send an email notification
      // 3. Send a confirmation email to the user
      
      console.log("Contact form submission:", { name, email, message });
      
      res.json({ 
        message: "Message sent successfully! Thank you for getting in touch." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", async (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "public", "lakshya-porwal-resume.pdf");
      
      // Check if resume file exists
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({ 
          message: "Resume file not found" 
        });
      }

      // Set appropriate headers for PDF download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Lakshya_Porwal_Resume.pdf"');
      
      // Send the file
      res.sendFile(resumePath);
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ 
        message: "Failed to download resume. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
