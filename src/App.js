import { Container } from "@chakra-ui/react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductLayout from "./components/ProductLayout";

function App() {


  return (
    <Container className="App" maxW={'none'} >
      <Navbar />
      <Container style={{ paddingTop: "60px", border: "1px solid blue" }} maxW="1480px" boxSizing="border-box">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path={`/Products/:id`} element={<ProductDetails />} />
          <Route path="/shubham" element={<ProductLayout />} />
        </Routes>
      </Container>
    </Container>
  );
}

export default App;
