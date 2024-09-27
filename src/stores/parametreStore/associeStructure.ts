import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossierassocieStructure {
    id: number;
    montant: string;
    libelle: string;
}
  
export const associeStructureStore = defineStore("associeStructure",{

  state: () => ({

    stateassocieStructure: [] as dossierassocieStructure[],
  }),
  getters: {
    getterassocieStructure(state){
            return state.stateassocieStructure;
        }
  },
  actions: {
     async getassocieStructure(){
                try {
                    const response = await apiUrl.get("/listeAssocieStructure",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateassocieStructure = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterassocieStructure(infor: dossierassocieStructure){ //associeStructure d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementAssoieStructure",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateassocieStructure.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getassocieStructure();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async SupprimerassocieStructure(id: number){ //associeStructure de suppression
                try {
                    await apiUrl.delete(`/supprimerAssoieStructure/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateassocieStructure = this.stateassocieStructure.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getassocieStructure();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifierassocieStructure(credentials: dossierassocieStructure) {
      try {
        const response = await apiUrl.put(`/modificationAssoieStructure/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateassocieStructure.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateassocieStructure[index] = response.data;
        }
        this.getassocieStructure();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
