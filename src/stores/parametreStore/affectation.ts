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
                    //this.getcycle();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },





  },


 
});
