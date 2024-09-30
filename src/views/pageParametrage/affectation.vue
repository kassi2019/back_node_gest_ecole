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
                    Affectation des module
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

                            <th scope="col" style="width: 80%">Module</th>
                            <th
                              scope="col"
                              style="text-align: center !important"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody v-for="(item,index) in storeUtilisateur.gettersUtilisateur"
                            :key="item.id">
                            <tr>
                                <td style="background-color:#F6E497 !important;font-size: 16px!important;">{{ index+1 }}</td>
                                <td style="background-color:#F6E497 !important;font-size: 16px!important;" colspan="4">{{ item.matricule }}-{{ item.name }}-{{ item.prenoms }}</td>
                            </tr>
                          <tr
                            v-for="(data,index) in listePersonneAffecter(item.id)" :key="data.id"
                          >
                          <td></td>
                            <td style="border: 1px solid #000">
                              {{ index + 1 }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ libelleModule(data.code_module) }}
                            </td>
                            <!-- <td style="border: 1px solid #000">
                              {{ data.libelle }}
                            </td> -->
                            <td style="border: 1px solid #000">
                              <button
                                type="button"
                                class="btn btn-primary btn-sm"
                                title="Modifier"
                                
                              >
                                <i class="la la-pencil-square"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-danger btn-sm"
                                title="Supprimer"
                                
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
              <h5 class="modal-title" id="staticBackdropLabel">Affectation</h5>
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
                    >Utilisateur</label
                  >
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    v-model="form.utilisateur_id"
                  >
                    <option selected></option>
                    <option
                      v-for="item in storeUtilisateur.gettersUtilisateur"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.matricule }}/{{ item.name }}/{{ item.prenoms }}
                    </option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Module</label
                  >
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    v-model="form.code_module"
                  >
                    <option></option>
                    <option
                      v-for="item in storeUtilisateur.getterModule"
                      :key="item.id"
                      :value="item.code"
                    >
                      {{ item.libelle }}
                    </option>
                  </select>
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
                @click.prevent="Enregistrementaffectation"
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
            <h5 class="modal-title">Modifier classe</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="row g-3 needs-validation"></form>
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
import { useAuthStore } from "../../stores/utilisateurStore/Utilisateur";
import { Affectation } from "../../stores/parametreStore/affectation";
// const id_utilisateur = JSON.parse(localStorage.getItem("userid"));
import Swal from "sweetalert2";
import { ref, reactive, onMounted } from "vue";
const modalRef = ref<HTMLDivElement | null>(null);
const modalModification = ref<HTMLDivElement | null>(null);
const storeUtilisateur = useAuthStore();
const storeAffectation = Affectation();



const showModal = () => {
  if (modalRef.value) {
    const modalInstance = new Modal(modalRef.value);
    modalInstance.show();
  }
};
const FormDataDossier = reactive({
  module_id: 0,
});
const form: any = reactive({
  utilisateur_id: "",
  code_module: "",
});
const formmod: any = reactive({
  cycleId: "",
  libelle: "",
  code: "",
});
function deleteItem(item: number) {
  if (item > -1) {
    storeAffectation.tableauBudget.splice(item, 1);
  }
}
const libelleModule = (code: number) => {
  const d_data = storeUtilisateur.getterModule.find((item) => item.code == code);

  if (d_data) {
    return d_data.libelle;
  }
  return 0;
};
const listePersonneAffecter = (id: number) => {
  return storeAffectation.getterAffectation.filter(
    (item) => item.utilisateur_id == id
  );

};
function ViderChamps() {
  (form.code_module = "")
}
function Enregistrementaffectation() {
  // $v.value.$touch();
  //if (!$v.value.$invalid) {
  try {
    let obj: any = {
      utilisateur_id: form.utilisateur_id,
      code_module: form.code_module,
    };
    //   isLoading.value = true;
    //   console.log(obj)
    storeAffectation.ajouterAffectation(obj).then(() => {
      ViderChamps();
      // isLoading.value = false;
    });
  } catch (error) {
    console.error("Enregistrement échoué", error);
    // isLoading.value = false;
  }
  // } else {
  //   console.log($v);
  // }
}

onMounted(() => {
  storeUtilisateur.getModule();
  storeUtilisateur.getUtilisateur();
  storeAffectation.getAffecter()
});
</script>
<style scoped></style>
