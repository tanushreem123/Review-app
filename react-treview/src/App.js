import logo from './logo.svg'
import './App.css'
import Review from './Review'
import { FaGithubSquare } from 'react-icons/fa'

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App
