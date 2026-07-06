const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.set("io", { emit: () => {} });

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000", process.env.FRONTEND_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ message: 'Server is running!' });
});

const consumerRoutes = require("../src/routes/consumerRoutes");
const offerRoutes = require("../src/routes/offerRoutes");
const requestRoutes = require("../src/routes/requestRoutes");
const providerRoutes = require("../src/routes/providerRoutes");
const pairedJobsRoutes = require("../src/routes/pairedJobsRoutes");
const userRouter = require("../src/routes/userRoutes");
const paymentRoutes = require("../src/routes/paymentRoutes");

app.use("/api/v1/consumers", consumerRoutes.router);
app.use("/api/v1/offers", offerRoutes.router);
app.use("/api/v1/requests", requestRoutes.router);
app.use("/api/v1/providers", providerRoutes.router);
app.use("/api/v1/pairedJobs", pairedJobsRoutes.router);
app.use("/api/v1/users", userRouter.router);
app.use("/api/v1/payment", paymentRoutes.router);

module.exports = app;
