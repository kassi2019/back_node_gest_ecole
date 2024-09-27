import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossierTypeMatiere {
    id: number;
    libelle: string;
}
  
export const TypeMatiereStore = defineStore("TypeMatiere",{

  state: () => ({

    stateTypeMatiere: [] as dossierTypeMatiere[],
  }),
  getters: {
    getterTypeMatiere(state){
            return state.stateTypeMatiere;
        }
  },
  actions: {
     async getTypeMatiere(){
                try {
                    const response = await apiUrl.get("/listetypeMatiere",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateTypeMatiere = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterTypeMatiere(infor: dossierTypeMatiere){ //TypeMatiere d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementtypeMatiere",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateTypeMatiere.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getTypeMatiere();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async SupprimerTypeMatiere(id: number){ //TypeMatiere de suppression
                try {
                    await apiUrl.delete(`/supprimertypeMatiere/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateTypeMatiere = this.stateTypeMatiere.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getTypeMatiere();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifierTypeMatiere(credentials: dossierTypeMatiere) {
      try {
        const response = await apiUrl.put(`/modificationtypeMatiere/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateTypeMatiere.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateTypeMatiere[index] = response.data;
        }
        this.getTypeMatiere();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
