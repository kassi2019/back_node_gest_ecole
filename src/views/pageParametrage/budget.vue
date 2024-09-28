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
                    budget
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
                            <th scope="col" style="width: 75%">Nature Economique</th>
                            <th scope="col" style="width: 10%">montant</th>
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
                            v-for="(item, index) in storebudget.getterbudget"
                            :key="item.id"
                          >
                            <td style="border: 1px solid #000">
                              {{ index + 1 }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ libelleNatureEconomique(item.economiqueId) }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ formatageMontant(parseFloat(item.montant)) }}
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
                Enregistrer budget
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
                  >Budget Global</label
                >
                <input
                  type="text"
                  class="form-control"
                  :value="totalMontant"
                  disabled
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Nature Economique</label
                >
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  v-model="form.economiqueId"
                >
                  <option selected></option>
                  <option
                    v-for="item in storeeconomique.gettereconomique"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.code }}-{{ item.libelle }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >montant</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.montant"
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
                @click.prevent="Enregistrementbudget"
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
            <h5 class="modal-title">Modifier budget</h5>
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
                  >Nature Economique</label
                >
                <select
                  class="form-select form-select-lg mb-3"
                  aria-label=".form-select-lg example"
                  v-model="formmod.economiqueId"
                >
                  <option selected></option>
                  <option
                    v-for="item in storeeconomique.gettereconomique"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.code }}-{{ item.libelle }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >montant</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="formmod.montant"
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
              @click.prevent="modificationbudget"
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
import { budgetStore } from "../../stores/parametreStore/budget";
import { economiqueStore } from "../../stores/parametreStore/economique";
import { associeStructureStore } from "../../stores/parametreStore/associeStructure";
import {formatageMontant} from '@/dependenceGlobal/monFichier'
// const id_utilisateur = JSON.parse(localStorage.getItem("userid"));
import Swal from "sweetalert2";
import { ref, reactive, onMounted,computed } from "vue";
const modalRef = ref<HTMLDivElement | null>(null);
const modalModification = ref<HTMLDivElement | null>(null);
const storebudget = budgetStore();
const storeeconomique = economiqueStore();
const storeassocie = associeStructureStore();
const showModal = () => {
  if (modalRef.value) {
    const modalInstance = new Modal(modalRef.value);
    modalInstance.show();
  }
};
const totalMontant = computed(() => {
  return storeassocie.getterassocieStructure

    .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant), 0)
    .toFixed(0);
});
const form: any = reactive({
  economiqueId: "",
  montant: "",
});
const formmod: any = reactive({
  economiqueId: "",
  montant: "",
});
function ViderChamps() {
  (form.economiqueId = ""), (form.montant = "");
}
function libelleNatureEconomique(id: number) {
  let data = storeeconomique.gettereconomique.find((item) => item.id == id);
  if (data) {
    return data.code.concat(' ',data.libelle);
  }
  return "";
}
function Enregistrementbudget() {
  // $v.value.$touch();
  //if (!$v.value.$invalid) {
  try {
    let obj: any = {
      economiqueId: form.economiqueId,
      montant: form.montant,
    };
    //   isLoading.value = true;
    //   console.log(obj)
    storebudget.ajouterbudget(obj).then(() => {
      ViderChamps();
      // isLoading.value = false;
    });
  } catch (error) {
    console.error("Enregistrement échoué", error);
   
  }

}

const showModalDecision = (id: number) => {
  const d_data = storebudget.getterbudget.find(
    (item: { id: number }) => item.id === id
  );
  if (d_data) {
    formmod.economiqueId = d_data.economiqueId;
    formmod.montant = d_data.montant;
    formmod.id = d_data.id;
    if (modalModification.value) {
      const modalInstance = new Modal(modalModification.value);
      modalInstance.show();
    }
  } else {
    console.error(`Data with id ${id} not found`);
  }
};
function modificationbudget() {
  //$v1.value.$touch();
  // if (!$v1.value.$invalid) {
  formmod.id = formmod.id;
  try {
    // isLoading.value = true;
    storebudget.modifierbudget(formmod).then(() => {
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
      storebudget.Supprimerbudget(id);
    }
  });
}
onMounted(() => {
    storeeconomique.geteconomique();
  storeassocie.getassocieStructure();
  storebudget.getbudget();
});
</script>
<style scoped></style>
