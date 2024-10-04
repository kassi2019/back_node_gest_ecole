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
                    Fiche d'inscription
                  </h3>
                  <br />

                  <div>
                    <br /><br />

                    <form-wizard
                      @on-complete="onComplete"
                      shape="square"
                      color="#3498db"
                    >
                      <tab-content title="IDENTITE DE L’ELEVE ">
                        <form class="row g-3">
                          <div class="col-md-2">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Matricule</label
                            >
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Nom</label
                            >
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-md-6">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Prénoms</label
                            >
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Date naissance</label
                            >
                            <input type="date" class="form-control" />
                          </div>
                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Lieu naissance</label
                            >
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Lieu d'habitation</label
                            >
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Nationalité</label
                            >
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télephone de l'enfant ( WhatsApp )</label
                            >
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Etablissement d'origine</label
                            >
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Classe antérieure</label
                            >
                            <input type="text" class="form-control" />
                          </div>
                          <div class="col-md-2">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Sexe</label
                            >
                            <select
                              class="form-select form-select-lg mb-3"
                              aria-label=".form-select-lg example"
                            >
                              <option selected></option>
                            </select>
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Classe</label
                            >
                            <select
                              class="form-select form-select-lg mb-3"
                              aria-label=".form-select-lg example"
                            >
                              <option selected></option>
                            </select>
                          </div>
                          <div class="col-md-2">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Boursièr ( e )</label
                            >
                            <select
                              class="form-select form-select-lg mb-3"
                              aria-label=".form-select-lg example"
                            >
                              <option></option>
                              <option value="Oui">Oui</option>
                              <option value="Non">Non</option>
                            </select>
                          </div>
                          <div class="col-md-2">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Redoublant (e)</label
                            >
                            <select
                              class="form-select form-select-lg mb-3"
                              aria-label=".form-select-lg example"
                            >
                              <option></option>
                              <option value="Oui">Oui</option>
                              <option value="Non">Non</option>
                            </select>
                          </div>
                          <div class="col-md-2">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Transport</label
                            >
                            <select
                              class="form-select form-select-lg mb-3"
                              aria-label=".form-select-lg example"
                            >
                              <option></option>
                              <option value="Oui">Oui</option>
                              <option value="Non">Non</option>
                            </select>
                          </div>
                        </form>
                      </tab-content>
                      <tab-content title="IDENTITE SUR LES PARENTS">
                        <fieldset class="border p-4 rounded">
                          <form class="row g-3">
                            <div class="col-md-6">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios2"
                                  value="option2"
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios2"
                                >
                                  Second default radio
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios2"
                                  value="option2"
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios2"
                                >
                                  Second default radio
                                </label>
                              </div>
                            </div>
                          </form>
                        </fieldset>
                        <fieldset class="border p-4 rounded">
                          <legend class="w-auto px-2">
                            Information Sur le père:
                          </legend>
                          <form class="row g-3">
                            <div class="col-md-3">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Nom</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-6">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Prénoms</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-3">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Profession</label
                              >
                              <input type="text" class="form-control" />
                            </div>

                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Télphone domicile</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Télphone Bureau</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Télphone mobile ( WhatsApp)</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Email</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Adresse Postal</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Lieu d'Habitation</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                          </form>
                        </fieldset>
                        <fieldset class="border p-4 rounded">
                          <legend class="w-auto px-2">
                            Information Sur la mère:
                          </legend>
                          <form class="row g-3">
                            <div class="col-md-3">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Nom</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-6">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Prénoms</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-3">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Profession</label
                              >
                              <input type="text" class="form-control" />
                            </div>

                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Télphone domicile</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Télphone Bureau</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Télphone mobile ( WhatsApp)</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Email</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Adresse Postal</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                            <div class="col-md-4">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Lieu d'Habitation</label
                              >
                              <input type="text" class="form-control" />
                            </div>
                          </form>
                        </fieldset>
                      </tab-content>
                      <tab-content title="IDENTITE SUR LE TUTEUR">
                        Yuhuuu! This seems pretty damn simple
                      </tab-content>
                      <tab-content title="RECAP DES INFORMATIONS">
                        Yuhuuu! This seems pretty damn simple
                      </tab-content>
                    </form-wizard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//local registration
import { FormWizard, TabContent } from "vue3-form-wizard";

export default {
  //component code
  components: {
    FormWizard,
    TabContent,
  },
  methods: {
    onComplete() {},
  },

  setup() {},
};
</script>
<style></style>
