import { defineStore } from "pinia";
import { ref } from "vue";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface districtStructure {
    id: number;
    code: string;
    libelle: string;
}
  
export const structureStore = defineStore({
  id: "auth",
  state: () => ({

    stateStucture: [] as districtStructure[],
  }),
  getters: {
    getterStructure(state){
            return state.stateStucture;
        }
  },
  actions: {
     async getStructure(){
                try {
                    const response = await apiUrl.get("/liste_structure",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateStucture = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterStructure(infor: districtStructure){ //fonction d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/info_budget_store",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateStucture.push(response.data)
                  //  toast.success(`Enregistrement effectuer avec succès`);
                   // this.getInformationBudget();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
        },
  },


 
});
