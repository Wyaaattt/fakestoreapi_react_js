import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import CartPage from "./components/CartPage";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
