const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51KNLPHHdRNktWjdxAPLrScgctqwHZ1CkRbBLOMOHFyqQE2MiWh1nkufrxFpAbI8qSm48XQZygFtTgOBXsr6YdSyD00pEDqK8ik");

// API stup

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello Amazon"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Req recieved >>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "usd",

    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/challenge-10fc8/us-central1/api