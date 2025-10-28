import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/web/inicio.vue";
import Nosotros from "../views/web/nosotros.vue";
import Servicios from "../views/web/servicios.vue";
import Login from "../views/auth/login.vue";
import AppLayout from "../layout/AppLayout.vue";
import Perfil from "../views/admin/perfil/perfil.vue";
import Usuario from "../views/admin/user/usuario.vue";
import SitioLayout from "../layout/SitioLayout.vue";

const routes = [
  {
    path: "/",
    component: SitioLayout,
    children: [
      { path: "/", component: Inicio },
      { path: "/nosotros", component: Nosotros },
      { path: "/servicios", component: Servicios },
      {
        path: "/auth/login",
        component: Login,
      },
    ],
  },

  {
    path: "/admin",
    component: AppLayout,
    children: [
      {
        path: "perfil",
        component: Perfil,
      },
      {
        path: "usuario",
        component: Usuario,
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
