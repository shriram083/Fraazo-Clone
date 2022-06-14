import { Container } from "@chakra-ui/react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { SimpleSidebar } from "./pages/MyAccount";
import MyOrders from "./pages/MyOrders";
import MyCredits from "./pages/MyCredits";
import Invite from "./pages/Invite";
import Support from "./pages/Support";
import Checkout from "./pages/Checkout";

function App() {


  return (
    <Container className="App" maxW={'none'} >
      <Navbar />
      <Container style={{ paddingTop: "60px", border: "1px solid blue" }} maxW="container.xl" boxSizing="border-box">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
          <Route path="/myaccount/*" element={<SimpleSidebar />} >
            <Route path="myorders" element={<MyOrders/>} />
            <Route path="mycredits" element={<MyCredits/>} />
            <Route path="invite" element={<Invite/>} />
            <Route path="support" element={<Support/>} />
          </Route>
          
          <Route path="/Checkout" element={<Checkout />} />         
        </Routes>
      </Container>
      
    </Container>
  );
}

export default App;
