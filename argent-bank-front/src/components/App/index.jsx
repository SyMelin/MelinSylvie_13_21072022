import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import { accountData } from '../../data';
import Login from '../../pages/Login';
import Footer from '../Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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