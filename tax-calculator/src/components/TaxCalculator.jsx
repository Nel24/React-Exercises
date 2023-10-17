import { useState } from "react";
import TaxRateSelector from "./TaxRateSelector";

function TaxCalculator(props) {
  const [income, setIncome] = useState(0);
  const [taxRate, setTaxRate] = useState(10);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const newvalue = event.target.value;
    setIncome(newvalue);
  }
  function handleTaxRateChange(value) {
    console.log(value);
    setTaxRate(value);
  }

  return (
    <div>
      <h1>Tax Calculator</h1>
      <h2>
        <span>Tax Result: </span>
        {props.taxResult}
      </h2>
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        // maxLength="7"
        onChange={handleChange}
        value={income}
      />
      <TaxRateSelector onChangeTaxRate={handleTaxRateChange} />
      <button
        className="btn btn-success"
        onClick={() => {
          if (!/^\d+$/.test(income)) {
            // Check if income is not a valid number
            setErrorMessage("Please input numbers only.");
          } else if (income.length > 7) {
            // Check if income exceeds 7 digits
            setErrorMessage("Maximum of 7 digits only.");
          } else {
            // Reset error message if income is valid
            setErrorMessage("");
            props.onCalcTax(income, taxRate);
          }
        }}
      >
        Calculate My Income Tax
      </button>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </div>
  );
}

export default TaxCalculator;
