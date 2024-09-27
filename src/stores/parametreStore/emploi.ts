import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossieremploi {
    id: number;
    code: string;
    libelle: string;
}
  
export const emploiStore = defineStore("emploi",{

  state: () => ({

    stateemploi: [] as dossieremploi[],
  }),
  getters: {
    getteremploi(state){
            return state.stateemploi;
        }
  },
  actions: {
     async getemploi(){
                try {
                    const response = await apiUrl.get("/listeemploi",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateemploi = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouteremploi(infor: dossieremploi){ //emploi d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementemploi",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateemploi.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getemploi();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async Supprimeremploi(id: number){ //emploi de suppression
                try {
                    await apiUrl.delete(`/supprimeremploi/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateemploi = this.stateemploi.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getemploi();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifieremploi(credentials: dossieremploi) {
      try {
        const response = await apiUrl.put(`/modificationemploi/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateemploi.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateemploi[index] = response.data;
        }
        this.getemploi();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
