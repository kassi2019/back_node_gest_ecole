import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossierAnneeScolaire {
    id: number;
    annee: string;
    statut: string;
}
  
export const anneeScolaireStore = defineStore("anneeSoclaire",{

  state: () => ({

    stateAnneeScolaire: [] as dossierAnneeScolaire[],
  }),
  getters: {
    getterAnneeScolaire(state){
            return state.stateAnneeScolaire;
        }
  },
  actions: {
     async getAnneeScolaire(){
                try {
                    const response = await apiUrl.get("/listeAnneeScolaire",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateAnneeScolaire = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterAnneeScolaire(infor: dossierAnneeScolaire){ //AnneeScolaire d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementAnneeScolaire",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateAnneeScolaire.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getAnneeScolaire();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async SupprimerAnneeScolaire(id: number){ //AnneeScolaire de suppression
                try {
                    await apiUrl.delete(`/supprimerAnneeScolaire/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateAnneeScolaire = this.stateAnneeScolaire.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getAnneeScolaire();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifierAnneeScolaire(credentials: dossierAnneeScolaire) {
      try {
        const response = await apiUrl.put(`/modificationAnneeScolaire/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateAnneeScolaire.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateAnneeScolaire[index] = response.data;
        }
        this.getAnneeScolaire();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour de l'Sous budget");
      }
    },
 
  async BasculeAnneeScolaire(credentials: dossierAnneeScolaire) {
      try {
        const response = await apiUrl.put(`/basculeAnnee/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateAnneeScolaire.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateAnneeScolaire[index] = response.data;
        }
        this.getAnneeScolaire();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour de l'Sous budget");
      }
    },


  },


 
});
