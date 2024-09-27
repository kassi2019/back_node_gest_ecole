import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossiereconomique {
    id: number;
    code: string;
    libelle: string;
}
  
export const economiqueStore = defineStore("economique",{

  state: () => ({

    stateeconomique: [] as dossiereconomique[],
  }),
  getters: {
    gettereconomique(state){
            return state.stateeconomique;
        }
  },
  actions: {
     async geteconomique(){
                try {
                    const response = await apiUrl.get("/listeeconomique",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateeconomique = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajoutereconomique(infor: dossiereconomique){ //economique d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementeconomique",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateeconomique.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.geteconomique();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async Supprimereconomique(id: number){ //economique de suppression
                try {
                    await apiUrl.delete(`/supprimereconomique/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateeconomique = this.stateeconomique.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.geteconomique();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifiereconomique(credentials: dossiereconomique) {
      try {
        const response = await apiUrl.put(`/modificationeconomique/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateeconomique.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateeconomique[index] = response.data;
        }
        this.geteconomique();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
