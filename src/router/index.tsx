import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "../pages/users";

const WebRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UsersPage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default WebRouter;
