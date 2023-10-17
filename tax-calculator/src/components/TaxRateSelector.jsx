import React, { useState } from "react";

function TaxRateSelector(props) {
  const [taxRate, setTaxRate] = useState(10);

  const taxRateList = [10, 15, 20, 30];

  function selectRate(event) {
    const value = event.target.value;
    setTaxRate(value);
    props.onChangeTaxRate(value);
  }
  return (
    <div>
      <select onChange={selectRate} value={taxRate}>
        {taxRateList.map((rate, index) => {
          return (
            <option key={index} value={rate}>
              {rate}%
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default TaxRateSelector;
