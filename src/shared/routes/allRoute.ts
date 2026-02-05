import RouteConstant from "./routeConstant";
import Login from "../../pages/auth/login/page";
import Register from "../../pages/auth/register/page";
import Home from "../../pages/home/page";

export interface RouteType {
  path: string;
  title: string;
  Component: React.ComponentType;
}

export const publicRoute: RouteType[] = [
  {
    path: RouteConstant.login.path,
    title: RouteConstant.login.title,
    Component: Login,
  },
  {
    path: RouteConstant.register.path,
    title: RouteConstant.register.title,
    Component: Register,
  },
];

export const privateRoute: RouteType[] = [
  {
    path: RouteConstant.home.path,
    title: RouteConstant.home.title,
    Component: Home,
  },
];
