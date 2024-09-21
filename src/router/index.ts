import { createRouter, createWebHistory } from "vue-router";
import AuthRoutes from "./authRoutes";
// import AppRoutes from "./app/appRoutes"

// Combine main routes and auth routes
const routes = [
  ...AuthRoutes, // Spread the auth routes
 // ...AppRoutes, // Spread the auth routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/connexion"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");
//  console.log(loggedIn);
  if (authRequired && !loggedIn) {
    next("/connexion");
    //next({ name: 'Login' })
  } else {
    if (to.path === "/connexion" && loggedIn) {
      next({ name: "presentationModule" });
      return;
    }

    next();
  }
});

export default router;
