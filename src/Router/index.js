import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../Pages/LoginPage"
import Register from "../Pages/Register"
import ForgotPassword from "../Pages/Forgot"
import ResetPassword from "../Pages/ResetPage"
import Home from "../Pages/Home"
import Color from "../components/Color"
import Nav from "../components/NavBar"
import Display from "../components/Display"
import Note from "../components/Note"
import Archived from "../components/ArchiveIcon"
import AddNote from "../components/Create"
import ArchiveNote from "../components/ArchiveNote"

Vue.use(VueRouter);


// function guardRoute(to, from, next) {
//   var isAuthenticated = false;
//   if (localStorage.getItem("AccessToken")) {
//     isAuthenticated = true;
//   } else {
//     isAuthenticated = false;
//   }
//   if (isAuthenticated) {
//     next();
//   } else {
//     next("/");
//   }
// }

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    // beforeEnter: guardRoute
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    // beforeEnter: guardRoute
  },
  {
    path: "/forgot",
    name: "forgot",
    component: ForgotPassword,
    // beforeEnter: guardRoute
  },
  {
    path: "/reset",
    name: "reset",
    component: ResetPassword,
    // beforeEnter: guardRoute
  },
  
  {
    path: "/nav",
    name: "Nav",
    component: Nav
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
    // beforeEnter: guardRoute,
    // children: [
      
  },
      {
        path: "/add",
        component: AddNote
      },

    //   {
    //     path: "/display",
    //     component: Display
    //   }
    // ]
  // },


  {
    path: "/archive",
    name: "Archived",
    component: Archived,
    // beforeEnter: guardRoute
  },

  {
    path: "/archiveNote",
    name: "Archived",
    component: ArchiveNote,
    // beforeEnter: guardRoute
  },

  {
    path: "/color",
    name: "Color",
    component: Color,
    // beforeEnter: guardRoute
  },

  {
    path: "/Display",
    name: "Display",
    component: Display,
    // beforeEnter: guardRoute
  },
  
];

const router = new VueRouter({
  mode: "history",
  routes

});

export default router;
