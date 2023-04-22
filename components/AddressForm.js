import React from 'react';
import {AddressElement} from '@stripe/react-stripe-js';

const AddressForm = () => {
  return (
	<form>
	  <h3>Shipping</h3>
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
	</form>
  );
};

export default AddressForm;