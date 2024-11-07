import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossiertypeversement {
    id: number;
    libelle: string;
    // montant_versement: string;
    // datedebut: string;
    // datefin: string;

}
  
export const typeversementStore = defineStore("typeversement",{

  state: () => ({

    statetypeversement: [] as dossiertypeversement[],
  }),
  getters: {
    gettertypeversement(state){
            return state.statetypeversement;
        }
  },
  actions: {
     async gettypeversement(){
                try {
                    const response = await apiUrl.get("/listeTypeVersement",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.statetypeversement = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajoutertypeversement(infor: dossiertypeversement){ //typeversement d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementTypeVersement",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.statetypeversement.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.gettypeversement();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async Supprimertypeversement(id: number){ //typeversement de suppression
                try {
                    await apiUrl.delete(`/supprimerTypeVersement/${id}`,{
                        headers: authHeader(),
                    });
                    this.statetypeversement = this.statetypeversement.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.gettypeversement();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifiertypeversement(credentials: dossiertypeversement) {
      try {
        const response = await apiUrl.put(`/modificationTypeVersement/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.statetypeversement.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.statetypeversement[index] = response.data;
        }
        this.gettypeversement();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
