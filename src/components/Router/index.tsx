import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import AuthHoc from "../HOC/AuthHoc";

const Router = () => {
  const AuthHomePage = AuthHoc(HomePage);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<AuthHomePage />} />
      <Route path="/todo/:id" element={<AuthHomePage />} />
    </Routes>
  );
};

export default Router;
