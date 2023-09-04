import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// ⬇️ reference of page
// import Login from "pages/login/Login";
import { NotFound } from "pages/notFound/notFound";
import MainRouter from "./main.router";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/mes/*" element={<MainRouter />} />
        {/* <Route path="/" element={<Line />} /> */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/*" element={<Navigate replace to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
