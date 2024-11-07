<template>
  <div>
    
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-body">
          <div class="row card pull-up">
            <div class="col-xl-12 col-lg-12 col-md-12">
              <br />
              <div class="ecom-card-1 bg-white">
                <div class="card-content ecom-card2 height-10000">
                  <h6
                    class="text-muted danger position-absolute p-1"
                    style="color: black !important"
                  >
                    STATUT DE L'INSCRIPTION PAR CLASSE
                  </h6>
                  <br />
                  <button
                    type="button"
                    class="btn btn-outline-info float-right"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    <i class="la la-plus">Ajouter</i>
                  </button>
                  <!-- <button type="button" class="btn btn-danger"><i class="la la-plus-circle float-right">Ajouter</i></button> -->
                  <br /><br />
                  <div>
                   
                    <form-wizard shape="square" color="#3498db">
                      <tab-content title="STATUT DE L'INSCRIPTION PAR CLASSE">
                        <tableauInscriptionNonSolde></tableauInscriptionNonSolde>
                      </tab-content>
                     

                      <template v-slot:footer="props">
                        <div class="wizard-footer-left">
                          <wizard-button
                            v-if="props.activeTabIndex > 0"
                            @click.native="props.prevTab()"
                            :style="props.fillButtonStyle"
                          >
                            Précedent
                          </wizard-button>
                        </div>
                        <div class="wizard-footer-right">
                          <wizard-button
                            v-if="!props.isLastStep"
                            @click="props.nextTab()"
                            class="wizard-footer-right"
                            :style="props.fillButtonStyle"
                          >
                            Suivant
                          </wizard-button>

                          <wizard-button
                            v-else
                            class="wizard-footer-right finish-button"
                            :style="props.fillButtonStyle"
                          >
                            Fin
                          </wizard-button>
                        </div>
                      </template>
                    </form-wizard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        ref="modalRef"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Enregistrer Inscription
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3">
                <div class="col-md-2">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Année scolaire</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    :value="afficheAnneeScolaire"
                    readonly
                    style="background-color: #dcdcdc"
                  />
                </div>
                <div class="col-md-10">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Etudiant</label
                  >
                  <model-list-select
                    :list="storeEtudiant.getteretudiant"
                    v-model="form.EtudiantId"
                    option-value="id"
                    option-text="nom"
                    placeholder="selectionnez etudiant"
                    style="border: 1px solid #000"
                    class="frome_champs"
                  >
                  </model-list-select>
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Classe</label
                  >
                  <model-list-select
                    :list="storeclasse.getterclasse"
                    v-model="form.ClasseId"
                    option-value="id"
                    option-text="code"
                    placeholder="selectionnez classe"
                    style="border: 1px solid #000"
                    class="frome_champs"
                    v-if="verifierSiEtudiantEstInscrire(form.EtudiantId)==0"
                  >
                  </model-list-select>
                  <input
                  v-else
                    type="text"
                    class="form-control"
                    :value="afficheLaClasseLibelle(afficheLaClasseEtudiant(form.EtudiantId))"
                    disabled
                  />
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Type versement</label
                  >
                  <model-list-select
                    :list="afficheListeTypeVersement"
                    v-model="form.type_versement_id"
                    option-value="id"
                    option-text="libelle"
                    placeholder="selectionnez classe"
                    style="border: 1px solid #000"
                    class="frome_champs"
                  >
                  </model-list-select>
                </div>
                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Montant de la scolarité ( A )</label
                  >

                  <money3
                    class="money3"
                    :decimal="config.decimal"
                    :thousands="config.thousands"
                    :precision="config.precision"
                    :min="config.min"
                    :masked="config.masked"
                    :modelValue="montantScolarite(enregistreIdClasse)"
                    readonly
                    style="background-color: #dcdcdc"
                  ></money3>
                </div>
                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Frais d'inscription</label
                  >
                  <money3
                    v-if="
                      nombreInscriptionParEtudiant(
                        form.EtudiantId,
                        affiche_id_AnneeScolaire
                      ) == 0
                    "
                    class="money3"
                    :decimal="config.decimal"
                    :thousands="config.thousands"
                    :precision="config.precision"
                    :min="config.min"
                    :masked="config.masked"
                    v-model="form.frais_inscription"
                  ></money3>
                  <money3
                    v-else
                    class="money3"
                    :decimal="config.decimal"
                    :thousands="config.thousands"
                    :precision="config.precision"
                    :min="config.min"
                    :masked="config.masked"
                    v-model="form.frais_inscription"
                    readonly
                    style="background-color: #dcdcdc"
                  ></money3>
                </div>
                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Montant versé ( B )</label
                  >

                  <money3
                    class="money3"
                    :decimal="config.decimal"
                    :thousands="config.thousands"
                    :precision="config.precision"
                    :min="config.min"
                    :masked="config.masked"
                    v-model="form.montant_verse"
                  ></money3>
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Déja payé ( C )</label
                  >

                  <money3
                    class="money3"
                    :decimal="config.decimal"
                    :thousands="config.thousands"
                    :precision="config.precision"
                    :min="config.min"
                    :masked="config.masked"
                    style="background-color: #dcdcdc"
                    :modelValue="
                      montantPayer(
                        form.EtudiantId,
                        affiche_id_AnneeScolaire,
                        enregistreIdClasse
                      )
                    "
                    readonly
                  ></money3>
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Reste à Soldé ( D = A - ( B + C ) )</label
                  >
                  <money3
                    class="money3"
                    :decimal="config.decimal"
                    :thousands="config.thousands"
                    :precision="config.precision"
                    :min="config.min"
                    :masked="config.masked"
                    readonly
                    style="background-color: #dcdcdc"
                    :modelValue="
                      parseFloat(montantScolarite(enregistreIdClasse)) -
                      (parseFloat(montantReste) +
                        parseFloat(form.montant_verse))
                    "
                  ></money3>
                </div>
                <!-- <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Date versement</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    v-model="form.date_versement"
                  />
                </div> -->
                <div class="col-md-12">
                  <h6 v-if="parseFloat(montantScolarite(enregistreIdClasse)) -
                      (parseFloat(montantReste) +
                        parseFloat(form.montant_verse))<0" style="color:red">Montant à versé est supérieur au montant Restant</h6>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <button
              v-if="parseFloat(montantScolarite(enregistreIdClasse)) -
                      (parseFloat(montantReste) +
                        parseFloat(form.montant_verse))>=0"
                type="button"
                class="btn btn-success"
                @click.prevent="Enregistrementinscription"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal de modification -->

    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      ref="modalModification"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Fonction</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="row g-3 needs-validation">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Code</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="formmod.code"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Libelle</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="formmod.libelle"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
            <button type="button" class="btn btn-success" @click.prevent="">
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- fin du modal de modification -->
  </div>
</template>
<script setup lang="ts">
// import { useRouter } from "vue-router";
import { Modal } from "bootstrap";

// const id_utilisateur = JSON.parse(localStorage.getItem("userid"));
import Swal from "sweetalert2";
import { ModelListSelect } from "vue-search-select";
import { ref, reactive, onMounted, computed } from "vue";
import { FormWizard, TabContent } from "vue3-form-wizard";
import { etudiantStore } from "../../stores/parametreStore/etudiant";

import { classeStore } from "../../stores/parametreStore/classe";
import { anneeScolaireStore } from "../../stores/parametreStore/anneeScolaire";
import { typeversementStore } from "../../stores/parametreStore/typeVersement";
import { inscriptionStore } from "../../stores/parametreStore/inscription";
import tableauInscriptionNonSolde  from "./tableauInscriptionParClasse.vue";
const modalRef = ref<HTMLDivElement | null>(null);
const modalModification = ref<HTMLDivElement | null>(null);
const storeEtudiant = etudiantStore();
const storetypeVersement = typeversementStore();
const storeInscription = inscriptionStore();
const storeclasse = classeStore();
const anneeS = anneeScolaireStore();

const config = {
  decimal: ",",
  thousands: ".",
  suffix: "",
  precision: 0,
  allowNegative: true,
  min: 0,
  masked: false /* doesn't work with directive */,
  allowBlank: true,
};
const showModal = () => {
  if (modalRef.value) {
    const modalInstance = new Modal(modalRef.value);
    modalInstance.show();
  }
};

const form: any = reactive({
  EtudiantId: "",
  ClasseId: "",
  montant_verse: 0,
  type_versement_id: "",
  frais_inscription: "",
  montant_scolaire: "",
  date_versement: "",
  anneeScolaireId: "",
});
const formmod: any = reactive({
  code: "",
  libelle: "",
});
function ViderChamps() {
  form.montant_verse = 0;
  (form.EtudiantId = ""), (form.ClasseId = ""), (form.type_versement_id = "");
  form.frais_inscription = "0";
}

function verifierSiEtudiantEstInscrire(id: number) {
  let data = storeInscription.getterinscriptionApprenant.find((item) => item.EtudiantId == id);
  if (data) {
    return 1;
  }
  return 0;
}
function afficheLaClasseEtudiant(id: number) {
  let data = storeInscription.getterinscriptionApprenant.find((item) => item.EtudiantId == id);
  if (data) {
    return data.ClasseId;
  }
  return 0;
}
function afficheLaClasseLibelle(id: number) {
  let data = storeclasse.getterclasse.find((item) => item.id == id);
  if (data) {
    return data.libelle.concat(' ( ',data.code,' ) ');
  }
  return 0;
}
const enregistreIdClasse = computed(() => {
  if (verifierSiEtudiantEstInscrire(form.EtudiantId) == 0) {
    return form.ClasseId
  } else {
    return afficheLaClasseEtudiant(form.EtudiantId)
  }
})
function Enregistrementinscription() {
 
  // $v.value.$touch();
  //if (!$v.value.$invalid) {
  // try {
  if (
    parseFloat(
      montantPayer(
        form.EtudiantId,
        affiche_id_AnneeScolaire.value,
        enregistreIdClasse.value
      )
    ) +
      parseFloat(form.montant_verse) !=
    parseFloat(montantScolarite(enregistreIdClasse.value))
  ) {
    let obj: any = {
      EtudiantId: form.EtudiantId,
      ClasseId: enregistreIdClasse.value,
      montant_verse: form.montant_verse,
      type_versement_id: form.type_versement_id,
      frais_inscription: form.frais_inscription,
      montant_scolaire: montantScolarite(enregistreIdClasse.value).valueOf,
      //date_versement: form.date_versement,
      anneeScolaireId: affiche_id_AnneeScolaire.value,
      statut: 0,
      niveau:
        nombreInscriptionParEtudiant(
          form.EtudiantId,
          affiche_id_AnneeScolaire.value
        ) + 1,
    };
    storeInscription.ajouterinscription(obj).then(() => {
      ViderChamps();
      // isLoading.value = false;
    });
  } else {
    let obj1: any = {
      EtudiantId: form.EtudiantId,
      ClasseId: enregistreIdClasse.value,
      montant_verse: form.montant_verse,
      type_versement_id: form.type_versement_id,
      frais_inscription: form.frais_inscription,
      montant_scolaire: montantScolarite(enregistreIdClasse.value).valueOf,
      //date_versement: form.date_versement,
      anneeScolaireId: affiche_id_AnneeScolaire.value,
      statut: 1,
      niveau:
        nombreInscriptionParEtudiant(
          form.EtudiantId,
          affiche_id_AnneeScolaire.value
        ) + 1,
    };
    storeInscription.ajouterinscription(obj1).then(() => {
      ViderChamps();
      // isLoading.value = false;
    });
  }
  //   isLoading.value = true;
  //   console.log(obj)
  // } catch (error) {
  //   console.error("Enregistrement échoué", error);
  //   // isLoading.value = false;
  // }
  //   } else {
  //     console.log($v);
  //   }
}

const afficheListeTypeVersement = computed(() => {
  return storetypeVersement.gettertypeversement.filter(
    (data) =>
      data.id !=
        typeversementEtudiantNiveau1(
          form.EtudiantId,
          affiche_id_AnneeScolaire.value
        ) &&
      data.id !=
        typeversementEtudiantNiveau2(
          form.EtudiantId,
          affiche_id_AnneeScolaire.value
        ) &&
      data.id !=
        typeversementEtudiantNiveau3(
          form.EtudiantId,
          affiche_id_AnneeScolaire.value
        ) &&
      data.id !=
        typeversementEtudiantNiveau4(
          form.EtudiantId,
          affiche_id_AnneeScolaire.value
        ) &&
      data.id !=
        typeversementEtudiantNiveau5(
          form.EtudiantId,
          affiche_id_AnneeScolaire.value
        ) &&
      data.id !=
        typeversementEtudiantNiveau6(
          form.EtudiantId,
          affiche_id_AnneeScolaire.value
        )
  );
});

const typeversementEtudiantNiveau1 = (
  etudiantId: number,
  anneeScolaire: number
) => {
  const d_data = storeInscription.getterinscription.find(
    (item) =>
      item.EtudiantId == etudiantId &&
      item.anneeScolaireId == anneeScolaire &&
      item.niveau == 1
  );
  if (d_data) {
    return d_data.type_versement_id;
  }
  return 0;
};
const typeversementEtudiantNiveau3 = (
  etudiantId: number,
  anneeScolaire: number
) => {
  const d_data = storeInscription.getterinscription.find(
    (item) =>
      item.EtudiantId == etudiantId &&
      item.anneeScolaireId == anneeScolaire &&
      item.niveau == 3
  );
  if (d_data) {
    return d_data.type_versement_id;
  }
  return 0;
};
const typeversementEtudiantNiveau2 = (
  etudiantId: number,
  anneeScolaire: number
) => {
  const d_data = storeInscription.getterinscription.find(
    (item) =>
      item.EtudiantId == etudiantId &&
      item.anneeScolaireId == anneeScolaire &&
      item.niveau == 2
  );
  if (d_data) {
    return d_data.type_versement_id;
  }
  return 0;
};
const typeversementEtudiantNiveau4 = (
  etudiantId: number,
  anneeScolaire: number
) => {
  const d_data = storeInscription.getterinscription.find(
    (item) =>
      item.EtudiantId == etudiantId &&
      item.anneeScolaireId == anneeScolaire &&
      item.niveau == 4
  );
  if (d_data) {
    return d_data.type_versement_id;
  }
  return 0;
};
const typeversementEtudiantNiveau5 = (
  etudiantId: number,
  anneeScolaire: number
) => {
  const d_data = storeInscription.getterinscription.find(
    (item) =>
      item.EtudiantId == etudiantId &&
      item.anneeScolaireId == anneeScolaire &&
      item.niveau == 5
  );
  if (d_data) {
    return d_data.type_versement_id;
  }
  return 0;
};
const typeversementEtudiantNiveau6 = (
  etudiantId: number,
  anneeScolaire: number
) => {
  const d_data = storeInscription.getterinscription.find(
    (item) =>
      item.EtudiantId == etudiantId &&
      item.anneeScolaireId == anneeScolaire &&
      item.niveau == 6
  );
  if (d_data) {
    return d_data.type_versement_id;
  }
  return 0;
};
const nombreInscriptionParEtudiant = (
  etudiantId: number,
  anneeScolaire: number
) => {
  return storeInscription.getterinscription.filter(
    (data) =>
      data.EtudiantId == etudiantId && data.anneeScolaireId == anneeScolaire
  ).length;
};
const montantPayer = (
  etudiantId: number,
  anneeScolaire: number,
  classeId: number
) => {
  return storeInscription.getterinscription
    .filter(
      (data) =>
        data.EtudiantId == etudiantId &&
        data.anneeScolaireId == anneeScolaire &&
        data.ClasseId == classeId
    )
    .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_verse), 0)
    .toFixed(0);
};
// const montantPayer = computed(() => {
//   return storeInscription.getterinscription
//     .filter(
//       (data) =>
//         data.EtudiantId == form.EtudiantId &&
//         data.anneeScolaireId == affiche_id_AnneeScolaire.value &&
//         data.ClasseId == form.ClasseId
//     )
//     .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_verse), 0)
//     .toFixed(0);
// });

const montantReste = computed<string>(() => {
  return storeInscription.getterinscription
    .filter(
      (data) =>
        data.EtudiantId == form.EtudiantId &&
        data.anneeScolaireId == affiche_id_AnneeScolaire.value &&
        data.ClasseId == enregistreIdClasse.value
    )
    .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_verse), 0)
    .toFixed(0);
});
function montantScolarite(id: number) {
  let data = storeclasse.getterclasse.find((item) => item.id == id);
  if (data) {
    return data.montantscolarite;
  }
  return "";
}
const affiche_id_AnneeScolaire = computed(() => {
  const d_data = anneeS.getterAnneeScolaire.find((item) => item.statut == 1);
  if (d_data) {
    return d_data.id;
  }
  return 0;
});
const afficheAnneeScolaire = computed(() => {
  const d_data = anneeS.getterAnneeScolaire.find((item) => item.statut == 1);
  if (d_data) {
    return d_data.annee;
  }
  return 0;
});
onMounted(() => {
  storeEtudiant.getetudiant();
  storetypeVersement.gettypeversement();
  storeclasse.getclasse();
  anneeS.getAnneeScolaire();
  storeInscription.getinscription();
  storeInscription.getinscriptionClasse();
  storeInscription.getInscriptionParApprenant()
});
</script>
<style scoped></style>
