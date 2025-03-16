import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./comp/Home.jsx";
import Navbar from "./comp/Navbarpu.jsx";
import PrivateNavbar from "./comp/PrivateNavbar.jsx";
import Login from "./comp/Login.jsx";
import Register from "./comp/Register.jsx";
import { useSelector } from "react-redux";
import AddCategory from "./comp/AddCategory.jsx";
import CategoriesList from "./comp/CategoriesList.jsx";
import UpdateCategory from "./comp/UpdateCategory.jsx";
import TransactionForm from "./comp/TransactionForm.jsx"
import FilterSection from "./comp/FilterSection.jsx";
import UserProfile from "./comp/UserProfile.jsx";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      {user ? <PrivateNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/categories" element={<CategoriesList />}></Route>
        <Route path="/add-category" element={<AddCategory />}></Route>
        <Route path="/updatecategory/:id" element={<UpdateCategory />}></Route>
        <Route path="/add-transaction" element={<TransactionForm />}></Route>
        <Route path="/dashboard" element={<FilterSection />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
     
     </Routes>
    </Router>
  );
}

export default App;
