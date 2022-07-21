import Header from '../Header';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import { accountData } from '../../data';
import Login from '../../pages/Login';
import Footer from '../Footer';
import '../../styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile accountData={accountData} />
      <Footer />
    </div>
  );
}

export default App;
