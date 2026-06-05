import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { MainLayout } from "../layout/MainLayout";
import { MovieInfo } from "../pages/MovieInfo";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
