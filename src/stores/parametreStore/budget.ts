import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossierbudget {
    id: number;
    economiqueId: number;
    montant: string;
}
  
export const budgetStore = defineStore("budget",{

  state: () => ({

    statebudget: [] as dossierbudget[],
  }),
  getters: {
    getterbudget(state){
            return state.statebudget;
        }
  },
  actions: {
     async getbudget(){
                try {
                    const response = await apiUrl.get("/listebudget",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.statebudget = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterbudget(infor: dossierbudget){ //budget d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementbudget",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.statebudget.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getbudget();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async Supprimerbudget(id: number){ //budget de suppression
                try {
                    await apiUrl.delete(`/supprimerbudget/${id}`,{
                        headers: authHeader(),
                    });
                    this.statebudget = this.statebudget.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getbudget();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifierbudget(credentials: dossierbudget) {
      try {
        const response = await apiUrl.put(`/modificationbudget/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.statebudget.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.statebudget[index] = response.data;
        }
        this.getbudget();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
