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
import SingleMeal from './Page/Details/SingleMeal/SingleMeal';
import SingleCategory from './Page/Details/SingleCategory/SingleCategory';
import SingleCountry from './Page/Details/SingleCountry/SingleCountry';
import SingleName from './Page/Details/SingleName/SingleName';
import SingleIngredients from './Page/Details/SingleIngredients/SingleIngredients';
import AOS from 'aos';
AOS.init();

export const ContextProvider = createContext()

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
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
        <Route path="singleMeal/:id" element={<SingleMeal />} />
        <Route path="singleCategory/:category" element={<SingleCategory />} />
        <Route path="singleCountry/:country" element={<SingleCountry />} />
        <Route path="singleName/:name" element={<SingleName />} />
        <Route path="singleIngredients/:ingredient" element={<SingleIngredients />} />
        <Route path="paypal" element={<PayPal />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </ContextProvider.Provider>
  );
}

export default App;
