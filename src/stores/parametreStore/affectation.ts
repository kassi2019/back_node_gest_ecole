import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";

export interface BudgetParams {
    id:number
    utilisateur_id: number;
    code_module: number;
  }
export const Affectation = defineStore("affectation",{

  state: () => ({

       tableauBudget:[] as BudgetParams[],
  }),
  getters: {
   getterAffectation(state){
            return state.tableauBudget;
        }
  },
  actions: {
  async ajoutBudget(budget: BudgetParams) {
            this.tableauBudget.push(budget);
          },
        async SupprimerAffectation(id: number){ //bareme de suppression
                try {
                    await apiUrl.delete(`/supprimerAffectation/${id}`,{
                        headers: authHeader(),
                    });
                    this.tableauBudget = this.tableauBudget.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getAffecter();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },
    async getAffecter(){
                try {
                    const response = await apiUrl.get("/listeAffecter",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.tableauBudget = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterAffectation(infor: BudgetParams){ //cycle d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementAffectation",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                  this.tableauBudget.push(response.data)
                  
                  toast.success(`Enregistrement effectuer avec succès`);
                  this.getAffecter();
                    //this.getcycle();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },

async modifierAffectation(credentials: BudgetParams) {
      try {
        const response = await apiUrl.put(`/modificationAffectation/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.tableauBudget.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.tableauBudget[index] = response.data;
        }
        this.getAffecter();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },



  },


 
});
