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
                    Etudiant
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
                            <th scope="col">Civilité</th>
                            <th scope="col" style="width: 10%">Matricule</th>
                            <th scope="col" style="width: 15%">Nom</th>
                            <th scope="col" style="width: 40%">Prénoms</th>
                            <th scope="col" style="width: 12%">Date naissance</th>
                            <th scope="col" style="width: 12%">Lieu naissance</th>
                            <th
                              scope="col"
                              style="text-align: center !important;width: 12%"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(item, index) in storeEtudiant.getteretudiant"
                            :key="item.id"
                          >
                            <td style="border: 1px solid #000">
                              {{ index + 1 }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ item.civilite }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ item.matricule }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ item.nom }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ item.prenoms }}
                            </td>
                            <td style="border: 1px solid #000">
                              {{ item.date_naissance }}
                            </td>
                             <td style="border: 1px solid #000">
                              {{ item.lieu_naissance }}
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
                              <!-- <button
                                type="button"
                                class="btn btn-danger btn-sm"
                                title="Supprimer"
                                @click=""
                              >
                                <i class="la la-trash"></i>
                              </button> -->
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
                Enregistrer Etudiant
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
             <form-wizard shape="square" color="#3498db">
                    <tab-content title="IDENTITE DE L’ELEVE ">
                      <!-- <img
                        src="/theme-assets/images/portrait/small/avatar-s-19.png"
                        width="50"
                        height="50"
                        class="imagelogo"
                      /><br/><br/><br/><br/><br/> -->
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
                          <input
                            type="text"
                            class="form-control"
                            :value="genererMatricule()"
                            readonly
                          />
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
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.prenoms"
                          />
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Date naissance</label
                          >
                          <input
                            type="date"
                            class="form-control"
                            v-model="form.date_naissance"
                          />
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Lieu naissance</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.lieu_naissance"
                          />
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Lieu d'habitation</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.lieu_habitation"
                          />
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Nationalité</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.nationalite"
                          />
                        </div>
                        <div class="col-md-4">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Télephone de l'enfant ( WhatsApp )</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            v-model="form.telephone_etudiant"
                          />
                        </div>
                        <div class="col-md-4">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Ancien Etablissement</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.ancien_etablissement"
                          />
                        </div>
                        <div class="col-md-2">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Ancien Classe
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.ancienne_classe"
                          />
                        </div>
                        <div class="col-md-2">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Ancienne moyenne</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.ancienne_moyenne"
                          />
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
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.nom_prenom_pere"
                            />
                          </div>

                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Profession du père</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.profession_pere"
                            />
                          </div>

                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone domicile</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.telephone_domicile_pere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone Bureau</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.telephone_bureau_pere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone mobile ( WhatsApp)</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.telephone_mobile_pere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Email</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.email_pere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Adresse Postal</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.adresse_postal_pere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Lieu d'Habitation</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.lieu_habitation_pere"
                            />
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
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.nom_prenom_mere"
                            />
                          </div>

                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Profession
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.profession_mere"
                            />
                          </div>

                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone domicile</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.telephone_domicile_mere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone Bureau</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.telephone_bureau_mere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone mobile ( WhatsApp)</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.telephone_mobile_mere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Email</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.email_mere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Adresse Postal</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.adresse_postal_mere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Lieu d'Habitation</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.lieu_habitation_mere"
                            />
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
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.nom_prenom_tuteur"
                            />
                          </div>

                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Profession</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.profession_tuteur"
                            />
                          </div>

                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone domicile</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.telephone_domicile_tuteur"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone Bureau</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.telephone_bureau_tuteur"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone mobile ( WhatsApp)</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.telephone_mobile_tuteur"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Email</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.email_tuteur"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Adresse Postal</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.adresse_postal_tuteur"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Lieu d'Habitation</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.lieu_habitation_tuteur"
                            />
                          </div>
                        </form>
                      </fieldset>
                    </tab-content>

                    <tab-content title="RECAP DES INFORMATIONS">
                      <div class="table-responsive">
                        <div class="formtitre">Information sur l'entié</div>
                        <table class="table">
                          <thead class="" style="border: 1px solid #000">
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                CIVILITE
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.civilite }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                MATRICULE
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ genererMatricule() }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                NOM
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.nom }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                PRENOMS
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.prenoms }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                DATE DE NAISSANCE
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.date_naissance }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                LIEU NAISSANCE
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.lieu_naissance }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                LIEU HABITATION
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.lieu_habitation }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                NATIONALITE
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.nationalite }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                TELEPHONE DE L' ENTITE
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.telephone_etudiant }}
                              </td>
                            </tr>
                          </thead>
                        </table>

                        <div class="formtitre">Information sur le pere</div>
                        <table class="table">
                          <thead class="">
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Nom et Prénoms du père
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.nom_prenom_pere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Profession du père
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.profession_pere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Télphone domicile
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.telephone_domicile_pere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Télphone mobile ( WhatsApp)
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.telephone_mobile_pere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Email
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.email_pere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Adresse Postal
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.adresse_postal_pere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Lieu d'Habitation
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.lieu_habitation_pere }}
                              </td>
                            </tr>
                          </thead>
                        </table>

                        <div class="formtitre">Information sur la mère</div>
                        <table class="table">
                          <thead class="">
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Nom et Prénoms du mère
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.nom_prenom_mere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Profession du mère
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.profession_mere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Télphone domicile
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.telephone_domicile_mere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Télphone mobile ( WhatsApp)
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.telephone_mobile_mere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Email
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.email_mere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Adresse Postal
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.adresse_postal_mere }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Lieu d'Habitation
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.lieu_habitation_mere }}
                              </td>
                            </tr>
                          </thead>
                        </table>

                        <div class="formtitre">Information sur le tuteur</div>
                        <table class="table">
                          <thead class="">
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Nom et Prénoms du tuteur
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.nom_prenom_tuteur }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Profession du tuteur
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.profession_tuteur }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Télphone domicile
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.telephone_domicile_tuteur }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Télphone mobile ( WhatsApp)
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.telephone_mobile_tuteur }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Email
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.email_tuteur }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Adresse Postal
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.adresse_postal_tuteur }}
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="col"
                                style="width: 23%; border: 1px solid #000"
                              >
                                Lieu d'Habitation
                              </th>
                              <td
                                style="border: 1px solid #000"
                                class="miseforme"
                              >
                                :{{ form.lieu_habitation_tuteur }}
                              </td>
                            </tr>
                          </thead>
                        </table>
                      </div>
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
                          @click="EnregistrementEtudiant()"
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
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Etudiant</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form-wizard shape="square" color="#3498db">
                    <tab-content title="IDENTITE DE L’ELEVE ">
                      <!-- <img
                        src="/theme-assets/images/portrait/small/avatar-s-19.png"
                        width="50"
                        height="50"
                        class="imagelogo"
                      /><br/><br/><br/><br/><br/> -->
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
                            v-model="formmod.civilite"
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
                          <input
                            type="text"
                            class="form-control"
                            v-model="formmod.matricule"
                            readonly
                          />
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
                            v-model="formmod.nom"
                          />
                        </div>
                        <div class="col-md-5">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Prénoms</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="formmod.prenoms"
                          />
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Date naissance</label
                          >
                          <input
                            type="date"
                            class="form-control"
                            v-model="formmod.date_naissance"
                          />
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Lieu naissance</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="formmod.lieu_naissance"
                          />
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Lieu d'habitation</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="formmod.lieu_habitation"
                          />
                        </div>
                        <div class="col-md-3">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Nationalité</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="formmod.nationalite"
                          />
                        </div>
                        <div class="col-md-4">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Télephone de l'enfant ( WhatsApp )</label
                          >
                          <input
                            type="number"
                            class="form-control"
                            v-model="formmod.telephone_etudiant"
                          />
                        </div>
                        <div class="col-md-4">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Ancien Etablissement</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="formmod.ancien_etablissement"
                          />
                        </div>
                        <div class="col-md-2">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Ancien Classe
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="formmod.ancienne_classe"
                          />
                        </div>
                        <div class="col-md-2">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                            >Ancienne moyenne</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            v-model="formmod.ancienne_moyenne"
                          />
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
                                v-model="formmod.info_parent"
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
                                v-model="formmod.info_parent"
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
                                v-model="formmod.info_parent"
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
                        v-if="formmod.info_parent == 0"
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
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.nom_prenom_pere"
                            />
                          </div>

                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Profession du père</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.profession_pere"
                            />
                          </div>

                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone domicile</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.telephone_domicile_pere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone Bureau</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.telephone_bureau_pere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone mobile ( WhatsApp)</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.telephone_mobile_pere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Email</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.email_pere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Adresse Postal</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.adresse_postal_pere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Lieu d'Habitation</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.lieu_habitation_pere"
                            />
                          </div>
                        </form>
                      </fieldset>
                      <fieldset
                        class="border p-4 rounded"
                        v-if="formmod.info_parent == 1"
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
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.nom_prenom_mere"
                            />
                          </div>

                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Profession
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.profession_mere"
                            />
                          </div>

                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone domicile</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.telephone_domicile_mere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone Bureau</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.telephone_bureau_mere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone mobile ( WhatsApp)</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.telephone_mobile_mere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Email</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.email_mere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Adresse Postal</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.adresse_postal_mere"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Lieu d'Habitation</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.lieu_habitation_mere"
                            />
                          </div>
                        </form>
                      </fieldset>

                      <fieldset
                        class="border p-4 rounded"
                        v-if="formmod.info_parent == 2"
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
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.nom_prenom_tuteur"
                            />
                          </div>

                          <div class="col-md-3">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Profession</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.profession_tuteur"
                            />
                          </div>

                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone domicile</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.telephone_domicile_tuteur"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone Bureau</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.telephone_bureau_tuteur"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Télphone mobile ( WhatsApp)</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.telephone_mobile_tuteur"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Email</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.email_tuteur"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Adresse Postal</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.adresse_postal_tuteur"
                            />
                          </div>
                          <div class="col-md-4">
                            <label
                              for="exampleFormControlInput1"
                              class="form-label"
                              >Lieu d'Habitation</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="formmod.lieu_habitation_tuteur"
                            />
                          </div>
                        </form>
                      </fieldset>
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
                          @click="modificationEtudiant()"
                          class="wizard-footer-right finish-button"
                          :style="props.fillButtonStyle"
                          
                        >
                          Modifier
                        </wizard-button>
                      </div>
                    </template>
                  </form-wizard>
          </div>
          
        </div>
      </div>
    </div>
    <!-- fin du modal de modification -->
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from "vue";
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import { Modal } from "bootstrap";
import Swal from "sweetalert2";
// import { etablissementStore } from "../../stores/parametreStore/etablissement";
import { etudiantStore } from "../../stores/parametreStore/etudiant";
// const docEtablissement = etablissementStore();
// const formWizard = ref(null);
const modalModification = ref<HTMLDivElement | null>(null);
const storeEtudiant = etudiantStore();
const form: any = reactive({
  info_parent: 0,
  civilite: "",
  matricule: "",
  nom: "",

  prenoms: "",
  date_naissance: "1900-01-01",
  telephone_bureau_mere: "",
  email_pere: "",

  adresse_postal_pere: "",
  adresse_postal_mere: "",
  adresse_postal_tuteur: "",

  lieu_naissance: "",
  lieu_habitation: "",
  nationalite: "",
  telephone_etudiant: "",
  ancien_etablissement: "",
  ancienne_classe: "",
  ancienne_moyenne: "",
  nom_prenom_pere: "",
  profession_pere: "",
  telephone_mobile_pere: "",
  telephone_domicile_pere: "",
  telephone_bureau_pere: "",
  telephone_domicile_mere: "",
  telephone_mobile_mere: "",
  email_mere: "",
  lieu_habitation_mere: "",
  lieu_habitation_pere: "",
  lieu_habitation_tuteur: "",
  nom_prenom_tuteur: "",
  telephone_bureau_tuteur: "",
  telephone_domicile_tuteur: "",
  telephone_mobile_tuteur: "",
  email_tuteur: "",
  nom_prenom_mere: "",
  profession_mere: "",
  profession_tuteur: "",
});

const formmod: any = reactive({
  info_parent: 0,
  civilite: "",
  matricule: "",
  nom: "",

  prenoms: "",
  date_naissance: "1900-01-01",
  telephone_bureau_mere: "",
  email_pere: "",

  adresse_postal_pere: "",
  adresse_postal_mere: "",
  adresse_postal_tuteur: "",

  lieu_naissance: "",
  lieu_habitation: "",
  nationalite: "",
  telephone_etudiant: "",
  ancien_etablissement: "",
  ancienne_classe: "",
  ancienne_moyenne: "",
  nom_prenom_pere: "",
  profession_pere: "",
  telephone_mobile_pere: "",
  telephone_domicile_pere: "",
  telephone_bureau_pere: "",
  telephone_domicile_mere: "",
  telephone_mobile_mere: "",
  email_mere: "",
  lieu_habitation_mere: "",
  lieu_habitation_pere: "",
  lieu_habitation_tuteur: "",
  nom_prenom_tuteur: "",
  telephone_bureau_tuteur: "",
  telephone_domicile_tuteur: "",
  telephone_mobile_tuteur: "",
  email_tuteur: "",
  nom_prenom_mere: "",
  profession_mere: "",
  profession_tuteur: "",
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

// function afficheSigleEtablissement() {
//   let data = docEtablissement.getteretablissement.find;
//   if (data) {
//     return data.code;
//   }
//   return "";
// }
const showModalDecision = (id: number) => {
  const d_data = storeEtudiant.getteretudiant.find(
    (item: { id: number }) => item.id === id
  );
  if (d_data) {
    // formmod.code = d_data.code;
    // formmod.libelle = d_data.libelle;
    formmod.id = d_data.id;

    formmod.civilite= d_data.civilite;
  formmod.matricule= d_data.matricule;
  formmod.nom= d_data.nom;

  formmod.prenoms= d_data.prenoms;
  formmod.date_naissance= d_data.date_naissance;
  formmod.telephone_bureau_mere= d_data.telephone_bureau_mere;
  formmod.email_pere= d_data.email_pere;

  formmod.adresse_postal_pere= d_data.adresse_postal_pere;
  formmod.adresse_postal_mere= d_data.adresse_postal_mere;
  formmod.adresse_postal_tuteur= d_data.adresse_postal_tuteur;

  formmod.lieu_naissance= d_data.lieu_naissance;
  formmod.lieu_habitation= d_data.lieu_habitation;
  formmod.nationalite= d_data.nationalite;
  formmod.telephone_etudiant= d_data.telephone_etudiant;
  formmod.ancien_etablissement= d_data.ancien_etablissement;
  formmod.ancienne_classe= d_data.ancienne_classe;
  formmod.ancienne_moyenne= d_data.ancienne_moyenne;
  formmod.nom_prenom_pere= d_data.nom_prenom_pere;
  formmod.profession_pere= d_data.profession_pere;
  formmod.telephone_mobile_pere= d_data.telephone_mobile_pere;
  formmod.telephone_domicile_pere= d_data.telephone_domicile_pere;
  formmod.telephone_bureau_pere= d_data.telephone_bureau_pere;
  formmod.telephone_domicile_mere= d_data.telephone_domicile_mere;
  formmod.telephone_mobile_mere= d_data.telephone_mobile_mere;
  formmod.email_mere= d_data.email_mere;
  formmod.lieu_habitation_mere= d_data.lieu_habitation_mere;
  formmod.lieu_habitation_pere= d_data.lieu_habitation_pere;
  formmod.lieu_habitation_tuteur= d_data.lieu_habitation_tuteur;
  formmod.nom_prenom_tuteur= d_data.nom_prenom_tuteur;
  formmod.telephone_bureau_tuteur= d_data.telephone_bureau_tuteur;
  formmod.telephone_domicile_tuteur= d_data.telephone_domicile_tuteur;
  formmod.telephone_mobile_tuteur= d_data.telephone_mobile_tuteur;
  formmod.email_tuteur= d_data.email_tuteur;
  formmod.profession_mere= d_data.profession_mere;
  formmod.profession_mere= d_data.profession_mere;
    formmod.profession_tuteur = d_data.profession_tuteur;
    
  formmod.nom_prenom_mere = d_data.nom_prenom_mere;
    if (modalModification.value) {
      const modalInstance = new Modal(modalModification.value);
      modalInstance.show();
    }
  } else {
    console.error(`Data with id ${id} not found`);
  }
};
function modificationEtudiant() {
  //$v1.value.$touch();
  // if (!$v1.value.$invalid) {
  formmod.id = formmod.id;
  try {
    // isLoading.value = true;
    storeEtudiant.modifieretudiant(formmod).then(() => {
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
function genererMatricule() {
  return "MAT" + "00000" + (parseInt(storeEtudiant.getteretudiant.length) + 1);
}
function ViderChamps() {
  (form.civilite = ""),
    (form.telephone_bureau_mere = ""),
    (form.matricule = ""),
    (form.nom = ""),
    (form.email_pere = ""),
    (form.prenoms = ""),
    (form.adresse_postal_pere = ""),
    (form.adresse_postal_mere = ""),
    (form.adresse_postal_tuteur = ""),
    (form.date_naissance = "1900-01-01"),
    (form.lieu_naissance = ""),
    (form.lieu_habitation = ""),
    (form.nationalite = ""),
    (form.telephone_etudiant = ""),
    (form.ancienne_classe = ""),
    (form.ancienne_moyenne = ""),
    (form.ancien_etablissement = ""),
    (form.nom_prenom_pere = ""),
    (form.profession_pere = ""),
    (form.telephone_mobile_pere = ""),
    (form.telephone_domicile_pere = ""),
    (form.telephone_bureau_pere = ""),
    (form.telephone_domicile_mere = ""),
    (form.telephone_mobile_mere = ""),
    (form.email_mere = ""),
    (form.lieu_habitation_mere = ""),
    (form.lieu_habitation_pere = ""),
    (form.lieu_habitation_tuteur = ""),
    (form.nom_prenom_tuteur = ""),
    (form.telephone_bureau_tuteur = ""),
    (form.telephone_domicile_tuteur = ""),
    (form.telephone_mobile_tuteur = ""),
    (form.email_tuteur = ""),
    (form.nom_prenom_mere = ""),
    (form.profession_mere = ""),
    (form.profession_tuteur = "");
}

function EnregistrementEtudiant() {
  // $v.value.$touch();
  //if (!$v.value.$invalid) {
  try {
    let obj: any = {
      civilite: form.civilite,
      matricule: genererMatricule(),
      nom: form.nom,
      prenoms: form.prenoms,
      date_naissance: form.date_naissance,
      lieu_naissance: form.lieu_naissance,
      lieu_habitation: form.lieu_habitation,
      nationalite: form.nationalite,
      telephone_etudiant: form.telephone_etudiant,
      email_pere: form.email_pere,
      telephone_bureau_mere: form.telephone_bureau_mere,
      adresse_postal_pere: form.adresse_postal_pere,
      adresse_postal_mere: form.adresse_postal_mere,
      adresse_postal_tuteur: form.adresse_postal_tuteur,
      ancienne_classe: form.ancienne_classe,
      ancienne_moyenne: form.ancienne_moyenne,
      ancien_etablissement: form.ancien_etablissement,
      nom_prenom_pere: form.nom_prenom_pere,
      profession_pere: form.profession_pere,
      telephone_mobile_pere: form.telephone_mobile_pere,
      telephone_domicile_pere: form.telephone_domicile_pere,
      telephone_bureau_pere: form.telephone_bureau_pere,
      telephone_domicile_mere: form.telephone_domicile_mere,
      telephone_mobile_mere: form.telephone_mobile_mere,
      email_mere: form.email_mere,
      lieu_habitation_mere: form.lieu_habitation_mere,
      lieu_habitation_pere: form.lieu_habitation_pere,
      lieu_habitation_tuteur: form.lieu_habitation_tuteur,
      nom_prenom_tuteur: form.nom_prenom_tuteur,
      telephone_bureau_tuteur: form.telephone_bureau_tuteur,
      telephone_domicile_tuteur: form.telephone_domicile_tuteur,
      telephone_mobile_tuteur: form.telephone_mobile_tuteur,
      email_tuteur: form.email_tuteur,
      nom_prenom_mere: form.nom_prenom_mere,
      profession_mere: form.profession_mere,
      profession_tuteur: form.profession_tuteur,
    };
    //   isLoading.value = true;
    //   console.log(obj)
    storeEtudiant.ajouteretudiant(obj).then(() => {
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
      storeEtudiant.Supprimeretudiant(id);
    }
  });
}
onMounted(() => {
  storeEtudiant.getetudiant();
});
</script>
<style scoped>
th {
  text-transform: uppercase !important;
}
.formtitre {
  text-decoration: underline;
  font-size: 20px;
}
.miseforme {
  text-transform: capitalize;
}
</style>
