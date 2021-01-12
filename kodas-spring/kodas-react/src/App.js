import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";

const App = () => {
  document.title = "SalysIrSventes";
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/cart" component={Cart} />
          <Route path="/details/product/:id" component={Details} />
          <Route path="/admin/add-product" component={CreateProduct} />
          <Route path="/admin/update-product/:id" component={UpdateProduct} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
};

export default App;
