import './App.css';
import Navebar from './components/NavBer/Navebar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Shop from './Pages/Shonp';
import ShopCat from './Pages/ShopCat';
import Product from './Pages/Product';
import Card from './Pages/Card';
import Login from './Pages/LoginSinup';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens'  element={<ShopCat category="men" banner={men_banner} />} />
          <Route path='/womens'  element={<ShopCat category="women" banner={women_banner}/>} />
          <Route path='/kids'  element={<ShopCat category="kid" banner={kids_banner}/>} />
          <Route path='/product' element={<Product/>} >
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/card' element={<Card />} />
          <Route path='/login' element={<Login />} />
          <Route path='/play'/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
