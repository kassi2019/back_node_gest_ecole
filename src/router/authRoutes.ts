import login from "@/views/pageConnexion/connexion.vue";
import interfaceAccueil from "@/views/pageConnexion/interfaceAccueil.vue";
import Logout from "@/views/pageConnexion/Logout.vue";
  import presentationModule from "@/views/pageConnexion/presentationModule.vue";
// import Homepage from "@/views/authPages/HomepageView.vue";
// import defaultInterface from "@/views/interfaces/defaultInterface.vue";
// import DefaultDashboard from "@/views/TableauBord/DefaultDashboard.vue";
import structure from "@/views/mesPages/structure.vue";
 import role from '../views/pageConnexion/role.vue'
import utilisateur from '../views/pageConnexion/utilisateur.vue'
import fonction from "@/views/mesPages/fonction.vue";
import anneeScolaire from "@/views/mesPages/anneeScolaire.vue";
import etablissement from "@/views/mesPages/etablissement.vue";
import bareme from "@/views/mesPages/bareme.vue";
import cycle from "@/views/mesPages/cycle.vue";
import classe from "@/views/mesPages/classe.vue";
import typeMatiere from "@/views/mesPages/typeMatiere.vue";
import matiere from "@/views/mesPages/matiere.vue";
import emploi from "@/views/mesPages/emploi.vue";
import economique from "@/views/mesPages/economique.vue";
import associeStructure from "@/views/mesPages/associeStructure.vue";
import budget from "@/views/mesPages/budget.vue";
import Affectation from "@/views/mesPages/affectation.vue";
import SousClasse from "@/views/mesPages/sousClasse.vue";
import affectationClasse from "@/views/mesPages/affectationClasse.vue";
import inscriprion from "@/views/mesPages/inscriprion.vue";

const AuthRoutes = [
  {
    path: "/inscriprion",
    name: "inscriprion",
    component: inscriprion,
  },
   {
    path: "/affectationClasse",
    name: "affectationClasse",
    component: affectationClasse,
  },
   {
    path: "/SousClasse",
    name: "SousClasse",
    component: SousClasse,
  },
  {
    path: "/Affectation",
    name: "Affectation",
    component: Affectation,
  },
   {
    path: "/budget",
    name: "budget",
    component: budget,
  },
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


