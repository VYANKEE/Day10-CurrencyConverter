import { useState, useEffect } from 'react';
import { Globe, Zap, ShieldCheck, TrendingUp } from 'lucide-react'; // Icons import
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './index.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currencyNames, setCurrencyNames] = useState({});

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  useEffect(() => {
    fetch('https://api.frankfurter.app/currencies')
      .then(res => res.json())
      .then(res => setCurrencyNames(res))
      .catch(err => console.error("Names Error:", err));
  }, []);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if(currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  const scrollToConverter = () => {
    document.getElementById('converter').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <h1>SMART <br /> <span>EXCHANGE</span></h1>
        <p>Live Rates • 30+ Currencies • Instant Conversion</p>
        <button onClick={scrollToConverter} className="scroll-btn">
          Start Converting ↓
        </button>
      </section>

      {/* 2. FEATURES & HOW IT WORKS (NEW SECTION) */}
      <section className="features-section">
        <h2 className="section-title">Why Use Smart Exchange?</h2>
        <p className="section-subtitle">The most reliable tool for your international needs.</p>
        
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="icon-box"><Globe size={24} /></div>
            <h3>Real-Time Global Data</h3>
            <p>We fetch live exchange rates directly from global financial markets to ensure 100% accuracy.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-card">
            <div className="icon-box"><Zap size={24} /></div>
            <h3>Lightning Fast</h3>
            <p>No lag, no reloading. Get instant conversions as you type with our optimized engine.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="icon-box"><ShieldCheck size={24} /></div>
            <h3>Reliable & Free</h3>
            <p>Trusted by thousands of travelers and freelancers. Completely free with zero hidden charges.</p>
          </div>

           {/* Feature 4 */}
           <div className="feature-card">
            <div className="icon-box"><TrendingUp size={24} /></div>
            <h3>Visual Trends</h3>
            <p>Easily spot currency names and flags to make sure you are converting the right money.</p>
          </div>
        </div>

        {/* How To Use Steps */}
        <div className="steps-container">
          <div className="step-badge"><span className="step-number">1</span> Enter Amount</div>
          <div className="step-badge"><span className="step-number">2</span> Select Currencies</div>
          <div className="step-badge"><span className="step-number">3</span> Click Convert</div>
        </div>
      </section>

      {/* 3. CONVERTER APP */}
      <section id="converter" className="converter-section">
        <div className="converter-card">
          <h2 style={{textAlign:'center', marginBottom:'25px', fontWeight:'600', color:'white'}}>
            Currency Converter
          </h2>
          
          <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
            <InputBox
              label="You Send"
              amount={amount}
              currencyOptions={options}
              currencyNames={currencyNames}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />

            <div className="swap-btn-container">
              <button type="button" className="swap-btn" onClick={swap}>
                ⇅ Swap
              </button>
            </div>

            <InputBox
              label="You Receive"
              amount={convertedAmount}
              currencyOptions={options}
              currencyNames={currencyNames}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />

            <button type="submit" className="convert-btn">
              Convert {from.toUpperCase()} ➝ {to.toUpperCase()}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{padding: '20px', textAlign: 'center', background: '#0f0f12', color: '#555', fontSize: '0.8rem'}}>
        Smart Exchange © 2026 | Built for Travelers
      </footer>
    </div>
  );
}

export default App;