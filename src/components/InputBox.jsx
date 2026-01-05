import React from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  currencyNames = {}, // Full names ka object (e.g., {USD: "United States Dollar"})
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  
  // Flag URL generate karne ka Jugaad (Currency code ke first 2 letters country code hote hain mostly)
  // Example: INR -> IN, USD -> US
  const countryCode = selectCurrency.slice(0, 2).toUpperCase();
  const flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;

  return (
    <div className="input-card">
      {/* Left Side: Amount */}
      <div className="input-group">
        <label className="label">{label}</label>
        <input
          className="amount-input"
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      {/* Right Side: Currency Select with Flag */}
      <div className="currency-group">
        <p className="label">Currency Type</p>
        
        <div className="currency-selector-box">
          {/* Flag Image */}
          <img src={flagUrl} alt="flag" className="currency-flag" />
          
          <select
            className="currency-select"
            value={selectCurrency}
            disabled={currencyDisable}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {/* Yahan Magic Hai: Code + Full Name */}
                {currency.toUpperCase()} - {currencyNames[currency]}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;