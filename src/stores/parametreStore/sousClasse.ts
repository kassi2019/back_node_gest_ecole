import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossierSousclasse {
    id: number;
    classeId: number;
  code: string;
    nombreetudiant: string;
    statut:number

}
  interface dossierSousclasseGroup {
   
    classeId: number;
  

}
export const SousclasseStore = defineStore("Sousclasse",{

  state: () => ({

        stateSousclasse: [] as dossierSousclasse[],
      stateSousclasseGroup: [] as dossierSousclasseGroup[],
  }),
  getters: {
    getterSousclasse(state){
            return state.stateSousclasse;
      },
      getterSousclasseGroup(state){
            return state.stateSousclasseGroup;
        }
  },
    actions: {
        
          async getSousclasseGroup(){
                try {
                    const response = await apiUrl.get("/listeSousClasseGroupe",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateSousclasseGroup = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
     async getSousclasse(){
                try {
                    const response = await apiUrl.get("/listeSousClasse",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateSousclasse = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterSousclasse(infor: dossierSousclasse){ //Sousclasse d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementSousClasse",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateSousclasse.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getSousclasse();
                    this.getSousclasseGroup();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async SupprimerSousclasse(id: number){ //Sousclasse de suppression
                try {
                    await apiUrl.delete(`/supprimerSousClasse/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateSousclasse = this.stateSousclasse.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getSousclasse();
                    this.getSousclasseGroup();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifierSousclasse(credentials: dossierSousclasse) {
      try {
        const response = await apiUrl.put(`/modificationSousClasse/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateSousclasse.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateSousclasse[index] = response.data;
        }
          this.getSousclasse();
          this.getSousclasseGroup();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
