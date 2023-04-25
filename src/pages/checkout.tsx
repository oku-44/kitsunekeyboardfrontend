import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useShoppingCart } from "use-shopping-cart"; // use-shopping-cartをimportする
import CheckoutForm from "../../components/CheckoutForm";
import { ComponentProps} from "react";
import getStripe from "@/utils/get-stripe";
import { CartEntry as ICartEntry } from 'use-shopping-cart/core'


type ElementsOptions = ComponentProps<typeof Elements>['options'];
export default function Checkout() {
  const cart = useShoppingCart()
  const { cartDetails, cartCount } = cart
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartDetails }), // cartDetailsからitemsを取得する
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [cartCount]); // cartDetailsが変更されたときだけ再度実行されるようにする

  const options: ElementsOptions = {
    clientSecret,
    appearance: {
        theme: 'stripe'
    }
}

  return (

    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 xl:px-2 xl:pt-14">
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">Order summary</h2>

            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
              {Object.values(cartDetails || {}).map((product) => (
                  <li key={product.id} className="flex space-x-6 py-6">
                    <img
                      src={product.image}
                      alt={product.image}
                      className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                    />
                    <div className="flex-auto">
                      <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
                        <div className="flex-auto space-y-1 text-sm font-medium">
                          <h3 className="text-gray-900">
                            <a href={product.href}>{product.name}</a>
                          </h3>
                        </div>
                        <div className="content-end self-end">
                          <p className="text-gray-900">{product.price}</p>
                          <p className="text-gray-900">数量：{product.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">$104.00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Taxes</dt>
                <dd className="text-gray-900">$8.32</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="text-gray-900">$14.00</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total</dt>
                <dd className="text-base">$126.32</dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <div className="Checkout">
              {clientSecret && (
                <Elements options={options} stripe={getStripe()}>
                  <CheckoutForm />
                </Elements>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}