import fetch from "node-fetch";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = async (cartDetails) => {
  let total = 0;
  for (const cart in cartDetails) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?filters[slug]=${cartDetails[cart].id}&populate=*`);
      const res = await response.json()
      total += res.data[0].attributes.price * cartDetails[cart].quantity
    } catch (err) {
      console.log(err);
    }
  }
  return total;
}

export default async function handler(req, res) {
  const { cartDetails } = req.body;
  const amount = await calculateOrderAmount(cartDetails); 
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "jpy",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};