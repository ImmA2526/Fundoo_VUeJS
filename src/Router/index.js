import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../Pages/LoginPage"
import Register from "../Pages/Register"
import ForgotPassword from "../Pages/Forgot"
import ResetPassword from "../Pages/ResetPage"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/",
    name: "register",
    component: Register
  },
  {
    path: "/forgotPassword",
    name: "forgotPassword",
    component: ForgotPassword
  },
  {
    path: "/resetPassword",
    name: "resetPassword",
    component: ResetPassword
  }
];

const router = new VueRouter({
  mode: "history",
  routes

});

export default router;
