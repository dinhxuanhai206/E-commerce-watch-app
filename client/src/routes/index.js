import Home from "../page/Home/Home";
import Blog from "../page/Blog/Blog";
import Contact from "../page/Contact/Contact";
import config from "../config";
import Cart from "../page/Cart/Cart";
import ProductList from "../page/ProductList/ProductList";
import Introduce from "../page/Introduce/Introduce";
import Product from "../page/Product/Product";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Success from "../page/Success/Success";
import Profile from "../page/Profile/Profile";
import MyAccount from "../page/Profile/MyAccount/MyAccount";
import Purchase from "../page/Profile/Purchase/Purchase";
const PublicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.productlist, component: ProductList },
  { path: config.routes.introduce, component: Introduce },
  { path: config.routes.productid, component: Product },
  { path: config.routes.blog, component: Blog },
  { path: config.routes.contact, component: Contact },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.success, component: Success },
];

const PrivateRoutes = [
  { path: config.routes.login, component: Login },
  { path: config.routes.register, component: Register },
  {
    path: config.routes.profile,
    component: Profile,
    children: [
      { path: "account", component: MyAccount },
      { path: "purchase", component: Purchase },
    ],
  },
];
export { PublicRoutes, PrivateRoutes };
