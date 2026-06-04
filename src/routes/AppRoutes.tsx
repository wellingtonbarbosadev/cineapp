import { Route, Routes } from "react-router";
import { Home } from "../components/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
}
