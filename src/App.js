import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import NotMatch from './Page/NotMatch/NotMatch';
import API from './Page/API/API';
import PayPal from './Page/PayPal/PayPal';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="api" element={<API />} />
      <Route path="paypal" element={<PayPal />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
