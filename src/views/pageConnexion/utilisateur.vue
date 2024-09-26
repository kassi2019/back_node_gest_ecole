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
                    liste des utilisateurs
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
                            <th scope="col" style="width: 50%">Nom & prénoms</th>
                            <th scope="col" style="width: 25%">Email</th>
                           <th scope="col" style="width: 10%">Role</th>
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
                            <td style="border: 1px solid #000;">{{ index + 1 }}</td>
                            <td style="border: 1px solid #000;">{{ item.name }}</td>
                            <td style="border: 1px solid #000;">{{ item.email }}</td>
                            <td style="border: 1px solid #000;">{{ afficherLibelleRole(item.role_id) }}</td>
                            <td style="border: 1px solid #000;">
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

                              <button
                                type="button"
                                class="btn btn-info btn-sm"
                                title="Affectation module"
                                @click="supprimer(item.id)"
                              >
                                <i class="la la-exchange"></i> 
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
                Enregistre Rôle
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
                  >name</label
                >
                <input type="text" class="form-control" v-model="form.name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email</label
                >
                <input type="text" class="form-control" v-model="form.email" />
              </div>
              <label for="exampleFormControlInput1" class="form-label"
                >Rôle</label
              >
              <fieldset class="form-group">
                <select class="custom-select" id="customSelect" v-model="form.role_id">
                  <option>Select Option</option>
                  <option
                    v-for="item in store.gettersRole"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
              </fieldset>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Mot de passe</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.password"
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
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Role</h5>
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
                <input type="text" class="form-control" v-model="form.code" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Libelle</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="form.libelle"
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
              @click.prevent="modificationRole"
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
const id_utilisateur = JSON.parse(localStorage.getItem("userid"));
import Swal from "sweetalert2";
import { ref, reactive, onMounted } from "vue";
const modalRef = ref<HTMLDivElement | null>(null);
const modalModification = ref<HTMLDivElement | null>(null);
const store = useAuthStore();


const afficherLibelleRole = (id: number) => {
  const d_data = store.gettersRole.find(
    (item) => item.id == id
  );

  if (d_data) {
    return d_data.libelle;
  }
  return 'non renseigné';
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
  password: "",
  role_id: "",
});

function ViderChamps() {
  (form.email = ""), (form.name = ""), (form.password = ""), (form.role_id = "");
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
  const d_data = store.gettersRole.find(
    (item: { id: number }) => item.id === id
  );
  if (d_data) {
    form.code = d_data.code;
    form.libelle = d_data.libelle;
    form.id = d_data.id;
    if (modalModification.value) {
      const modalInstance = new Modal(modalModification.value);
      modalInstance.show();
    }
  } else {
    console.error(`Data with id ${id} not found`);
  }
};
function modificationRole() {
  //$v1.value.$touch();
  // if (!$v1.value.$invalid) {
  form.id = form.id;
  try {
    // isLoading.value = true;
    store.modifierRole(form).then(() => {
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
      store.SupprimerRole(id);
    }
  });
}
onMounted(() => {
  store.getRole();
  store.getUtilisateur()
});
</script>
<style scoped></style>
