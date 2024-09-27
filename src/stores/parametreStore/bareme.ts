import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossierbareme {
    id: number;
    code: string;
    libelle: string;
}
  
export const baremeStore = defineStore("bareme",{

  state: () => ({

    statebareme: [] as dossierbareme[],
  }),
  getters: {
    getterbareme(state){
            return state.statebareme;
        }
  },
  actions: {
     async getbareme(){
                try {
                    const response = await apiUrl.get("/listebareme",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.statebareme = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterbareme(infor: dossierbareme){ //bareme d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementbareme",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.statebareme.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getbareme();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async Supprimerbareme(id: number){ //bareme de suppression
                try {
                    await apiUrl.delete(`/supprimerbareme/${id}`,{
                        headers: authHeader(),
                    });
                    this.statebareme = this.statebareme.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getbareme();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifierbareme(credentials: dossierbareme) {
      try {
        const response = await apiUrl.put(`/modificationbareme/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.statebareme.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.statebareme[index] = response.data;
        }
        this.getbareme();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
