import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";


interface dossierinscription {
    id: number;
    anneeScolaireId: number;
    ClasseId: number;
    bourssier: string;
    transport: string;
    montant_scolaire: number;
    date_versement: string;
    EtudiantId: number;
    montant_verse: number;
  type_versement_id: number;
  frais_inscription: string;
  statut: string;
  niveau: number,
  montant_scolarite: string,
  classe: string,
  montant_paye: string,
  afficherEtudiant: string,
  
}
  
export const inscriptionStore = defineStore("inscription",{

  state: () => ({

    stateinscription: [] as dossierinscription[],
    stateinscriptionClasse: [] as dossierinscription[],
    stateinscriptionParApprenant: [] as dossierinscription[],
  }),
  getters: {
    getterinscription(state){
            return state.stateinscription;
    },
    getterinscriptionClasse(state){
            return state.stateinscriptionClasse;
    },
    getterinscriptionApprenant(state){
            return state.stateinscriptionParApprenant;
        }
  },
  actions: {
     async getInscriptionParApprenant(){
                try {
                    const response = await apiUrl.get("/listeInscriptionParApprenant",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateinscriptionParApprenant = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
    // async getInscriptionParApprenant(id: number){
    //   try {
    //     const response = await apiUrl.get(`/listeInscriptionParApprenant/${id}`,{
    //       headers: authHeader(),
    //     });
    //     this.stateinscriptionParApprenant = response.data || [];
    //   } catch (error) {
    //     console.error("erreur survenue", error);
    //     toast.error(`Erreur lors de la récupération : ${error}`);
    //   }
    // },
    async getinscriptionClasse(){
                try {
                    const response = await apiUrl.get("/listeInscriptionParClasse",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateinscriptionClasse = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
     async getinscription(){
                try {
                    const response = await apiUrl.get("/listeInscription",{ 
                      headers: authHeader(),
                      
                    });
                  
                  this.stateinscription = response.data || [];
                  
                } catch (error) {
                    console.log('erreur survenue', error);
                   
                }
            },
async ajouterinscription(infor: dossierinscription){ //inscription d'ajout des information global du budget
                try {
                    const response = await apiUrl.post("/enregistrementInscription",
                        infor, // on lui passe l'interface de section
                        {
                        headers: authHeader(),
                    });
                    this.stateinscription.push(response.data)
                   toast.success(`Enregistrement effectuer avec succès`);
                  this.getinscription();
                  this.getinscriptionClasse();
                  this.getInscriptionParApprenant()
                } catch (error) {
                    console.log('erreur survenue', error);
                  //  toast.error(`Erreur lors de l'ajout : ${error}`);
                }
      },
        
 async Supprimerinscription(id: number){ //inscription de suppression
                try {
                    await apiUrl.delete(`/supprimerInscription/${id}`,{
                        headers: authHeader(),
                    });
                    this.stateinscription = this.stateinscription.filter((item) => item.id !== id);
                    toast.success("Suppression éffectuer avec succès");
                    this.getinscription();
                } catch (error) {
                    console.error("Erreur de suppression: ", error);
                    toast.error("Échec de la suppression");
                }
            
            },

 async modifierinscription(credentials: dossierinscription) {
      try {
        const response = await apiUrl.put(`/modificationInscription/${credentials.id}`,
          credentials, { headers: authHeader(), }
        );
        const index = this.stateinscription.findIndex(
          (item) => item.id === credentials.id
        );
        if (index !== -1) {
          this.stateinscription[index] = response.data;
        }
        this.getinscription();
        toast.success("Modification effectuée avec succès");
      } catch (error) {
        console.error("Erreur de mise à jour: ", error);
        toast.error("Échec de la mise à jour");
      }
    },
  },


 
});
