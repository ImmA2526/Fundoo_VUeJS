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
import Note from "../components/Note"
import archived from "../components/Archived"
import AddNote from "../components/Create"

Vue.use(VueRouter);


function guardRoute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("AccessToken")) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  if (isAuthenticated) {
    next();
  } else {
    next("/home");
  }
}

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    beforeEnter: guardRoute
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    beforeEnter: guardRoute
  },
  {
    path: "/forgot",
    name: "forgot",
    component: ForgotPassword,
    beforeEnter: guardRoute
  },
  {
    path: "/reset",
    name: "reset",
    component: ResetPassword,
    beforeEnter: guardRoute
  },
  
  {
    path: "/nav",
    name: "nav",
    component: nav
  },

  {
    path: "/home",
    name: "home",
    component: Home
  },

  {
    path: "/note",
    name: "note",
    component: Note,
    beforeEnter: guardRoute,
    children: [
      {
        path: "/add",
        component: AddNote
      },

      {
        path: "/display",
        component: display
      }
    ]
  },


  {
    path: "/archived",
    name: "archived",
    component: archived,
    beforeEnter: guardRoute
  },

  {
    path: "/color",
    name: "color",
    component: color,
    beforeEnter: guardRoute
  },

  // {
  //   path: "/display",
  //   name: "display",
  //   component: display,
  //   beforeEnter: guardRoute
  // },
  
];

const router = new VueRouter({
  mode: "history",
  routes

});

export default router;
