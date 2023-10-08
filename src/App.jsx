import React, { useContext } from "react";
import "./sass/style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./assets/bootstrap.min.css";
import Movies from "./pages/Movies";
import Dashboard from "./pages/admin/Dashboard";
import AddMovie from "./pages/admin/update/AddMovie";
import EditMovie from "./pages/admin/update/EditMovie";
import DetailsPage from "./pages/DetailsPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import Login from "./pages/Login";
import { ModeContext, ModeProvider } from "./context/ModeContext";
import { LangProvider } from "./context/LangContext";

const Main = () => {
  const [mode] = useContext(ModeContext);
  return (
    <>
      <div className={mode}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="/admin/add" element={<AddMovie />}></Route>
          <Route path="/admin/edit" element={<EditMovie />}></Route>
          <Route path="/admin/edit/:id" element={<EditMovie />}></Route>
          <Route path="/details/:id" element={<DetailsPage />}></Route>
          <Route path="/comingsoon" element={<ComingSoonPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
    <LangProvider>

    <ModeProvider>
        <Main />
      </ModeProvider>
    </LangProvider>
    </BrowserRouter>
  );
};

export default App;
