import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";


import apiUrl from "@/config/axios";

export interface affectationClasse {
    id:number
    classeId: number;
    sousclassesId: number;
    personnelid: number;
}
  interface dossierSousclasseGroup {
   
    classeId: number;
  

}
export const AffectationClasse = defineStore("affectationClasse",{

  state: () => ({

        stateAffectationClasse: [] as affectationClasse[],
      stateAffectationClasseGroupe:[] as dossierSousclasseGroup[],
  }),
  getters: {
   getterAffectationClasse(state){
            return state.stateAffectationClasse;
      },
      getterAffectationClasseGpe(state){
            return state.stateAffectationClasseGroupe;
        }
  },
  actions: {
async getAffectationClasseGroup(){
                try {
                    const response = await apiUrl.get("/listeAffectationClasseGroupe",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateAffectationClasseGroupe = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
        async SupprimerAffectationClasse(id: number){ //bareme de suppression
                try {
                    await apiUrl.delete(`/supprimerAffectationClasse/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateAffectationClasse = this.stateAffectationClasse.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getAffectationClasse();
                    this.getAffectationClasseGroup();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },
    async getAffectationClasse(){
                try {
                    const response = await apiUrl.get("/listeAffectationClasse",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateAffectationClasse = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterAffectationClasse(infor: affectationClasse){ //cycle d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementAffectationClasse",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                  this.stateAffectationClasse.push(response.data)
                  
                  toast.success(`Enregistrement effectuer avec succès`);
                    this.getAffectationClasse();
                    this.getAffectationClasseGroup();
                    //this.getcycle();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },

async modifierAffectationClasse(credentials: affectationClasse) {
      try {
        const response = await apiUrl.put(`/modificationAffectationClasse/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateAffectationClasse.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateAffectationClasse[index] = response.data;
        }
          this.getAffectationClasse();
          this.getAffectationClasseGroup();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },



  },


 
});
