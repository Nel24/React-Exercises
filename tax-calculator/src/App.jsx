import { useState } from "react";
import TaxCalculator from "./components/TaxCalculator";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [taxResult, setTaxResult] = useState(0);

  function calculateTax(income, taxRate) {
    setTaxResult(income * (taxRate / 100));
  }

  return (
    <div>
      <TaxCalculator onCalcTax={calculateTax} taxResult={taxResult} />
    </div>
  );
}

export default App;
