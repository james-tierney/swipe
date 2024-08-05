const express = require("express");
const stripe = require("stripe")(
  "sk_test_51PkAarGzjfg0H4MPKAxe6PdEhy50yHOHxzq5MZfWShUTgalSlxslBBdOkbly8rJkoLfiFFDfRiLew558BngVDhSG003LNIE1BR"
);
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "500 Swipes",
            },
            unit_amount: 10000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/checkout-success",
      cancel_url: "https://your-website.com/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
