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
                    Année Scolaire
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
                            <th scope="col" style="width: 80%">Année Scolaire</th>
                            <th scope="col" style="width: 10%;">Année en cours</th>
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
                            v-for="(item, index) in anneeS.getterAnneeScolaire"
                            :key="item.id"
                          >
                            <td style="border: 1px solid #000">
                              {{ index + 1 }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ item.annee }}
                            </td>
                            <td style="border: 1px solid #000;text-align: center;" v-if="item.statut=='1'">
                            
                              <input class="form-check-input" type="radio" value={{item.annee}} id="flexCheckChecked" checked style="border: 1px #000 solid;">
                            </td>
                              <td style="border: 1px solid #000;text-align: center;" v-else>
                            
                              <input class="form-check-input" type="radio"  id="flexCheckChecked" style="border: 1px #000 solid;" @click="showModalBascule(item.id)">
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
                Enrégistre Année Scolaire
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
                  >Année Scolaire</label
                >
                <input type="text" class="form-control" v-model="form.annee" />
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
                @click.prevent="EnregistrementAnnee"
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
            <h5 class="modal-title">Modifier Année Scolaire</h5>
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
                  >Année Scolaire</label
                >
                <input type="text" class="form-control" v-model="formmod.annee" />
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
              @click.prevent="modificationAnnee"
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
      ref="modalbascule"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Année Scolaire</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
          <div style="text-align: center;">êtes-vous sûr de vouloir effectuer cette action ?</div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              
               @click="actualiser()"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-success"
              @click.prevent="faireBasculeAnnee"
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
import { anneeScolaireStore } from "../../stores/parametreStore/anneeScolaire";
// const id_utilisateur = JSON.parse(localStorage.getItem("userid"));
import Swal from "sweetalert2";
import { ref, reactive, onMounted } from "vue";
const modalRef = ref<HTMLDivElement | null>(null);
const modalModification = ref<HTMLDivElement | null>(null);

const modalbascule = ref<HTMLDivElement | null>(null);
const anneeS = anneeScolaireStore();

const showModal = () => {
  if (modalRef.value) {
    const modalInstance = new Modal(modalRef.value);
    modalInstance.show();
  }
};

const form: any = reactive({
annee: "",
  statut: "",
});
const formmod: any = reactive({
  annee: "",
  statut: "",
});
function ViderChamps() {
  (form.annee = ""), (form.statut = "");
}
function actualiser() {
  anneeS.getAnneeScolaire();
}

function EnregistrementAnnee() {
  // $v.value.$touch();
  //if (!$v.value.$invalid) {
  try {
    let obj: any = {
      annee: form.annee,
      statut: form.statut,
    };
    //   isLoading.value = true;
    //   console.log(obj)
    anneeS.ajouterAnneeScolaire(obj).then(() => {
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
  const d_data = anneeS.getterAnneeScolaire.find(
    (item: { id: number }) => item.id === id
  );
  if (d_data) {
    formmod.annee = d_data.annee;
    formmod.statut = d_data.statut;
    formmod.id = d_data.id;
    if (modalModification.value) {
      const modalInstance = new Modal(modalModification.value);
      modalInstance.show();
    }
  } else {
    console.error(`Data with id ${id} not found`);
  }
};
function modificationAnnee() {
  //$v1.value.$touch();
  // if (!$v1.value.$invalid) {
  formmod.id = formmod.id;
  try {
    // isLoading.value = true;
    anneeS.modifierAnneeScolaire(formmod).then(() => {
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
      anneeS.SupprimerAnneeScolaire(id);
    }
  });
}
function faireBasculeAnnee() {
  //$v1.value.$touch();
  // if (!$v1.value.$invalid) {
  formmod.id = formmod.id;
  try {
    // isLoading.value = true;
    anneeS.BasculeAnneeScolaire(formmod).then(() => {
      //isLoading.value = false;
      // closeModal();
    });
    // Fermer le modal après modification
    if (modalbascule.value) {
      const modalInstance = Modal.getInstance(modalbascule.value);
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


const showModalBascule = (id: number) => {
  const d_data = anneeS.getterAnneeScolaire.find(
    (item: { id: number }) => item.id === id
  );
  if (d_data) {
    formmod.annee = d_data.annee;
    formmod.statut = d_data.statut;
    formmod.id = d_data.id;
    if (modalbascule.value) {
      const modalInstance = new Modal(modalbascule.value);
      modalInstance.show();
    }
  } else {
    console.error(`Data with id ${id} not found`);
  }
};
onMounted(() => {
  
  anneeS.getAnneeScolaire();
});
</script>
<style scoped></style>
