import { defineStore } from "pinia";
import { ref } from "vue";
import { authHeader } from "@/config/authHeader";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import apiUrl from "@/config/axios";

interface User {
  email: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
interface dossierRole {
    id: number;
    code: string;
    libelle: string;
}
 interface dossierUtilisateur {
    id: number;
    name: string;
    email: string;
    password: string;
    role_id: string;
} 
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
     user: null as User | null,
    isAuthenticated: false,
    token: null as string | null,
    error_message: "" as string,

    ListeDistricts: [] as dossierRole[],
    stateModules: [] as dossierRole[],
    stateRole: [] as dossierRole[],
      
  }),
  getters: {
   errorMessage(): string {
      return this.error_message;
    },
    listeDistricts(state){
            return state.ListeDistricts;
    },
    getterModule(state){
            return state.stateModules;
    },
    gettersRole(state){
            return state.stateRole;
        }
  },
  actions: {

    // actions gestion des role
    
     async getRole(){
                try {
                    const response = await apiUrl.get("/liste_Role",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateRole = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
    },
    async ajouterRole(infor: dossierRole){ //fonction d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementRole",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateRole.push(response.data)
                     toast.success(`Enregistrement effectuer avec succès`);
                     this.getRole();
                }
                catch (error) {
                    console.log('erreur survenue', error);
                    toast.error(`Erreur lors de l'ajout : ${error}`);
                }
        },

 async SupprimerRole(id: number){ //fonction de suppression
                try {
                    await apiUrl.delete(`/supprimerRole/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateRole = this.stateRole.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getRole();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifierRole(credentials: dossierRole) {
      try {
        const response = await apiUrl.put(`/modification_Role/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateRole.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateRole[index] = response.data;
        }
        this.getRole();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour de l'Sous budget");
      }
    },
    //// fin gestion des role
 
    // debut gestion des utilisateur
 async ajouterUtilisateur(infor: dossierUtilisateur){ //fonction d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/sign-up",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateRole.push(response.data)
                     toast.success(`Enregistrement effectuer avec succès`);
                     this.getRole();
                }
                catch (error) {
                    console.log('erreur survenue', error);
                    toast.error(`Erreur lors de l'ajout : ${error}`);
                }
        },
 // fin gestion utilisateur
    async getModule(){
                try {
                    const response = await apiUrl.get("/liste_Module",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateModules = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
    },
   
     async getStructure(){
                try {
                    const response = await apiUrl.get("/liste_structure",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.ListeDistricts = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
    async login(credentials: LoginCredentials) {
      
       try {
         const response = await apiUrl.post("/login", credentials);

        const { token } = response.data;
        //console.log(response.data);
         this.isAuthenticated = true;
      //   //this.user = user;
         this.token = token;
        //  this.username = username;
        //  this.userid = userid;
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.token),
         );
          localStorage.setItem(
          "username",
          JSON.stringify(response.data.nameuser),
         );
         localStorage.setItem(
          "userid",
          JSON.stringify(response.data.userid),
      );
       // localStorage.setItem("user", JSON.stringify(response.data.user));
       } catch (error) {
      //  console.error("Login failed:", error);
       this.error_message = "email et password Invalid !";
     //toast.error("email et Password Invalid !", {
      //   //   position: "top-right",
      //   //   //icon: "times",
      //   //   autoClose: 8000,
      //   // });
      //   return false;
       }
    },


    //  async logout() {
    //   try {
    //     await apiUrl.post("/logout");
    //     this.isAuthenticated = false;
    //     this.user = null;
    //     this.token = null;
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("user");
    //   } catch (error) {
    //     console.error("Logout failed:", error);
    //   }
    // },
  },


 
});