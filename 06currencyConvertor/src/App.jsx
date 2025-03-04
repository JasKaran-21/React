import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'
// import './App.css'

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swapClick = () => {
    setTo(from)
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])  // convert value, (Final Result)
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center gap-10 items-center bg-cover bg-no-repeat text-black"
      style={{
        backgroundImage: `url('https://vite.dev/logo.svg')`,
      }}
    >
      {/* <figure className='w-md'>
        <img src="https://cdn.pixabay.com/photo/2023/02/22/19/13/gruner-tee-7807229_1280.jpg" alt="" className='rounded-2xl' />
      </figure> */}
      <div>
        <div className="w-full max-w-md mx-auto  border-gray-60 rounded-lg p-7 backdrop-blur-sm bg-black/20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()  // Show result
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapClick}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
