import login from "@/views/pageConnexion/connexion.vue";
import interfaceAccueil from "@/views/pageConnexion/interfaceAccueil.vue";
import Logout from "@/views/pageConnexion/Logout.vue";
  import presentationModule from "@/views/pageConnexion/presentationModule.vue";
// import Homepage from "@/views/authPages/HomepageView.vue";
// import defaultInterface from "@/views/interfaces/defaultInterface.vue";
// import DefaultDashboard from "@/views/TableauBord/DefaultDashboard.vue";
import structure from "@/views/pageParametrage/structure.vue";
 import role from '../views/pageConnexion/role.vue'
import utilisateur from '../views/pageConnexion/utilisateur.vue'
import fonction from "@/views/pageParametrage/fonction.vue";
import anneeScolaire from "@/views/pageParametrage/anneeScolaire.vue";
import etablissement from "@/views/pageParametrage/etablissement.vue";
import bareme from "@/views/pageParametrage/bareme.vue";
import cycle from "@/views/pageParametrage/cycle.vue";
import classe from "@/views/pageParametrage/classe.vue";
import typeMatiere from "@/views/pageParametrage/typeMatiere.vue";
import matiere from "@/views/pageParametrage/matiere.vue";
import emploi from "@/views/pageParametrage/emploi.vue";
import economique from "@/views/pageParametrage/economique.vue";
import associeStructure from "@/views/pageParametrage/associeStructure.vue";
const AuthRoutes = [
  {
    path: "/associeStructure",
    name: "associeStructure",
    component: associeStructure,
  },
  {
    path: "/economique",
    name: "economique",
    component: economique,
  },
   {
    path: "/emploi",
    name: "emploi",
    component: emploi,
  },
   {
    path: "/matiere",
    name: "matiere",
    component: matiere,
  },
  {
    path: "/typeMatiere",
    name: "typeMatiere",
    component: typeMatiere,
  },
  {
    path: "/classe",
    name: "classe",
    component: classe,
  },
   {
    path: "/cycle",
    name: "cycle",
    component: cycle,
  },
  {
    path: "/bareme",
    name: "bareme",
    component: bareme,
  },
   {
    path: "/etablissement",
    name: "etablissement",
    component: etablissement,
  },
  {
    path: "/anneeScolaire",
    name: "anneeScolaire",
    component: anneeScolaire,
  },
   {
    path: "/fonction",
    name: "fonction",
    component: fonction,
  },
  {
    path: "/utilisateur",
    name: "utilisateur",
    component: utilisateur,
  },
  {
    path: "/role",
    name: "role",
    component: role,
  },
  {
    path: "/structure",
    name: "structure",
    component: structure,
  },
  
  {
    path: "/presentationModule",
    name: "presentationModule",
    meta: { layout: "no-sidebar", requiresAuth: true },
    
    component: presentationModule,
  },
  {
    path: "/connexion",
    name: "login",
    meta: { layout: "no-sidebar", requiresAuth: true },
    
    component: login,
  },
  {
    path: "/interfaceAccueil",
    name: "interfaceAccueil",
meta: { requiresAuth: true },
    component: interfaceAccueil,

  },
  
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
    meta: { requiresAuth: true },
  },
//   {
//     path: "/Homepage",
//     name: "Homepage",
//     component: Homepage,
//   },

//   {
//     path: "/DefaultDashboard",
//     name: "DefaultDashboard",
//     component: DefaultDashboard,
//     meta: { requiresAuth: true },
//   },

//   {
//     path: "/defaultInterface",
//     name: "defaultInterface",
//     component: defaultInterface,
//     meta: { layout: "no-sidebar", requiresAuth: true },
//   },



];


export default AuthRoutes;


