import React from "react";
import {
	PaymentElement,
	AddressElement,
	LinkAuthenticationElement,
	useStripe,
	useElements
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";


export default function CheckoutForm() {
	const stripe = useStripe();
	const elements = useElements();
	const router = useRouter();

	const [email, setEmail] = React.useState('');
	const [message, setMessage] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			"payment_intent_client_secret"
		);

		if (!clientSecret) {
			return;
		}

		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			switch (paymentIntent.status) {
				case "succeeded":
					setMessage("Payment succeeded!");
					break;
				case "processing":
					setMessage("Your payment is processing.");
					break;
				case "requires_payment_method":
					setMessage("Your payment was not successful, please try again.");
					break;
				default:
					setMessage("Something went wrong.");
					break;
			}
		});
	}, [stripe]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setIsLoading(true);

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: `${window.location.origin}/payment_success`,
			},
		});

		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.
		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(error.message);
		} else {
			setMessage("An unexpected error occurred.");
		}

		setIsLoading(false);
	};

	const paymentElementOptions = {
		layout: "tabs",
	};

	return (
		<form id="payment-form" onSubmit={handleSubmit}>
			<LinkAuthenticationElement
				id="link-authentication-element"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<PaymentElement id="payment-element" options={paymentElementOptions} />
		<AddressElement
			options={{
				mode: 'shipping',
				autocomplete: {
					mode: "google_maps_api",
					apiKey: "{YOUR_GOOGLE_MAPS_API_KEY}",
				  },}}
			onChange={(event) => {
			if (event.complete) {
				// Extract potentially complete address
				const address = event.value.address;
			}
			}} />
			<button className="w-full" disabled={isLoading || !stripe || !elements} id="submit">
				<span id="button-text">
					{isLoading
					?
					<div className="spinner" id="spinner"></div>
					:
					<div className="mt-6 justrify-self-end">
						<button
							type="submit"
							class="text-sm w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 font-sans text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
							>
							注文を確定する
						</button>
					</div>}
				</span>
			</button>
			{/* Show any error or success messages */}
			{message && <div id="payment-message">{message}</div>}
		</form>
	);
}