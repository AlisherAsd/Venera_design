import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Approuter from './components/Approuter';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Approuter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
