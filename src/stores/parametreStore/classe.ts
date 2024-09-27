import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossierclasse {
    id: number;
    cycleId: number;
    libelle: string;
    code: string;
}
  
export const classeStore = defineStore("classe",{

  state: () => ({

    stateclasse: [] as dossierclasse[],
  }),
  getters: {
    getterclasse(state){
            return state.stateclasse;
        }
  },
  actions: {
     async getclasse(){
                try {
                    const response = await apiUrl.get("/listeclasse",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateclasse = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterclasse(infor: dossierclasse){ //classe d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementclasse",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateclasse.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getclasse();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async Supprimerclasse(id: number){ //classe de suppression
                try {
                    await apiUrl.delete(`/supprimerclasse/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateclasse = this.stateclasse.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getclasse();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifierclasse(credentials: dossierclasse) {
      try {
        const response = await apiUrl.put(`/modificationclasse/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateclasse.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateclasse[index] = response.data;
        }
        this.getclasse();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
