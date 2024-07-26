import './App.css'
import TipCalculator from './TipCalculator'

function App() {

  return (
    <>
      <header>
        <h1>Tip Calculator</h1>
      </header>
      <p>Given the bill amount and the tip percentage this APP will return the total amount including tip.</p>
      <p>It will also allow you to devide the total bill as needed.</p>
      <main>
        <TipCalculator />
      </main>

    </>
  )
}

export default App
