import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import NotMatch from './Page/NotMatch/NotMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
