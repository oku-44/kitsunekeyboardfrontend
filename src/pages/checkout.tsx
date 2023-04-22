import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useShoppingCart } from "use-shopping-cart"; // use-shopping-cartをimportする
import CheckoutForm from "../../components/CheckoutForm";
import { ComponentProps} from "react";
import AddressForm from "../../components/AddressForm";
import getStripe from "@/utils/get-stripe";


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
    <div className="Checkout">
      {clientSecret && (
        <Elements options={options} stripe={getStripe()}>
          <AddressForm />
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}