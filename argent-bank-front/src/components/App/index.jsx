import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header'
import Home from '../../pages/Home'
import Profile from '../../pages/Profile'
import { accountData } from '../../data'
import Login from '../../pages/Login'
import Footer from '../Footer'
import './App.css'


/**
 * React component: App
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/MelinSylvie_13_21072022' : ''

  return (
    <div className="App">
      <Router basename={basename}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile accountData={accountData} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App