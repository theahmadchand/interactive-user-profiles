import { Route, Routes } from "react-router-dom";
import { Users, UserDetail } from "./pages";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="user-detail" element={<UserDetail />} />
    </Routes>
  );
}
