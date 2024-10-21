import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossieretudiant {
    id: number;
   civilite: string;
   matricule: string;
   nom: string;
   prenoms: number;
   date_naissance: Date;
   lieu_naissance: string;
   lieu_habitation: string;
  nationalite: string;
  ancienne_classe: string;
  ancienne_moyenne: string;
  ancien_etablissement: string;
   telephone_etudiant: number;
   nom_prenom_pere: string;
   profession_pere: number,
   telephone_domicile_mere: string,
   telephone_mobile_mere: string,
    email_mere: string,
    lieu_habitation_mere: string,
    nom_prenom_tuteur: string,
    telephone_bureau_tuteur: string,
    telephone_domicile_tuteur: string,
    telephone_mobile_tuteur: string,
    email_tuteur: string,
    email_pere:string,
  telephone_mobile_pere: string,
  telephone_domicile_pere: string,
    telephone_bureau_pere: string,
    adresse_postal_pere: string,
    adresse_postal_mere: string,
    adresse_postal_tuteur: string,
  lieu_habitation_pere: string,
    lieu_habitation_tuteur: string,
    nom_prenom_mere: string,
    profession_mere: string,
    telephone_bureau_mere: string,
    profession_tuteur:string
   
    
}
  
export const etudiantStore = defineStore("etudiant",{

  state: () => ({

    stateetudiant: [] as dossieretudiant[],
  }),
  getters: {
    getteretudiant(state){
            return state.stateetudiant;
        }
  },
  actions: {
     async getetudiant(){
                try {
                    const response = await apiUrl.get("/listeEtudiant",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateetudiant = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouteretudiant(infor: dossieretudiant){ //etudiant d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementEtudiant",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateetudiant.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                    this.getetudiant();
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async Supprimeretudiant(id: number){ //etudiant de suppression
                try {
                    await apiUrl.delete(`/supprimerEtudiant/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateetudiant = this.stateetudiant.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getetudiant();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifieretudiant(credentials: dossieretudiant) {
      try {
        const response = await apiUrl.put(`/modificationEtudiant/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateetudiant.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateetudiant[index] = response.data;
        }
        this.getetudiant();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
