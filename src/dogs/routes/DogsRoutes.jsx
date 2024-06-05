import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../../ui/components/NavBar";
import { AboutPage, Breeds, ContactPage, HomePage, SearchPage } from "../pages";
import { DogPage } from "../pages/DogPage";

export const DogsRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dog/:dogId" element={<DogPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
