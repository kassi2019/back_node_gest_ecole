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
                    Sous Classe
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
                            <th></th>
                            <th scope="col">N°</th>
                            <th scope="col">Sous Classe</th>
                            <th scope="col" style="width: 10%">Nombre éleve</th>
                            <th
                              scope="col"
                              style="text-align: center !important; width: 10%"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          v-for="(
                            item, index
                          ) in storeSousClasse.getterSousclasseGroup"
                          :key="item.classeId"
                        >
                          <tr>
                            <td
                              style="
                                background-color: #f6e497 !important;
                                font-size: 16px !important;
                                border: 1px solid #000;
                              "
                            >
                              {{ index + 1 }}
                            </td>
                            <td
                              style="
                                background-color: #f6e497 !important;
                                font-size: 16px !important;
                                border: 1px solid #000;
                              "
                              colspan="2"
                            >
                              Classe : {{ libelleClasse(item.classeId) }}
                            </td>
                            <td
                              style="
                                border: 1px solid #000;
                                background-color: #f6e497 !important;
                                text-align: right;
                              "
                            >
                              {{ toutEtudiant(item.classeId) }}
                            </td>
                            <td
                              style="
                                border: 1px solid #000;
                                background-color: #f6e497 !important;
                                text-align: right;
                              "
                            ></td>
                          </tr>

                          <tr
                            v-for="(data, index) in listeSousClasse(
                              item.classeId
                            )"
                            :key="data.id"
                          >
                            <td style="border: 1px solid #000"></td>
                            <td style="border: 1px solid #000">
                              {{ index + 1 }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ data.code }}
                            </td>
                            <td
                              style="border: 1px solid #000; text-align: right"
                            >
                              {{ data.nombreetudiant }}
                            </td>
                            <td style="border: 1px solid #000">
                              <button
                                type="button"
                                class="btn btn-primary btn-sm"
                                title="Modifier"
                                @click="showModalDecision(data.id)"
                              >
                                <i class="la la-pencil-square"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-danger btn-sm"
                                title="Supprimer"
                                @click="supprimer(data.id)"
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
                Enregistrer Sous classe
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3 needs-validation">
                <div class="col-md-12">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Classe</label
                  >
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    v-model="form.classeId"
                  >
                    <option selected></option>
                    <option
                      v-for="item in storeclasse.getterclasse"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.libelle }}
                    </option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Nbre total de place (
                    {{ codeClasse(form.classeId) }} )</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    :value="toutEtudiant(form.classeId)"
                    disabled
                  />
                </div>
                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Nbre de place attribue aux sous classe
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    :value="placeActribuer(form.classeId)"
                    disabled
                  />
                </div>
                <div class="col-md-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Nbre de place restante (
                    {{ codeClasse(form.classeId) }} )</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    :value="
                      parseFloat(toutEtudiant(form.classeId)) -
                      parseFloat(placeActribuer(form.classeId))
                    "
                    disabled
                    v-if="placeActribuer(form.classeId)!='0'"
                  />

                   <input
                   v-else
                    type="text"
                    class="form-control"
                    :value="
                      0
                    "
                    disabled
                  />
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Code</label
                  >
                  <input type="text" class="form-control" v-model="form.code" />
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Nombre éleve/Etudiant</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    v-model="form.nombreetudiant"
                  />
                  <span
                    style="color: red"
                    v-if="
                      parseFloat(
                        parseFloat(toutEtudiant(form.classeId)) -
                          parseFloat(placeActribuer(form.classeId))
                      ) < parseFloat(form.nombreetudiant)
                    "
                    >Le nombre saisi est supperieure au nbre de place
                    restante</span
                  >
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
                @click.prevent="Enregistrementclasse"

                v-if="
                      parseFloat(
                        parseFloat(toutEtudiant(form.classeId)) -
                          parseFloat(placeActribuer(form.classeId))
                      ) >= parseFloat(form.nombreetudiant)
                    "
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
            <h5 class="modal-title">Modifier Sous Classe</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="row g-3 needs-validation">
              <div class="col-md-12">
                <label for="exampleFormControlInput1" class="form-label"
                  >Classe</label
                >
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  v-model="formmod.classeId"
                >
                  <option selected></option>
                  <option
                    v-for="item in storeclasse.getterclasse"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
              </div>
              <div class="col-md-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Code</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="formmod.code"
                />
              </div>
              <div class="col-md-6">
                <label for="exampleFormControlInput1" class="form-label"
                  >Nombre éleve/Etudiant</label
                >
                <input
                  type="number"
                  class="form-control"
                  v-model="formmod.nombreetudiant"
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
              @click.prevent="modificationclasse"
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
import { classeStore } from "../../stores/parametreStore/classe";
import { SousclasseStore } from "../../stores/parametreStore/sousClasse";
// import { formatageMontant } from "@/dependenceGlobal/monFichier";
// const id_utilisateur = JSON.parse(localStorage.getItem("userid"));
import Swal from "sweetalert2";
import { ref, reactive, onMounted } from "vue";
const modalRef = ref<HTMLDivElement | null>(null);
const modalModification = ref<HTMLDivElement | null>(null);
const storeclasse = classeStore();
const storeSousClasse = SousclasseStore();
const showModal = () => {
  if (modalRef.value) {
    const modalInstance = new Modal(modalRef.value);
    modalInstance.show();
  }
};

const form: any = reactive({
  classeId: "",

  code: "",

  nombreetudiant: "",
});
const formmod: any = reactive({
  classeId: "",
  code: "",

  nombreetudiant: "",
});
function ViderChamps() {
  (form.cycleId = ""),
    (form.libelle = ""),
    (form.code = ""),
    (form.montantscolarite = "");
  form.nombreetudiant = "";
}
function libelleClasse(id: number) {
  let data = storeclasse.getterclasse.find((item) => item.id == id);
  if (data) {
    return data.code.concat(" - ", data.libelle);
  }
  return "";
}
function codeClasse(id: number) {
  let data = storeclasse.getterclasse.find((item) => item.id == id);
  if (data) {
    return data.code;
  }
  return "";
}
function toutEtudiant(id: number) {
  let data = storeclasse.getterclasse.find((item) => item.id == id);
  if (data) {
    return data.nombreetudiant;
  }
  return "";
}
function placeActribuer(id: number) {
  return storeSousClasse.getterSousclasse
    .filter((data) => data.classeId == id)
    .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.nombreetudiant), 0)
    .toFixed(0);
}
const listeSousClasse = (id: number) => {
  return storeSousClasse.getterSousclasse.filter((item) => item.classeId == id);
};
function Enregistrementclasse() {
  // $v.value.$touch();
  //if (!$v.value.$invalid) {
  try {
    let obj: any = {
      classeId: form.classeId,

      code: form.code,

      nombreetudiant: form.nombreetudiant,
    };
    //   isLoading.value = true;
    //   console.log(obj)
    storeSousClasse.ajouterSousclasse(obj).then(() => {
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
  const d_data = storeclasse.getterclasse.find(
    (item: { id: number }) => item.id === id
  );
  if (d_data) {
    formmod.cycleId = d_data.cycleId;
    formmod.libelle = d_data.libelle;
    (formmod.montantscolarite = d_data.montantscolarite),
      (formmod.nombreetudiant = d_data.nombreetudiant),
      (formmod.code = d_data.code);

    formmod.id = d_data.id;
    if (modalModification.value) {
      const modalInstance = new Modal(modalModification.value);
      modalInstance.show();
    }
  } else {
    console.error(`Data with id ${id} not found`);
  }
};
function modificationclasse() {
  //$v1.value.$touch();
  // if (!$v1.value.$invalid) {
  formmod.id = formmod.id;
  try {
    // isLoading.value = true;
    storeSousClasse.modifierSousclasse(formmod).then(() => {
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
      storeSousClasse.SupprimerSousclasse(id);
    }
  });
}
onMounted(() => {
  storeSousClasse.getSousclasse();
  storeSousClasse.getSousclasseGroup();
  storeclasse.getclasse();
});
</script>
<style scoped></style>
