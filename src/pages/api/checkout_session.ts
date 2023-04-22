// import { NextApiRequest, NextApiResponse } from 'next'
// import Stripe from 'stripe'

// type Item = {
//   id: string
//   quantity: number
// }

// type RequestBody = {
//   price?: string
//   quantity?: number
//   items?: Item[]
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method && req.method.toLocaleLowerCase() !== 'post') {
//     return res.status(405).end()
//   }
//   try {
//     const { price, quantity, items } = req.body as RequestBody // リクエストボディの型を指定する
//     const lineItems = items
//       ? items.map((item) => ({
//           price: item.id,
//           quantity: item.quantity,
//           adjustable_quantity: {
//             enabled: true,
//           },
//         }))
//       : [
//           {
//             price,
//             quantity,
//             adjustable_quantity: {
//               enabled: true,
//               minimum: 1,
//               maximum: 10,
//             },
//           },
//         ]
//     const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
//       apiVersion: '2022-11-15',
//       maxNetworkRetries: 3,
//     }) // Stripe APIキーがundefinedではないことを保証するために、!を使用する
//     const session = await stripe.checkout.sessions.create({
//       mode: 'payment',
//       line_items: lineItems,
//       success_url: 'http://localhost:3000/success',
//       cancel_url: 'http://localhost:3000/',
//     })
//     if (!items) return res.redirect(301, session?.url ?? '/')
//     res.status(200).json({
//       url: session.url,
//     })
//   }catch (e: any) {
//     console.log(e)
//     res.status(e.statusCode || 500).json({
//       message: e.message,
//     })
//   }
// }
