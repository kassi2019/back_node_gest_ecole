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
                    <div class="table-responsive">
                      <br />
                      <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col">N°</th>
                            <th scope="col" style="width: 10%">Nom</th>
                            <th scope="col" style="width: 40%">Prénoms</th>
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
                            v-for="(item, index) in store.gettersUtilisateur"
                            :key="item.id"
                          >
                            <td style="border: 1px solid #000">
                              {{ index + 1 }}
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
                Enrégistrer Personnel
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
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Matricule</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.matricule"
                  />
                </div>
                <div class="col-md-6">
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
                    type="text"
                    class="form-control"
                    v-model="form.email"
                  />
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Date naissance</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    v-model="form.date_naissance"
                  />
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Lieu naissance</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.lieu_naissance"
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
                    >Emploi</label
                  >
                  <fieldset class="form-group">
                    <select
                      class="custom-select"
                      id="customSelect"
                      v-model="form.emploi_id"
                    >
                      <option></option>
                      <option
                        v-for="item in emploi.getteremploi"
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
                <div class="col-md-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Salaire</label
                  >
                  <input
                    type="text"
                    class="form-control"
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
                @click.prevent="AjouterFonction"
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
              <div class="col-md-6">
                <label for="exampleFormControlInput1" class="form-label"
                  >Matricule</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.matricule"
                />
              </div>
              <div class="col-md-6">
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
                <input type="text" class="form-control" v-model="form.email" />
              </div>
              <div class="col-md-6">
                <label for="exampleFormControlInput1" class="form-label"
                  >Date naissance</label
                >
                <input
                  type="date"
                  class="form-control"
                  v-model="form.date_naissance"
                />
              </div>
              <div class="col-md-6">
                <label for="exampleFormControlInput1" class="form-label"
                  >Lieu naissance</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.lieu_naissance"
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
                  >Emploi</label
                >
                <fieldset class="form-group">
                  <select
                    class="custom-select"
                    id="customSelect"
                    v-model="form.emploi_id"
                  >
                    <option></option>
                    <option
                      v-for="item in emploi.getteremploi"
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
              <div class="col-md-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Salaire</label
                >
                <input
                  type="text"
                  class="form-control"
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
              @click.prevent="modificationUtilisateur"
            >
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
import { useAuthStore } from "../../stores/utilisateurStore/Utilisateur";

import { fonctionStore } from "../../stores/parametreStore/fonction";
import { emploiStore } from "../../stores/parametreStore/emploi";
// const id_utilisateur = JSON.parse(localStorage.getItem("userid"));
import Swal from "sweetalert2";
import { ref, reactive, onMounted } from "vue";
const modalRef = ref<HTMLDivElement | null>(null);
const modalModification = ref<HTMLDivElement | null>(null);
const store = useAuthStore();
const fonction = fonctionStore();
const emploi = emploiStore();

const afficherLibelleRole = (id: number) => {
  const d_data = store.gettersRole.find((item) => item.id == id);

  if (d_data) {
    return d_data.libelle;
  }
  return "non renseigné";
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
  emploi_id: "",
  salaire: "",
  date_entre: "",
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
    (form.emploi_id = ""),
    (form.salaire = ""),
    (form.date_entre = "");
}
function AjouterFonction() {
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
      emploi_id: form.emploi_id,
      salaire: form.salaire,
      date_entre: form.date_entre,
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
    form.fonction_id = d_data.fonction_id;
    form.matricule = d_data.matricule;
    form.email = d_data.email;
    form.name = d_data.name;
    form.prenoms = d_data.prenoms;
    form.date_naissance = d_data.date_naissance;
    form.emploi_id = d_data.emploi_id;
    form.salaire = d_data.salaire;
    form.date_entre = d_data.date_entre;
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
onMounted(() => {
  fonction.getFonction();
  emploi.getemploi();
  store.getRole();
  store.getUtilisateur();
});
</script>
<style scoped></style>
