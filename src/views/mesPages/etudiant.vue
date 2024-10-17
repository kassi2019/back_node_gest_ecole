<template>
  <div>
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-body">
          <div class="card">
            <div class="col-xl-12 col-lg-12 col-md-12">
              <div class="ecom-card-1 bg-white">
                <div class="card-content">
                  <!-- <h6
                    class="text-muted danger position-absolute p-1"
                    style="color: black !important"
                  >
                    Fiche d'inscription
                  </h6> -->
                  <br />
                  <form-wizard shape="square" color="#3498db">
                    <tab-content title="IDENTITE DE L’ELEVE ">
                      <form class="row g-3">
                        <div class="col-md-2">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
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
                        <div class="col-md-2">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Matricule</label
                          >
                          <input type="text" class="form-control" v-model="form.matricule" />
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Nom</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="basicInput"
                            v-model="form.nom"
                          />
                        </div>
                        <div class="col-md-5">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Prénoms</label
                          >
                          <input type="text" class="form-control" v-model="form.prenoms"/>
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Date naissance</label
                          >
                          <input type="date" class="form-control" v-model="form.date_naissance" />
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Lieu naissance</label
                          >
                          <input type="text" class="form-control"  v-model="form.lieu_naissance"/>
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Lieu d'habitation</label
                          >
                          <input type="text" class="form-control" v-model="form.lieu_habitation" />
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Nationalité</label
                          >
                          <input type="text" class="form-control"  v-model="form.nationalite"/>
                        </div>
                        <div class="col-md-4">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Télephone de l'enfant ( WhatsApp )</label
                          >
                          <input type="text" class="form-control"  v-model="form.telephone_etudiant"/>
                        </div>
                        <div class="col-md-4">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Etablissement d'origine</label
                          >
                          <input type="text" class="form-control" v-model="form.etablissement_id"/>
                        </div>
                        <div class="col-md-4">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Classe antérieure</label
                          >
                          <input type="text" class="form-control" />
                        </div>
                      </form>
                    </tab-content>
                    <tab-content title="IDENTITE SUR LES PARENTS">
                      <fieldset class="border p-4 rounded">
                        <form class="row g-3">
                          <div class="col-md-4">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios2"
                                value="0"
                                v-model="form.info_parent"
                              />
                              <label
                                class="form-check-label"
                                for="exampleRadios2"
                              >
                                Info sur le père
                              </label>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios2"
                                value="1"
                                v-model="form.info_parent"
                              />
                              <label
                                class="form-check-label"
                                for="exampleRadios2"
                              >
                                Info sur la mère
                              </label>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios2"
                                value="2"
                                v-model="form.info_parent"
                              />
                              <label
                                class="form-check-label"
                                for="exampleRadios2"
                              >
                                info sur le tuteur
                              </label>
                            </div>
                          </div>
                        </form>
                      </fieldset>
                      <fieldset
                        class="border p-4 rounded"
                        v-if="form.info_parent == 0"
                      >
                        <!-- <legend class="w-auto px-2">
                          Information Sur le père
                        </legend> -->
                        <form class="row g-3">
                          <div class="col-md-9">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Nom et Prénoms du père</label
                            >
                            <input type="text" class="form-control" v-model="form.nom_prenom_pere" />
                          </div>
                          
                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Profession du père</label
                            >
                            <input type="text" class="form-control" v-model="form.profession_pere" />
                          </div>

                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone domicile</label
                            >
                            <input type="text" class="form-control" v-model="form.telephone_domicile_pere"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone Bureau</label
                            >
                            <input type="text" class="form-control"  v-model="form.telephone_bureau_pere"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone mobile ( WhatsApp)</label
                            >
                            <input type="text" class="form-control" v-model="form.telephone_mobile_pere"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Email</label
                            >
                            <input type="text" class="form-control" v-model="form.email_pere"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Adresse Postal</label
                            >
                            <input type="text" class="form-control" v-model="form.adresse_postal_pere" />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Lieu d'Habitation</label
                            >
                            <input type="text" class="form-control"  v-model="form.lieu_habitation_pere"/>
                          </div>
                        </form>
                      </fieldset>
                      <fieldset
                        class="border p-4 rounded"
                        v-if="form.info_parent == 1"
                      >
                        <!-- <legend class="w-auto px-2">
                          Information Sur la mère
                        </legend> -->
                        <form class="row g-3">
                          <div class="col-md-9">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Nom && Prénoms de la mère</label
                            >
                            <input type="text" class="form-control" v-model="form.nom_prenom_mere" />
                          </div>
                         
                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Profession
                            </label>
                            <input type="text" class="form-control" v-model="form.profession_mere" />
                          </div>

                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone domicile</label
                            >
                            <input type="text" class="form-control"  v-model="form.telephone_domicile_mere"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone Bureau</label
                            >
                            <input type="text" class="form-control"  v-model="form.telephone_bureau_mere"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone mobile ( WhatsApp)</label
                            >
                            <input type="text" class="form-control"  v-model="form.telephone_mobile_mere"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Email</label
                            >
                            <input type="text" class="form-control" v-model="form.email_mere" />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Adresse Postal</label
                            >
                            <input type="text" class="form-control"  v-model="form.adresse_postal_mere"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Lieu d'Habitation</label
                            >
                            <input type="text" class="form-control" v-model="form.lieu_habitation_mere" />
                          </div>
                        </form>
                      </fieldset>

                      <fieldset
                        class="border p-4 rounded"
                        v-if="form.info_parent == 2"
                      >
                        <!-- <legend class="w-auto px-2">
                          Information Sur le Tuteur
                        </legend> -->
                        <form class="row g-3">
                          <div class="col-md-9">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Nom && Prénoms du Tuteur</label
                            >
                            <input type="text" class="form-control"  v-model="form.nom_prenom_tuteur"/>
                          </div>
                         
                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Profession</label
                            >
                            <input type="text" class="form-control" v-model="form.profession_tuteur"/>
                          </div>

                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone domicile</label
                            >
                            <input type="text" class="form-control" v-model="form.telephone_domicile_tuteur"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone Bureau</label
                            >
                            <input type="text" class="form-control" v-model="form.telephone_bureau_tuteur"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone mobile ( WhatsApp)</label
                            >
                            <input type="text" class="form-control"  v-model="form.telephone_mobile_tuteur"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Email</label
                            >
                            <input type="text" class="form-control"  v-model="form.email_tuteur"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Adresse Postal</label
                            >
                            <input type="text" class="form-control" v-model="form.adresse_postal_tuteur"/>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Lieu d'Habitation</label
                            >
                            <input type="text" class="form-control" v-model="form.lieu_habitation_tuteur"/>
                          </div>
                        </form>
                      </fieldset>
                    </tab-content>

                    <tab-content title="RECAP DES INFORMATIONS">
                      Yuhuuu! This seems pretty damn simple
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
                          @click.native=""
                          class="wizard-footer-right finish-button"
                          :style="props.fillButtonStyle"
                        >
                          Enregistrer
                        </wizard-button>
                      </div>
                    </template>
                  </form-wizard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from "vue";
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
// const formWizard = ref(null);


const form: any = reactive({
  info_parent:0,
  civilite: "",
  telephone_bureau_mere:"",
  matricule: "",
  nom: "",
  email_pere:"",
  prenoms: "",
  adresse_postal_pere: "",
  adresse_postal_mere: "",
  adresse_postal_tuteur: "",
  date_naissance: "",
  lieu_naissance: "",
  lieu_habitation: "",
  nationalite: "",
  telephone_etudiant: "",
  etablissement_id: "",
  autre_etablissement: "",
  nom_prenom_pere: "",
  profession_pere: "",
  telephone_mobile_pere: "",
  telephone_domicile_pere: "",
  telephone_bureau_pere:"",
  telephone_domicile_mere: "",
  telephone_mobile_mere: "",
  email_mere: "",
  lieu_habitation_mere: "",
  lieu_habitation_pere: "",
  lieu_habitation_tuteur: "",
  nom_prenom_tuteur: "",
  telephone_bureau_tuteur: "",
  telephone_domicile_tuteur: "",
  telephone_mobile_tuteur: "" ,
  email_tuteur: "",
  nom_prenom_mere: "",
  profession_mere: "",
  profession_tuteur:""
});
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


onMounted(() => {});
</script>
<style scoped>

</style>
