<template>
  <!-- <TheHeader1 />
  <br /><br /> -->
  <div>
    <nav
      class="navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light"
      style="background-color: #262d47"
    >
      <img
        src="/theme-assets/images/portrait/small/avatar-s-19.png"
        width="50"
        height="50"
        class="imagelogo"
      />
      <br />
      <h3 style="cursor: pointer; color: #fff">
        {{ nom_utilisateur }} {{ prenoms_utilisateur }}
      </h3>
      <h5 @click="logout()" style="cursor: pointer; color: #fff">
        Se déconnecter
      </h5>
    </nav>
    <br />
    <br />
    <!-- premiere ligne -->

    <div class="row" style="padding: 50px 20px 0px 0px">
      <div
        class="col-xl-4 col-lg-6 col-md-12"
        v-if="codeModule(id_utilisateur) == 1"
      >
        <div
          class="card pull-up ecom-card-1 bg-white"
          style="
            border-radius: 25px 20px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;

            cursor: pointer;
          "
          @click="goToModule(5)"
        >
          <div class="card-content ecom-card2 height-180">
            <h5
              class="text-muted danger position-absolute p-1"
              style="
                font-weight: bolder !important;
                text-align: center !important;
              "
            ></h5>
            <div>
              <i class="la la-cog success font-large-1 float-right p-1"></i>
            </div>
            <br />
            <br />
            <br />
            <h3 style="font-weight: bold">PARAMETRAGE</h3>
          </div>
        </div>
      </div>

      <div
        class="col-xl-4 col-lg-6 col-md-12"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        v-else
      >
        <div
          class="card pull-up ecom-card-1 bg-white"
          style="
            border-radius: 25px 20px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;

            cursor: pointer;
          "
        >
          <div class="card-content ecom-card2 height-180">
            <h5
              class="text-muted danger position-absolute p-1"
              style="
                font-weight: bolder !important;
                text-align: center !important;
              "
            ></h5>
            <div>
              <i class="la la-cog success font-large-1 float-right p-1"></i>
            </div>
            <br />
            <br />
            <br />
            <h3 style="font-weight: bold">PARAMETRAGE</h3>
          </div>
        </div>
      </div>

      <div
        class="col-xl-4 col-lg-6 col-md-12"
        v-if="codeModule2(id_utilisateur) == 1"
      >
        <div
          class="card pull-up ecom-card-1 bg-white"
          style="
            border-radius: 25px 20px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;

            cursor: pointer;
          "
          @click="goToModule(2)"
        >
          <div class="card-content ecom-card2 height-180">
            <h5
              class="text-muted danger position-absolute p-1"
              style="
                font-weight: bolder !important;
                text-align: center !important;
              "
            ></h5>
            <div>
              <i class="la la-book success font-large-1 float-right p-1"></i>
            </div>
            <br />
            <br />
            <br />
            <h3 style="font-weight: bold">GESTION DES INSCRIPTIONS</h3>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-6 col-md-12" v-else>
        <div
          class="card pull-up ecom-card-1 bg-white"
          style="
            border-radius: 25px 20px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;

            cursor: pointer;
          "
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <div class="card-content ecom-card2 height-180">
            <h5
              class="text-muted danger position-absolute p-1"
              style="
                font-weight: bolder !important;
                text-align: center !important;
              "
            ></h5>
            <div>
              <i class="la la-book success font-large-1 float-right p-1"></i>
            </div>
            <br />
            <br />
            <br />
            <h3 style="font-weight: bold">GESTION DES INSCRIPTIONS</h3>
          </div>
        </div>
      </div>

      <div
        class="col-xl-4 col-lg-6 col-md-12"
        v-if="codeModule3(id_utilisateur) == 1"
      >
        <div
          class="card pull-up ecom-card-1 bg-white"
          style="
            border-radius: 25px 20px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;

            cursor: pointer;
          "
          @click="goToModule(3)"
        >
          <div class="card-content ecom-card2 height-180">
            <h5
              class="text-muted danger position-absolute p-1"
              style="
                font-weight: bolder !important;
                text-align: center !important;
              "
            ></h5>
            <div>
              <i class="la la-edit success font-large-1 float-right p-1"></i>
            </div>
            <br />
            <br />
            <br />
            <h3 style="font-weight: bold">SUIVI DES MOYENNES</h3>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-6 col-md-12" v-else>
        <div
          class="card pull-up ecom-card-1 bg-white"
          style="
            border-radius: 25px 20px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;
            cursor: pointer;
          "
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <div class="card-content ecom-card2 height-180">
            <h5
              class="text-muted danger position-absolute p-1"
              style="
                font-weight: bolder !important;
                text-align: center !important;
              "
            ></h5>
            <div>
              <i class="la la-edit success font-large-1 float-right p-1"></i>
            </div>
            <br />
            <br />
            <br />
            <h3 style="font-weight: bold">SUIVI DES MOYENNES</h3>
          </div>
        </div>
      </div>
      <!-- <div class="col-xl-4 col-lg-6 col-md-12">
      <div
        class="card pull-up ecom-card-1 bg-white"
        style="
          border-radius: 25px 20px 50px;
          border-color: #fff !important;
          border-style: solid;
          box-shadow: 15px -10px #f9d531;

          cursor: pointer;
        "
        @click="goToModule(4)"
      >
        <div class="card-content ecom-card2 height-180">
          <h5
            class="text-muted danger position-absolute p-1"
            style="
              font-weight: bolder !important;
              text-align: center !important;
            "
          ></h5>
          <div>
            <i class="la la-file-text success font-large-1 float-right p-1"></i>
          </div>
          <br />
          <br />
          <br />
          <h3 style="font-weight: bold">GESTION DES RAPPORTS</h3>
        </div>
      </div>
    </div> -->

      <!-- <div class="col-xl-4 col-lg-6 col-md-12">
      <div
        class="card pull-up ecom-card-1 bg-white"
        style="
          border-radius: 25px 20px 50px;
          border-color: #fff !important;
          border-style: solid;
          box-shadow: 15px -10px #f9d531;

          cursor: pointer;
        "
        @click="goToModule(5)"
      >
        <div class="card-content ecom-card2 height-180">
          <h5
            class="text-muted danger position-absolute p-1"
            style="
              font-weight: bolder !important;
              text-align: center !important;
            "
          ></h5>
          <div>
            <i class="la la-users success font-large-1 float-right p-1"></i>
          </div>
          <br />
          <br />
          <br />
          <h3 style="font-weight: bold">GESTION DES UTILISATEURS</h3>
        </div>
      </div>
    </div> -->
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
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-body">
              <h3 style="text-align: center">
                VOUS N'AVEZ PAS ACCES A CE MODULE
                <p>VEUILLEZ CONTACTER L'ADMINITRATEUR SVP ?</p>
              </h3>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, computed, onMounted, watch } from "vue";

// import TheHeader1 from "../../layouts/TheHeader.vue";
import { Modal } from "bootstrap";
import { useRouter } from "vue-router";
import { Affectation } from "../../stores/parametreStore/affectation";
const id_utilisateur = JSON.parse(localStorage.getItem("userid"));
const nom_utilisateur = JSON.parse(localStorage.getItem("username"));
const prenoms_utilisateur = JSON.parse(localStorage.getItem("prenomuser"));
import { useAuthStore } from "../../stores/utilisateurStore/Utilisateur";

const authStore = useAuthStore();
const router = useRouter();
const storeAffectation = Affectation();
const modalRef = ref<HTMLDivElement | null>(null);
const showModal = () => {
  if (modalRef.value) {
    const modalInstance = new Modal(modalRef.value);
    modalInstance.show();
  }
};
const logout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  await authStore.logout;
  router.replace("/page-connexion");
};
const goToModule = (id: number) => {
  const user = JSON.parse(localStorage.getItem("token") || "{}");
  localStorage.setItem("module_app", id.toString());
  router.push({ name: "interfaceAccueil", params: { id } });
};
const codeModule = (id: number) => {
  const d_data = storeAffectation.getterAffectation.find(
    (item) => item.utilisateur_id == id && item.code_module == 1
  );

  if (d_data) {
    return 1;
  }
  return 0;
};
const codeModule2 = (id: number) => {
  const d_data = storeAffectation.getterAffectation.find(
    (item) => item.utilisateur_id == id && item.code_module == 2
  );

  if (d_data) {
    return 1;
  }
  return 0;
};
const codeModule3 = (id: number) => {
  const d_data = storeAffectation.getterAffectation.find(
    (item) => item.utilisateur_id == id && item.code_module == 3
  );

  if (d_data) {
    return 1;
  }
  return 0;
};
onMounted(() => {
  storeAffectation.getAffecter();
});
</script>
<style scoped>
.imagelogo {
  border-radius: 50%;
  width: 7%;
  height: 10%;
  border: 2px solid #000;
  float: left;
}

/* .imgperso{

} */
</style>
