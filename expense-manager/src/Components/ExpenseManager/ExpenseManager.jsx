import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Header/Header";
import { Welcome } from "../Welcome/Welcome";
import { Expenses } from "../Expenses/Expenses";
import { Dashboard } from "../Dashboard/Dashboard";
import { Profile } from "../Profile/Profile";
import { Login } from "../Login/Login";
import { Logout } from "../Logout/Logout";
import { Error } from "../Error/Error";

export function ExpenseManger() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/vignesh" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
