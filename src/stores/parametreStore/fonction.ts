import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossierFonction {
    id: number;
    code: string;
    libelle: string;
}
  
export const fonctionStore = defineStore("fonction",{

  state: () => ({

    stateFonction: [] as dossierFonction[],
  }),
  getters: {
    getterFonction(state){
            return state.stateFonction;
        }
  },
  actions: {
     async getFonction(){
                try {
                    const response = await apiUrl.get("/listeFonction",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateFonction = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterFonction(infor: dossierFonction){ //fonction d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementFonction",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateFonction.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getFonction();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async SupprimerFonction(id: number){ //fonction de suppression
                try {
                    await apiUrl.delete(`/supprimerFonction/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateFonction = this.stateFonction.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getFonction();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifierFonction(credentials: dossierFonction) {
      try {
        const response = await apiUrl.put(`/modificationFonction/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateFonction.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateFonction[index] = response.data;
        }
        this.getFonction();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour de l'Sous budget");
      }
    },
  },


 
});
