import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossieretablissement {
  id: number;
  code: string;
    libelle: string;
    boite_postal: string;
    fondateur: string;
    numero_agrement: string;
  
}
  
export const etablissementStore = defineStore("etablissement",{

  state: () => ({

    stateetablissement: [] as dossieretablissement[],
  }),
  getters: {
    getteretablissement(state){
            return state.stateetablissement;
        }
  },
  actions: {
     async getetablissement(){
                try {
                    const response = await apiUrl.get("/listeetablissement",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateetablissement = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouteretablissement(infor: dossieretablissement){ //etablissement d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementetablissement",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateetablissement.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getetablissement();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async Supprimeretablissement(id: number){ //etablissement de suppression
                try {
                    await apiUrl.delete(`/supprimeretablissement/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateetablissement = this.stateetablissement.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getetablissement();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifieretablissement(credentials: dossieretablissement) {
      try {
        const response = await apiUrl.put(`/modificationetablissement/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateetablissement.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateetablissement[index] = response.data;
        }
        this.getetablissement();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
},


 
});
