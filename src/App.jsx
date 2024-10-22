import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import ChatApp from "./pages/ChatApp";
import Teachers from "./pages/Teachers";
import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";

const SignUpIn = lazy(() => import("./pages/SignUpIn"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const VerifyOtp = lazy(() => import("./pages/VerifyOtp"));
const ChangePassword = lazy(() => import("./pages/ChangePassword"));
const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses"));
const Chat = lazy(() => import("./pages/Chat"));

const App = React.memo(() => (
  <Router>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<SignUpIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/change-password" element={<ChangePassword />} />

        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />

        <Route
          path="/chat"
          element={
            <Layout>
              <Chat />
            </Layout>
          }
        />

        <Route
          path="/chatPage"
          element={
            <Layout>
              <ChatApp />
            </Layout>
          }
        />

        <Route
          path="/courses"
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />

        <Route
          path="/teachers"
          element={
            <Layout>
              <Teachers />
            </Layout>
          }
        />

        <Route
          path="/blogs"
          element={
            <Layout>
              <BlogPage />
            </Layout>
          }
        />

        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  </Router>
));

export default App;
