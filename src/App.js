import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import NotMatch from './Page/NotMatch/NotMatch';
import API from './Page/API/API';
import PayPal from './Page/PayPal/PayPal';
import Categories from './Page/Categories/Categories';
import Countries from './Page/Countries/Countries';
import { createContext, useState } from 'react';
import Ingredients from './Page/Ingredients/Ingredients';
import SearchMeals from './Page/Details/SearchMeals/SearchMeals';

export const ContextProvider = createContext()

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <ContextProvider.Provider value={[isDarkTheme, setIsDarkTheme]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="countries" element={<Countries />} />
        <Route path="ingredients" element={<Ingredients />} />
        <Route path="api" element={<API />} />
        <Route path="searchMeals/:search" element={<SearchMeals />} />
        <Route path="paypal" element={<PayPal />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </ContextProvider.Provider>
  );
}

export default App;
