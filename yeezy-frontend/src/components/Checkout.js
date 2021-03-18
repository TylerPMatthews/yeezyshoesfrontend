import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Checkout = () => {
  const { push } = useHistory();
  const initialFormValues = {
    customer_first: "",
    customer_last: "",
    customer_street: "",
    customer_city: "",
    customer_state: "",
    customer_zip: "",
  };
  const [value, setValue] = useState(initialFormValues);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Thank you for submiting your shipping information!");
    push("/payment");
  };
  console.log(value);
  return (
    <div>
      <h2>Checkout Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            value={value.customer_first}
            onChange={handleChange}
            placeholder="First Name"
            name="customer_first"
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={value.customer_last}
            onChange={handleChange}
            placeholder="Last Name"
            name="customer_last"
          />
        </label>

        <label>
          Street
          <input
            type="text"
            value={value.customer_street}
            onChange={handleChange}
            placeholder="Street"
            name="customer_street"
          />
        </label>

        <label>
          City
          <input
            type="text"
            value={value.customer_city}
            onChange={handleChange}
            placeholder="City"
            name="customer_city"
          />
        </label>

        <label>
          State
          <input
            type="text"
            value={value.customer_state}
            onChange={handleChange}
            placeholder="State"
            name="customer_state"
          />
        </label>

        <label>
          Zip
          <input
            type="text"
            value={value.customer_zip}
            onChange={handleChange}
            placeholder="Zip"
            name="customer_zip"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Checkout;
