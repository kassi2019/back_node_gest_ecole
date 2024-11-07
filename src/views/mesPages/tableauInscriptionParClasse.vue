<template>
  <div>
    <div class="table-responsive">
      <br />
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th></th>
            <th scope="col">N°</th>
            <th scope="col" style="width: 45%">Classe</th>
            <th scope="col" style="width: 13%; text-align: center">
              Scolarité
            </th>
            <th
              scope="col"
              style="width: 10%; text-align: center"
              title="Montant Versé"
            >
              Versément
            </th>
            <th scope="col" style="width: 13%">Reste a Soldé</th>
            <th
              scope="col"
              style="width: 5%; text-align: center"
              title="Nbre apprenant"
            >
              Nbre
            </th>
            <th
              scope="col"
              style="width: 20%; text-align: center"
              title="Date versement"
            >
              Date versement
            </th>
            <th scope="col" style="width: 13%">Solde</th>
            <th scope="col" style="text-align: center !important; width: 20%">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          <template
            v-for="(item, index) in storeInscription.getterinscriptionClasse"
            :key="item.ClasseId"
          >
            <tr>
              <td style="cursor: pointer; border: 1px solid #000">
                <i
                  class="la la-angle-right"
                  @click="auClik(item.ClasseId)"
                  v-if="formclik.variable == 0"
                ></i>
                <i
                  class="la la-angle-down"
                  @click="auClik(item.ClasseId)"
                  v-else
                ></i>
              </td>

              <td style="border: 1px solid #000">
                {{ index + 1 }}
              </td>
              <td style="border: 1px solid #000">
                {{ item.classe }}
              </td>
              <td style="border: 1px solid #000; text-align: right">
                {{
                  formatageMontant(
                    parseFloat(
                      MontantParClasse(item.ClasseId) *
                        parseFloat(
                          afficherApprenantParClasse(item.ClasseId).length
                        )
                    )
                  )
                }}
              </td>
              <td style="border: 1px solid #000; text-align: right">
                {{ formatageMontant(parseFloat(item.montant_paye)) }}
              </td>
              <td style="border: 1px solid #000; text-align: right">
                {{
                  formatageMontant(
                    parseFloat(
                      MontantParClasse(item.ClasseId) *
                        parseFloat(
                          afficherApprenantParClasse(item.ClasseId).length
                        )
                    )-
                      parseFloat(item.montant_paye)
                  )
                }}
              </td>
              <td
                style="
                  border: 1px solid #000;
                  text-align: center;
                  color: red;
                  font-weight: bold;
                "
              >
                {{ afficherApprenantParClasse(item.ClasseId).length }}
              </td>
              <td
                style="
                  border: 1px solid #000;
                  text-align: center;
                  color: red;
                  font-weight: bold;
                "
              ></td>
              <td
                style="
                  border: 1px solid #000;
                  text-align: center;
                  color: red;
                  font-weight: bold;
                "
                v-if="
                  parseFloat( parseFloat(
                      MontantParClasse(item.ClasseId) *
                        parseFloat(
                          afficherApprenantParClasse(item.ClasseId).length
                        )
                    )) !=
                  parseFloat(item.montant_paye)
                "
              >
                NON
              </td>
              <td
                style="
                  border: 1px solid #000;
                  text-align: center;
                  color: #1d702d;
                  font-weight: bold;
                "
                v-else
              >
                OUI
              </td>
              <td
                style="
                  border: 1px solid #000;
                  text-align: right;
                  font-style: italic;
                "
              ></td>
              <!-- <td style="border: 1px solid #000">

              <button
                type="button"
                class="btn btn-primary btn-sm"
                title="detail"
                @click="auClik(item.ClasseId)"
              >
                <i class="la la-pencil-square">Détail{{ formclik.variable }}</i>
              </button>
            </td> -->
            </tr>
            <template
              v-for="data in afficherApprenantParClasse(item.ClasseId)"
              :key="data.EtudiantId"
            >
              <tr v-if="data.ClasseId == formclik.variable">
                <td style="border: 1px solid #000"></td>
                <td style="cursor: pointer; border: 1px solid #000">
                  <i
                    class="la la-angle-right"
                    @click="auClikApprenant(data.EtudiantId)"
                    v-if="formclik.variable1 == 0"
                  ></i>
                  <i
                    class="la la-angle-down"
                    @click="auClikApprenant(data.EtudiantId)"
                    v-else
                  ></i>
                </td>

                <td
                  style="
                    border: 1px solid #000;

                    font-style: italic;
                  "
                >
                  {{ data.afficherEtudiant }}
                </td>

                <td
                  style="
                    border: 1px solid #000;
                    text-align: right;
                    font-style: italic;
                  "
                >
                  {{ formatageMontant(parseFloat(data.montant_scolarite)) }}
                </td>
                <td
                  style="
                    border: 1px solid #000;
                    text-align: right;
                    font-style: italic;
                  "
                >
                  {{ formatageMontant(parseFloat(data.montant_paye)) }}
                </td>
                <td
                  style="
                    border: 1px solid #000;
                    text-align: right;
                    font-style: italic;
                  "
                >
                  {{
                    formatageMontant(
                      parseFloat(data.montant_scolarite) -
                        parseFloat(data.montant_paye)
                    )
                  }}
                </td>
                <td
                  style="
                    border: 1px solid #000;
                    text-align: right;
                    font-style: italic;
                  "
                ></td>
                <td
                  style="
                    border: 1px solid #000;
                    text-align: right;
                    font-style: italic;
                  "
                ></td>
                <td
                  style="
                    border: 1px solid #000;
                    text-align: center;
                    color: red;
                    font-weight: bold;
                  "
                  v-if="
                    parseFloat(data.montant_scolarite) !=
                    parseFloat(data.montant_paye)
                  "
                >
                  NON
                </td>
                <td
                  style="
                    border: 1px solid #000;
                    text-align: center;
                    color: #1d702d;
                    font-weight: bold;
                  "
                  v-else
                >
                  OUI
                </td>
                <!-- <td
                  style="
                    border: 1px solid #000;
                    text-align: right;
                    font-style: italic;
                  "
                >
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
                </td> -->
                <!-- <td
                style="
                  border: 1px solid #000;
                  text-align: center;
                  color: #1d702d;
                  font-weight: bold;
                "
              >
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  title="detail"
                  @click="auClikApprenant(data.EtudiantId)"
                >
                  <i class="la la-pencil-square"
                    >Détail{{ formclik.variable1 }}</i
                  >
                </button>
              </td> -->
              </tr>

              <template
                v-for="data1 in afficherTypeVersementParClasseEtApprenant(
                  item.ClasseId,
                  data.EtudiantId
                )"
                :key="data1.id"
              >
                <tr v-if="data.EtudiantId == formclik.variable1">
                  <td style="border: 1px solid #000"></td>
                  <td style="border: 1px solid #000"></td>
                  <td
                    style="
                      cursor: pointer;
                      text-align: right;
                      border: 1px solid #000;
                    "
                  >
                    <i class="la la-hand-o-right"></i>
                  </td>
                  <td
                    style="
                      border: 1px solid #000;

                      font-style: italic;
                    "
                  >
                    {{ libelleTypeVersement(data1.type_versement_id) }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000;
                      text-align: right;
                      font-style: italic;
                    "
                  >
                    {{ formatageMontant(parseFloat(data1.montant_verse)) }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000;
                      text-align: right;
                      font-style: italic;
                    "
                  >
                    {{ formatageMontant(parseFloat(0)) }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000;
                      text-align: right;
                      font-style: italic;
                    "
                  >
                    {{ formatageMontant(parseFloat(0)) }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000;
                      text-align: right;
                      font-style: italic;
                    "
                  >
                    {{ formaterDate(data1.date_versement) }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000;
                      text-align: right;
                      font-style: italic;
                    "
                  ></td>
                  <td
                    style="
                      border: 1px solid #000;
                      text-align: right;
                      font-style: italic;
                    "
                  ></td>
                </tr>
              </template>
            </template>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { useRouter } from "vue-router";
import { Modal } from "bootstrap";

// const id_utilisateur = JSON.parse(localStorage.getItem("userid"));
import Swal from "sweetalert2";
import { ref, reactive, onMounted } from "vue";
import { inscriptionStore } from "../../stores/parametreStore/inscription";
import { typeversementStore } from "../../stores/parametreStore/typeVersement";
import { classeStore } from "../../stores/parametreStore/classe";
import { formatageMontant,formaterDate } from "@/dependenceGlobal/monFichier";
const storeclasse = classeStore();
const modalRef = ref<HTMLDivElement | null>(null);
const modalModification = ref<HTMLDivElement | null>(null);
import { useRouter } from "vue-router";
const storeInscription = inscriptionStore();
const storetypeVersement = typeversementStore();
const router = useRouter();
const showModal = () => {
  if (modalRef.value) {
    const modalInstance = new Modal(modalRef.value);
    modalInstance.show();
  }
};
const goToModule = (id: number) => {
  router.push({ name: "tableauInscriptionParEtudiant", params: { id } });
};
const form: any = reactive({
  typematiereId: "",
  libelle: "",
  code: "",
});
const formmod: any = reactive({
  typematiereId: "",
  libelle: "",
  code: "",
});
const formclik: any = reactive({
  variable: 0,
  variable1: 0,
});
const auClik = (id: number) => {
  if (formclik.variable == 0) {
    return (formclik.variable = id);
  } else {
    formclik.variable = 0;
    return (formclik.variable1 = 0);
  }
};
const auClikApprenant = (id: number) => {
  if (formclik.variable1 == 0) {
    return (formclik.variable1 = id);
  } else {
    return (formclik.variable1 = 0);
  }
};

function MontantParClasse(id: number) {
  let data = storeclasse.getterclasse.find((item) => item.id == id);
  if (data) {
    return data.montantscolarite;
  }
  return 0;
}
function libelleTypeVersement(id: number) {
  let data = storetypeVersement.gettertypeversement.find(
    (item) => item.id == id
  );
  if (data) {
    return data.libelle;
  }
  return 0;
}
function afficherTypeVersementParClasseEtApprenant(id1: number, id: number) {
  return storeInscription.getterinscription.filter(
    (item) => item.ClasseId == id1 && item.EtudiantId == id
  );
}
function afficherApprenantParClasse(id: number) {
  return storeInscription.getterinscriptionApprenant.filter(
    (item) => item.ClasseId == id
  );
}
function ViderChamps() {
  (form.typematiereId = ""), (form.libelle = ""), (form.code = "");
}

// function supprimer(id: any) {
//   Swal.fire({
//     title: "Suppression",
//     text: "êtes-vous sûr de vouloir effectuer cette action ?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Oui, Supprimer",
//     cancelButtonText: "Annuler !",
//     confirmButtonColor: "#FF6150",
//     cancelButtonColor: "#471A3",
//   }).then((res) => {
//     if (res.isConfirmed) {
//       storematiere.Supprimermatiere(id);
//     }
//   });
// }
onMounted(() => {
  // storetypeVersement.gettypeversement();
});
</script>
<style scoped></style>
