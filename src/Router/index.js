import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../Pages/LoginPage"
import Register from "../Pages/Register"
import ForgotPassword from "../Pages/Forgot"
import ResetPassword from "../Pages/ResetPage"
import Home from "../Pages/Home"
import Color from "../Components/Color"
import Nav from "../Components/NavBar"
import Display from "../Components/Display"
import Note from "../Components/Note"
import Archived from "../Components/ArchiveIcon"
import AddNote from "../Components/Create"
import ArchiveNote from "../Components/ArchiveNote"

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
    name: "ArchivedNote",
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
