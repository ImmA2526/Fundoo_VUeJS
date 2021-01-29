import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../Pages/LoginPage"
import Register from "../Pages/Register"
import ForgotPassword from "../Pages/Forgot"
import ResetPassword from "../Pages/ResetPage"
import Home from "../Pages/Home"
import color from "../components/Color"
import nav from "../components/NavBar"
import display from "../components/Display"
import Create from "../components/Create"

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },

  {
    path: "/create",
    name: "create",
    component: Create,

      meta: {
      Authorization: true
    },

  },



  {
    path: "/display",
    name: "display",
    component: display
  },

  {
    path: "/nav",
    name: "nav",
    component: nav
  },

  {
    path: "/color",
    name: "color",
    component: color
  },

  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/forgot",
    name: "forgot",
    component: ForgotPassword
  },
  {
    path: "/reset",
    name: "reset",
    component: ResetPassword
  }
];

const router = new VueRouter({
  mode: "history",
  routes

});

export default router;
