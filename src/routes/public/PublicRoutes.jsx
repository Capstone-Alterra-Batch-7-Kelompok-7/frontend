import { Route, Routes } from "react-router-dom"
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
}
export default PublicRoutes