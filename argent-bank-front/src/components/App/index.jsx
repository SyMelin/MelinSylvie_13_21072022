import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from '../Header';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import { accountData } from '../../data';
import Login from '../../pages/Login';
import Footer from '../Footer';

function App() {
  const [userIsConnected, setUserIsConnected] = useState(false)

  return (
    <div className="App">
      <Router>
        <Header userIsConnected={userIsConnected} setUserIsConnected={setUserIsConnected}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login userIsConnected={userIsConnected} setUserIsConnected={setUserIsConnected}/>} />
          <Route path="/profile" element={<Profile accountData={accountData} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

/*
<Profile accountData={accountData} />
*/