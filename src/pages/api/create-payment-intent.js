import fetch from "node-fetch";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});
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
const createMetadata = (cartDetails) => {
  const metadata = [];

  for (const cart in cartDetails) {

    metadata.push({
      id: cartDetails[cart].id,
      quantity: cartDetails[cart].quantity,
    });
  }
  return JSON.stringify(metadata);
};


export default async function handler(req, res) {
  const { cartDetails } = req.body;
  const amount = await calculateOrderAmount(cartDetails); 
  const metadata = createMetadata(cartDetails);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "JPY",
    automatic_payment_methods: {
      enabled: true,
    },
    metadata:{
      items: metadata,
    },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}