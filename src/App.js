
import CategoryPages from "./pages/CategoryPages";
import Home from "./pages/Home";
import About from "./pages/About"
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts"
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Delivery from "./pages/Delivery/Delivery"
import NotFound from "./pages/NotFound/NotFound"
import Menu from "./components/Menu/Menu";
import Announce from "./components/Announce";
import Newsletter from "./components/Newsletter";
import SignIn from "./pages/SignIn";
import ReactDOM from 'react-dom';
import Products from "./components/Products";



function App() {
  return (
    <div className='App'>
      <Router>
        <Announce/>
        <Navbar />
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="category" element={<CategoryPages />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="login" element={<Login />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="productPage" element={<ProductPage />} />
            <Route path="products" element={<Products />} />
            <Route path="card" element={<ProductPage />} />

            
          </Routes>
        </main>
        <Newsletter/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
