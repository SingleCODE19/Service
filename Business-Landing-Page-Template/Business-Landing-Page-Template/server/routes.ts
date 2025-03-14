import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export function registerRoutes(app: Express): Server {
  // API routes
  app.get('/api/services', (req, res) => {
    res.json({
      success: true,
      message: 'Services retrieved successfully'
    });
  });

  // Book service endpoint
  app.post('/api/book-service', (req, res) => {
    res.json({
      success: true,
      message: 'Service booked successfully'
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}