import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { MainLayout } from "../layout/MainLayout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" index element={<Home />} />
      </Route>
    </Routes>
  );
}
