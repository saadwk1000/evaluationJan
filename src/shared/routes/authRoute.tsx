import RouteConstant from "./routeConstant";
import Login from "../../pages/auth/login/page";
import Register from "../../pages/auth/register/page";

const AuthRoutes = () => [
  {
    path: RouteConstant.login,
    element: <Login />,
  },
  {
    path: RouteConstant.register,
    element: <Register />,
  },
];

export default AuthRoutes;
