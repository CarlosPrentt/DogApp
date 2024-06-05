import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DogsRoutes } from "../dogs/routes/DogsRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/*' element={<DogsRoutes />} />
      </Routes>
    </>
  );
};
