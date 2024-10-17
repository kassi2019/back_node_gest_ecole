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
                  <h3
                    class="text-muted danger position-absolute p-1"
                    style="color: black !important"
                  >
                    Personnel
                  </h3>
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

                  <div>
                    <br /><br />
                    <form-wizard shape="square" color="#3498db">
                      
                      <tab-content title="LISTE DU PERSONNEL ">
                        <div class="table-responsive">
                          <table class="table">
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col">N°</th>
                                <th scope="col" style="width: ">Civilité</th>
                                <th scope="col" style="width: ">Matricule</th>
                                <th scope="col" style="width: ">Nom</th>
                                <th scope="col" style="width: ">Prénoms</th>
                                <th scope="col" style="width: ">
                                  Date naissance
                                </th>
                                <th scope="col" style="width: ">
                                  Lieu naissance
                                </th>
                                <th scope="col" style="width: ">Fonction</th>
                                <th
                                  scope="col"
                                  style="text-align: center !important"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(item, index) in store.gettersPersonnel"
                                :key="item.id"
                              >
                                <td style="border: 1px solid #000">
                                  {{ index + 1 }}
                                </td>
                                <td style="border: 1px solid #000">
                                  {{ item.civilite }}
                                </td>
                                 <td style="border: 1px solid #000">
                                  {{ item.matricule }}
                                </td>
                                <td style="border: 1px solid #000; width: 10%">
                                  {{ item.name }}
                                </td>
                                <td style="border: 1px solid #000; width: 35%">
                                  {{ item.prenoms }}
                                </td>
                                <td style="border: 1px solid #000">
                                  {{ item.date_naissance }}
                                </td>
                                <td style="border: 1px solid #000">
                                  {{ item.lieu_naissance }}
                                </td>
                                <td style="border: 1px solid #000">
                                  {{
                                    afficherLibelleFonction(item.fonction_id)
                                  }}
                                </td>

                                <td style="border: 1px solid #000">
                                  <button
                                    type="button"
                                    class="btn btn-primary btn-sm"
                                    title="Modifier"
                                    @click="showModalPersonnel(item.id)"
                                  >
                                    <i class="la la-pencil-square"></i>
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-danger btn-sm"
                                    title="Supprimer"
                                    @click="supprimerPersonnel(item.id)"
                                  >
                                    <i class="la la-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </tab-content>
                      <tab-content title="LISTE UTILISATEUR">
                        <div class="table-responsive">
                          <table class="table">
                            <thead class="thead-dark">
                              <tr>
                                <th scope="col">N°</th>
                                <th scope="col" style="width: 10%">Matricule</th>
                                <th scope="col" style="width: 10%">Nom</th>
                                <th scope="col" style="width: 35%">Prénoms</th>
                                <th scope="col" style="width: 15%">Email</th>
                                <th scope="col" style="width: 20%">Rôle</th>
                                <th
                                  scope="col"
                                  style="text-align: center !important"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(
                                  item, index
                                ) in store.gettersUtilisateur"
                                :key="item.id"
                              >
                                <td style="border: 1px solid #000">
                                  {{ index + 1 }}
                                </td>
                                 <td style="border: 1px solid #000">
                                  {{ item.matricule }}
                                </td>
                                <td style="border: 1px solid #000">
                                  {{ item.name }}
                                </td>
                                <td style="border: 1px solid #000">
                                  {{ item.prenoms }}
                                </td>
                                <td style="border: 1px solid #000">
                                  {{ item.email }}
                                </td>
                                <td style="border: 1px solid #000">
                                  {{ afficherLibelleRole(item.role_id) }}
                                </td>
                                <td style="border: 1px solid #000">
                                  <button
                                    type="button"
                                    class="btn btn-primary btn-sm"
                                    title="Modifier"
                                    @click="showModalDecision(item.id)"
                                  >
                                    <i class="la la-pencil-square"></i>
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-danger btn-sm"
                                    title="Supprimer"
                                    @click="supprimer(item.id)"
                                  >
                                    <i class="la la-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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
                    <!--  -->
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
                Enregistrer Personnel
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
                    >Civilité</label
                  >
                  <select
                    class="form-select form-select-lg mb-3 frome_champs"
                    aria-label="form-select-lg example"
                    v-model="form.civilite"
                  >
                    <option selected></option>
                    <option value="Mr">Monsieur</option>
                    <option value="Mme">Madame</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Matricule</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.matricule"
                  />
                </div>
                <div class="col-md-7">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Nom</label
                  >
                  <input type="text" class="form-control" v-model="form.name" />
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Prénoms</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.prenoms"
                  />
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    v-model="form.email"
                  />
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Date naissance</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    v-model="form.date_naissance"
                  />
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Lieu naissance</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.lieu_naissance"
                  />
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Lieu habitation</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.lieu_habitation"
                  />
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Nationalité</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.nationalite"
                  />
                </div>
                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Fonction</label
                  >
                  <fieldset class="form-group">
                    <select
                      class="custom-select"
                      id="customSelect"
                      v-model="form.fonction_id"
                    >
                      <option></option>
                      <option
                        v-for="item in fonction.getterFonction"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.libelle }}
                      </option>
                    </select>
                  </fieldset>
                </div>

                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Rôle</label
                  >
                  <fieldset class="form-group">
                    <select
                      class="custom-select"
                      id="customSelect"
                      v-model="form.role_id"
                    >
                      <option></option>
                      <option
                        v-for="item in store.gettersRole"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.libelle }}
                      </option>
                    </select>
                  </fieldset>
                </div>
                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Êtes-vous enseignant ou professeur ?</label
                  >
                  <fieldset class="form-group">
                    <select
                      class="custom-select"
                      id="customSelect"
                      v-model="form.statut"
                    >
                      <option></option>
                      <option value="1">Oui</option>
                      <option value="0">Non</option>
                    </select>
                  </fieldset>
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Salaire</label
                  >

                  <money3
                    class="form-control frome_champs"
                    id="moy"
                    :decimal="config.decimal"
                    :thousands="config.thousands"
                    :precision="config.precision"
                    :min="config.min"
                    :masked="config.masked"
                    v-model="form.salaire"
                  />
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Date d'entrée</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    v-model="form.date_entre"
                  />
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Mot de passe</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.password"
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
              <button
                type="button"
                class="btn btn-success"
                @click.prevent="AjouterPersonnel"
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
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Utilisateur</h5>
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
                  >Matricule</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.matricule"
                />
              </div>
              <div class="col-md-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Nom</label
                >
                <input type="text" class="form-control" v-model="form.name" />
              </div>
              <div class="col-md-7">
                <label for="exampleFormControlInput1" class="form-label"
                  >Prénoms</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.prenoms"
                />
              </div>
              <div class="col-md-5">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email</label
                >
                <input type="text" class="form-control" v-model="form.email" />
              </div>
              <div class="col-md-4">
                <label for="exampleFormControlInput1" class="form-label"
                  >Rôle</label
                >
                <fieldset class="form-group">
                  <select
                    class="custom-select frome_champs"
                    id="customSelect"
                    v-model="form.role_id"
                  >
                    <option></option>
                    <option
                      v-for="item in store.gettersRole"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.libelle }}
                    </option>
                  </select>
                </fieldset>
              </div>
              <div class="col-md-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Mot de passe</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.password"
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
            <button
              type="button"
              class="btn btn-success"
              @click.prevent="modificationUtilisateur"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- fin du modal de modification -->







     <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
      ref="modalModificationPersonnel"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Personnel</h5>
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
                    >Civilité</label
                  >
                  <select
                    class="form-select form-select-lg mb-3 frome_champs"
                    aria-label="form-select-lg example"
                    v-model="form.civilite"
                  >
                    <option selected></option>
                    <option value="Mr">Monsieur</option>
                    <option value="Mme">Madame</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Matricule</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.matricule"
                  />
                </div>
                <div class="col-md-7">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Nom</label
                  >
                  <input type="text" class="form-control" v-model="form.name" />
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Prénoms</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.prenoms"
                  />
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    v-model="form.email"
                  />
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Date naissance</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    v-model="form.date_naissance"
                  />
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Lieu naissance</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.lieu_naissance"
                  />
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Lieu habitation</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.lieu_habitation"
                  />
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Nationalité</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.nationalite"
                  />
                </div>
                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Fonction</label
                  >
                  <fieldset class="form-group">
                    <select
                      class="custom-select"
                      id="customSelect"
                      v-model="form.fonction_id"
                    >
                      <option></option>
                      <option
                        v-for="item in fonction.getterFonction"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.libelle }}
                      </option>
                    </select>
                  </fieldset>
                </div>

                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Rôle</label
                  >
                  <fieldset class="form-group">
                    <select
                      class="custom-select"
                      id="customSelect"
                      v-model="form.role_id"
                    >
                      <option></option>
                      <option
                        v-for="item in store.gettersRole"
                        :key="item.id"
                        :value="item.id"
                      >
                        {{ item.libelle }}
                      </option>
                    </select>
                  </fieldset>
                </div>
                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Êtes-vous enseignant ou professeur ?</label
                  >
                  <fieldset class="form-group">
                    <select
                      class="custom-select"
                      id="customSelect"
                      v-model="form.statut"
                    >
                      <option></option>
                      <option value="1">Oui</option>
                      <option value="0">Non</option>
                    </select>
                  </fieldset>
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Salaire</label
                  >

                  <money3
                    class="form-control frome_champs"
                    id="moy"
                    :decimal="config.decimal"
                    :thousands="config.thousands"
                    :precision="config.precision"
                    :min="config.min"
                    :masked="config.masked"
                    v-model="form.salaire"
                  />
                </div>
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Date d'entrée</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    v-model="form.date_entre"
                  />
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Mot de passe</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.password"
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
            <button
              type="button"
              class="btn btn-success"
              @click.prevent="modificationPersonnel"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
import { useAuthStore } from "../../stores/utilisateurStore/Utilisateur";
import { FormWizard, TabContent } from "vue3-form-wizard";
import { fonctionStore } from "../../stores/parametreStore/fonction";
import { emploiStore } from "../../stores/parametreStore/emploi";
// const id_utilisateur = JSON.parse(localStorage.getItem("userid"));
import Swal from "sweetalert2";
import { ref, reactive, onMounted } from "vue";
const modalRef = ref<HTMLDivElement | null>(null);
const modalModification = ref<HTMLDivElement | null>(null);

const modalModificationPersonnel = ref<HTMLDivElement | null>(null);
const store = useAuthStore();
const fonction = fonctionStore();
const emploi = emploiStore();

const afficherLibelleFonction = (id: number) => {
  const d_data = fonction.getterFonction.find((item) => item.id == id);

  if (d_data) {
    return d_data.libelle;
  }
  return "non renseigné";
};
const afficherLibelleRole = (id: number) => {
  const d_data = store.gettersRole.find((item) => item.id == id);

  if (d_data) {
    return d_data.libelle;
  }
  return "non renseigné";
};

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
  email: "",
  name: "",
  password: "password",
  role_id: "",
  matricule: "",
  prenoms: "",
  date_naissance: "",
  lieu_naissance: "",
  fonction_id: "",
  lieu_habitation: "",
  salaire: "",
  date_entre: "",
  statut: "",
  civilite: "",
  nationalite: "",
});

function ViderChamps() {
  (form.email = ""),
    (form.name = ""),
    (form.password = "password"),
    (form.role_id = "");
  (form.matricule = ""),
    (form.prenoms = ""),
    (form.date_naissance = ""),
    (form.lieu_naissance = ""),
    (form.fonction_id = ""),
    (form.salaire = ""),
    (form.date_entre = "");
  form.civilite = "";
  form.lieu_habitation = "";
  form.nationalite = "";
  form.statut = "";
}
function AjouterPersonnel() {
  // $v.value.$touch();
  //if (!$v.value.$invalid) {
  try {
    let obj: any = {
      email: form.email,
      name: form.name,
      password: form.password,
      role_id: form.role_id,
      matricule: form.matricule,
      prenoms: form.prenoms,
      date_naissance: form.date_naissance,
      lieu_naissance: form.lieu_naissance,
      fonction_id: form.fonction_id,
      salaire: form.salaire,
      date_entre: form.date_entre,
      civilite: form.civilite,
      lieu_habitation: form.lieu_habitation,
      nationalite: form.nationalite,
      statut:form.statut
    };
    //   isLoading.value = true;
    //   console.log(obj)
    store.ajouterUtilisateur(obj).then(() => {
      ViderChamps();
      // isLoading.value = false;
    });
  } catch (error) {
    console.error("Enregistrement échoué", error);
    // isLoading.value = false;
  }
  //   } else {
  //     console.log($v);
  //   }
}
// function supprimer(id: any) {
//   store.SupprimerRole(id);
// }
const showModalDecision = (id: number) => {
  const d_data = store.gettersUtilisateur.find(
    (item: { id: number }) => item.id === id
  );
  if (d_data) {
    form.matricule = d_data.matricule;
    form.email = d_data.email;
    form.name = d_data.name;
    form.prenoms = d_data.prenoms;

    form.role_id = d_data.role_id;
    form.id = d_data.id;
    if (modalModification.value) {
      const modalInstance = new Modal(modalModification.value);
      modalInstance.show();
    }
  } else {
    console.error(`Data with id ${id} not found`);
  }
};




const showModalPersonnel = (id: number) => {
  const d_data = store.gettersPersonnel.find(
    (item: { id: number }) => item.id === id
  );
  if (d_data) {
    form.matricule = d_data.matricule;
    form.name = d_data.name;
    form.prenoms = d_data.prenoms;
    form.date_naissance = d_data.date_naissance;
    form.lieu_naissance = d_data.lieu_naissance;
    form.fonction_id = d_data.fonction_id;
form.salaire = d_data.salaire;
    form.email = d_data.email;
    form.date_entre = d_data.date_entre;
    form.nationalite = d_data.nationalite;
    form.civilite = d_data.civilite;
    form.lieu_habitation = d_data.lieu_habitation;
    form.role_id = d_data.role_id;
    form.id = d_data.id;
    if (modalModificationPersonnel.value) {
      const modalInstance = new Modal(modalModificationPersonnel.value);
      modalInstance.show();
    }
  } else {
    console.error(`Data with id ${id} not found`);
  }
};


function modificationPersonnel() {
  //$v1.value.$touch();
  // if (!$v1.value.$invalid) {
  form.id = form.id;
  try {
    if (form.role_id !=null) {
      store.creerNouveauUser(form).then(() => {
      //isLoading.value = false;
      // closeModal();
    });
    } else {
      store.modifierPersonnel(form).then(() => {
      //isLoading.value = false;
      // closeModal();
    });
    }
    // isLoading.value = true;
    
    // Fermer le modal après modification
    if (modalModification.value) {
      const modalInstance = Modal.getInstance(modalModification.value);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  } catch (error) {
    console.error("Login failed:", error);
    // isLoading.value = false;
  }
  // } else {
  //   console.log($v);
  // }
}


function modificationUtilisateur() {
  //$v1.value.$touch();
  // if (!$v1.value.$invalid) {
  form.id = form.id;
  try {
    // isLoading.value = true;
    store.modifierUtilisateur(form).then(() => {
      //isLoading.value = false;
      // closeModal();
    });
    // Fermer le modal après modification
    if (modalModification.value) {
      const modalInstance = Modal.getInstance(modalModification.value);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  } catch (error) {
    console.error("Login failed:", error);
    // isLoading.value = false;
  }
  // } else {
  //   console.log($v);
  // }
}
function supprimer(id: any) {
  Swal.fire({
    title: "Suppression",
    text: "êtes-vous sûr de vouloir effectuer cette action ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Oui, Supprimer",
    cancelButtonText: "Annuler !",
    confirmButtonColor: "#FF6150",
    cancelButtonColor: "#471A3",
  }).then((res) => {
    if (res.isConfirmed) {
      store.SupprimerUtilisateur(id);
    }
  });
}
function supprimerPersonnel(id: any) {
  Swal.fire({
    title: "Suppression",
    text: "êtes-vous sûr de vouloir effectuer cette action ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Oui, Supprimer",
    cancelButtonText: "Annuler !",
    confirmButtonColor: "#FF6150",
    cancelButtonColor: "#471A3",
  }).then((res) => {
    if (res.isConfirmed) {
      store.SupprimerPersonnel(id);
    }
  });
}

onMounted(() => {
  fonction.getFonction();
  //emploi.getemploi();
  store.getRole();
  store.getUtilisateur();
  store.getPersonnel();
});
</script>
<style scoped></style>
