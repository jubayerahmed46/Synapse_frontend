import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./features/auths/Login";
import Register from "./features/auths/Register";
import Profile from "./features/profile/Profile";
import PrivetRoute from "./routes/PrivetRoute";
import UnauthorizedAccess from "./routes/UnauthorizedAccess";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route element={<PrivetRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route element={<UnauthorizedAccess />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
