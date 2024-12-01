import { BrowserRouter } from "react-router-dom"
import PublicRoutes from "./public/PublicRoutes"
const AppRouter = () => {
  return(
    <BrowserRouter>
    <PublicRoutes />
    </BrowserRouter>
  )
}

export default AppRouter