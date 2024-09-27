import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossiercycle {
    id: number;
    code: string;
    libelle: string;
}
  
export const cycleStore = defineStore("cycle",{

  state: () => ({

    statecycle: [] as dossiercycle[],
  }),
  getters: {
    gettercycle(state){
            return state.statecycle;
        }
  },
  actions: {
     async getcycle(){
                try {
                    const response = await apiUrl.get("/listecycle",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.statecycle = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajoutercycle(infor: dossiercycle){ //cycle d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementcycle",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.statecycle.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getcycle();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async Supprimercycle(id: number){ //cycle de suppression
                try {
                    await apiUrl.delete(`/supprimercycle/${id}`,{
                        headers: authHeader(),
                    });
                    this.statecycle = this.statecycle.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getcycle();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifiercycle(credentials: dossiercycle) {
      try {
        const response = await apiUrl.put(`/modificationcycle/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.statecycle.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.statecycle[index] = response.data;
        }
        this.getcycle();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
