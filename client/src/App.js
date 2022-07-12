import { Container } from "@chakra-ui/react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, useParams, useLocation } from "react-router-dom";
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
import Login from "./pages/Login";
import Footer from "./components/Footer";
import RequiredAuth from "./hoc/RequiredAuth";
import OtpPage from "./components/OrderStatus/OtpPage";
import OrderSuccessfull from "./components/OrderStatus/OrderSuccessfull";
import OrderFail from "./components/OrderStatus/OrderFail";
function App() {
  return (
    <Container className="App" maxW={"none"} p={0}>
      <nav>
        <Navbar />
      </nav>

      <Container
        style={{ padding: "20px 0 0 0" }}
        maxW="container.xl"
        mt={"88px"}
        boxSizing="border-box"
        // display={"none"}
      >
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path={`/products/:id`} element={<ProductDetails />} />
          <Route path="/myaccount/*" element={<SimpleSidebar />}>
            <Route path="myorders" element={<MyOrders />} />
            <Route path="mycredits" element={<MyCredits />} />
            <Route path="invite" element={<Invite />} />
            <Route path="support" element={<Support />} />
          </Route>
          <Route path="/products/mangoes/:subcategory" element={<Products />} />
          <Route
            path="/products/vegetables/:subcategory"
            element={<Products />}
          />
          <Route path="/products/fruits/:subcategory" element={<Products />} />
          <Route path="/products/herbs/:subcategory" element={<Products />} />
          <Route
            path="/products/dryfruits/:subcategory"
            element={<Products />}
          />
          <Route
            path="/products/kitchenstapels/:subcategory"
            element={<Products />}
          />
          <Route
            path="/products/category/:subcategory"
            element={<Products />}
          />

          <Route path="/login" element={<Login />} />

          <Route
            path="/checkout"
            element={
              <RequiredAuth>
                <Checkout />
              </RequiredAuth>
            }
          />
          <Route path="/checkout/otp" element={<OtpPage />} />
          <Route
            path="/checkout/payment-successful"
            element={<OrderSuccessfull />}
          />
          <Route path="/checkout/payment-failed" element={<OrderFail />} />
        </Routes>
      </Container>

      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default App;
