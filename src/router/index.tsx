import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "../pages/users";
import Register from "../pages/register";

const WebRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UsersPage />} path="/" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRouter;
