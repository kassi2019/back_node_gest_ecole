import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossiermatiere {
    id: number;
    typematiereId: number;
    libelle: string;
    code: string;
}
  
export const matiereStore = defineStore("matiere",{

  state: () => ({

    statematiere: [] as dossiermatiere[],
  }),
  getters: {
    gettermatiere(state){
            return state.statematiere;
        }
  },
  actions: {
     async getmatiere(){
                try {
                    const response = await apiUrl.get("/listematiere",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.statematiere = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajoutermatiere(infor: dossiermatiere){ //matiere d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementmatiere",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.statematiere.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getmatiere();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async Supprimermatiere(id: number){ //matiere de suppression
                try {
                    await apiUrl.delete(`/supprimermatiere/${id}`,{
                        headers: authHeader(),
                    });
                    this.statematiere = this.statematiere.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getmatiere();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifiermatiere(credentials: dossiermatiere) {
      try {
        const response = await apiUrl.put(`/modificationmatiere/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.statematiere.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.statematiere[index] = response.data;
        }
        this.getmatiere();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
