import { useEffect, useState } from "react";

// Ye hook currency code (e.g., 'usd') leta hai aur uska data return karta hai
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // API call for currency rates
    fetch(`https://api.frankfurter.app/latest?from=${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((err) => console.error("API Error:", err));
  }, [currency]); // Jab bhi 'currency' change hogi, ye dobara run karega

  return data;
}

export default useCurrencyInfo;