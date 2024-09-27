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
                  <h5
                    class="text-muted danger position-absolute p-1"
                    style="color: black !important"
                  >
                    Etablissement
                  </h5>
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
                            <th scope="col" style="width: 45%">
                              Nom établissement
                            </th>
                            <th scope="col" style="width: 15%">Boite postal</th>
                            <th scope="col" style="width: 15%">Fondateur</th>
                            <th scope="col" style="width: 15%">N° agrement</th>
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
                            ) in docEtablissement.getteretablissement"
                            :key="item.id"
                          >
                            <td style="border: 1px solid #000">
                              {{ index + 1 }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ item.libelle }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ item.boite_postal }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ item.fondateur }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ item.numero_agrement }}
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
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Enrégistrer Etablissement
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Nom établissement</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.libelle"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Boite postal</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.boite_postal"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Fondateur</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.fondateur"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >N° agrement</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.numero_agrement"
                />
              </div>
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
                @click.prevent="EnregistrementEtablissement"
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
            <h5 class="modal-title">Modifier Etablissement</h5>
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
                  >Nom établissement</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="formmod.libelle"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Boite postal</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="formmod.boite_postal"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Fondateur</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="formmod.fondateur"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >N° agrement</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="formmod.numero_agrement"
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
              @click.prevent="modificationEtablissement"
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
import { etablissementStore } from "../../stores/parametreStore/etablissement";
// const id_utilisateur = JSON.parse(localStorage.getItem("userid"));
import Swal from "sweetalert2";
import { ref, reactive, onMounted } from "vue";
const modalRef = ref<HTMLDivElement | null>(null);
const modalModification = ref<HTMLDivElement | null>(null);

const modalbascule = ref<HTMLDivElement | null>(null);
const docEtablissement = etablissementStore();

const showModal = () => {
  if (modalRef.value) {
    const modalInstance = new Modal(modalRef.value);
    modalInstance.show();
  }
};

const form: any = reactive({
  libelle: "",
  boite_postal: "",
  fondateur: "",
  numero_agrement: "",
});
const formmod: any = reactive({
  libelle: "",
  boite_postal: "",
  fondateur: "",
  numero_agrement: "",
});
function ViderChamps() {
  (form.libelle = ""),
    (form.boite_postal = ""),
    (form.fondateur = ""),
    (form.numero_agrement = "");
}
function actualiser() {
  docEtablissement.getetablissement();
}

function EnregistrementEtablissement() {
  // $v.value.$touch();
  //if (!$v.value.$invalid) {
  try {
    let obj: any = {
      libelle: form.libelle,
      boite_postal: form.boite_postal,
      fondateur: form.fondateur,
      numero_agrement: form.numero_agrement,
    };
    //   isLoading.value = true;
    //   console.log(obj)
    docEtablissement.ajouteretablissement(obj).then(() => {
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
  const d_data = docEtablissement.getteretablissement.find(
    (item: { id: number }) => item.id === id
  );
  if (d_data) {
    formmod.libelle = d_data.libelle;
    formmod.boite_postal = d_data.boite_postal;
    formmod.fondateur = d_data.fondateur;
    formmod.numero_agrement = d_data.numero_agrement;
    formmod.id = d_data.id;
    if (modalModification.value) {
      const modalInstance = new Modal(modalModification.value);
      modalInstance.show();
    }
  } else {
    console.error(`Data with id ${id} not found`);
  }
};
function modificationEtablissement() {
  //$v1.value.$touch();
  // if (!$v1.value.$invalid) {
  formmod.id = formmod.id;
  try {
    // isLoading.value = true;
    docEtablissement.modifieretablissement(formmod).then(() => {
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
      docEtablissement.Supprimeretablissement(id);
    }
  });
}

onMounted(() => {
  docEtablissement.getetablissement();
});
</script>
<style scoped></style>
