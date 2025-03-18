<template name="AccountProfilComponent">

  <div class="background fadeIn2 bb background3">

    <div class="content">

      <h1>Gestion de mon compte</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="active">Gestion de mon compte</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="my-account-profil" class="page-my-account-profil section fadeIn3">

    <div class="container">

      <div class="row gutters-sm u-column1" v-show="showSimulatedReturnData">

        <div class="col-md-3 mb-3">

          <div class="card card-perso">

            <div class="card-body">

              <div class="d-flex flex-column align-items-center text-center">

                <div class="picture-profil">

                  <div class="input-picture">

                    <input id="file-input" type="file" accept="image/*" @change="handleFileChange($event.target)"
                      required />

                    <img v-if="avatar === null" class="rounded-circle first-preview" src="users/avatar.png"
                      v-bind:src="preview" alt="">

                    <img v-else class="rounded-circle first-preview" :src="avatar" v-bind:src="preview" alt="">

                    <img class="rounded-circle preview" v-bind:src="preview" alt="">

                  </div>

                  <div class="camera">
                    <i class="fa-solid fa-camera-rotate"></i>
                  </div>

                  <div class="error-text image-error"></div>

                  <div class="button-picture">

                    <div class="addImage text-center mt-4"><a @click="saveImage" class="btn btn-success">Enregistrer</a>
                    </div>

                    <div class="removeImage text-center mt-4"><a @click="removeImage"
                        class="btn btn-danger">Supprimer</a>
                    </div>

                  </div>

                </div>

                <div class="mt-3">

                  <h4>{{ firstname + ' ' + lastname }}</h4>

                  <hr />

                  <div class="text-start">

                    <p v-if="status_legale === 2" class="text-secondary text-bold mb-0"><i
                        v-bind:class="(status_legale === 1) ? 'fa-solid fa-user text-indigo-5 me-1' : 'fa-solid fa-user-tie text-indigo-5 me-1'"></i>
                      Statut : <br />{{ (status_legale === 1) ? 'Particulier' : 'Professionnel' }}</p>

                    <hr v-if="status_legale === 2" />

                    <p v-if="status_legale === 2" class="text-secondary text-bold mb-0"><i
                        class="fa-solid fa-hashtag text-green-5 me-1"></i>
                      SIRET : <br />{{ siret }}</p>

                    <hr v-if="status_legale === 2" />

                    <p v-if="status_legale === 2" class="text-secondary text-bold mb-0"><i
                        class="fa-solid fa-hashtag text-brown-5 me-1"></i>
                      TVA : <br />{{ tva }}</p>

                    <hr v-if="status_legale === 2" />

                    <p class="text-secondary text-bold mb-0"><i class="fa-solid fa-briefcase text-blue-5 me-1"></i>
                      Fonction : <br />{{ fonction }}</p>

                    <hr />

                    <p class="text-muted text-bold font-size-sm mb-0"><i
                        class="fa-solid fa-location-dot text-green me-1"></i>
                      {{ location }}</p>

                    <hr />

                    <p class="text-muted text-bold font-size-sm mb-0"><i
                        class="fa-solid fa-coins text-brown-5 me-1"></i>
                      {{ credits }} crédits disponible </p>

                    <hr />

                    <p v-if="subscription === true" class="text-muted text-bold font-size-sm"><i
                        class="fa-solid fa-meteor text-orange-5 me-1"></i> Abonné(e) jusqu'au : <br />
                      {{ date_subcription }}
                    </p>

                    <p v-else class="text-muted text-bold font-size-sm">
                      <i class="fa-solid fa-meteor text-orange-5 me-1"></i>
                      Aucun abonnement en cours
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div class="card mt-3">

            <ul class="list-group list-clic list-group-flush">

              <li id="card1"
                :class="(yearRouter !== undefined) ? 'list-group-item d-flex justify-content-between align-items-center flex-wrap' : 'active-list list-group-item d-flex justify-content-between align-items-center flex-wrap'">
                <a @click="showProfil">
                  <p class="mb-0"><i class="fa fa-user me-2"></i>Mon profil</p>
                </a>
              </li>

              <li v-if="!notificationsActiveShow"
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="notificationsActive">
                  <p class="mb-0"> <i class="fa-solid fa-bell me-2"></i>Activer les notications</p>
                </a>
              </li>

              <li v-else class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="notificationsInactive">
                  <p class="mb-0"> <i class="fa-solid fa-bell-slash me-2"></i>Désactiver les notications</p>
                </a>
              </li>

              <li id="card5" v-if="admin === 1"
                :class="(yearRouter !== undefined) ? 'active-list list-group-item d-flex justify-content-between align-items-center flex-wrap' : 'list-group-item d-flex justify-content-between align-items-center flex-wrap'">
                <a @click="showBudget">
                  <p class="mb-0"><i class="fa-solid fa-chart-line me-2"></i>Suivi budget</p>
                </a>
              </li>

              <li id="card9" v-if="admin === 1"
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showBakerys(user.email)">
                  <p class="mb-0"><i class="fa-solid fa-building-wheat me-2"></i>Boulangeries</p>
                </a>
              </li>

              <li id="card10" v-if="admin === 1"
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showNewsletter(user.email)">
                  <p class="mb-0"><i class="fa-solid fa-envelope-open-text me-2"></i>Lettre d'actualité</p>
                </a>
              </li>

              <li id="card8" v-if="subscription === true"
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showBannerAll">
                  <p class="mb-0"><i class="fa-solid fa-bullhorn me-2"></i>Mes bannières</p>
                </a>
              </li>

              <li id="card8" v-else
                class="disabled list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a>
                  <p class="mb-0"><i class="fa-solid fa-bullhorn me-2"></i>Mes bannières</p>
                </a>
              </li>

              <li v-if="subscription === true" id="card7"
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showBannerPlanning">
                  <p class="mb-0"><i class="fa-solid fa-bullhorn me-2"></i>Planning bannières</p>
                </a>
              </li>

              <li v-else id="card7"
                class="disabled list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a>
                  <p class="mb-0"><i class="fa-solid fa-bullhorn me-2"></i>Planning bannières</p>
                </a>
              </li>

              <li id="card6" v-if="user_bakery.succes === true && subscription === true"
                class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showUserBakery">
                  <p class="mb-0"><i class="fa-regular fa-building me-2"></i>Mes établissements</p>
                </a>
              </li>

              <li id="card6" v-if="user_bakery.succes === true && subscription === false"
                class="disabled list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a>
                  <p class="mb-0"><i class="fa-regular fa-building me-2"></i>Mes établissements</p>
                </a>
              </li>

              <li id="card2" class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showUpdateProfil">
                  <p class="mb-0"><i class="fa fa-edit me-2"></i>Modifier mon profil</p>
                </a>
              </li>

              <li id="card3" class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showActivity">
                  <i class="fa fa-calendar me-2"></i>Activité récente <span class="badge bg-warning float-right">{{
                    activity }}</span>
                </a>
              </li>

              <li id="card4" class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="showCartOrder">
                  <i class="fa-solid fa-basket-shopping me-2"></i>Historique des Commandes <span
                    class="badge bg-warning float-right">{{
                      orders }}</span>
                </a>
              </li>

              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <a @click="deleteAccount">
                  <p class="mb-0"><i class="fa-solid fa-user-minus me-2"></i>Supprimer mon compte</p>
                </a>
              </li>

            </ul>

          </div>

        </div>

        <div class="col-md-9">

          <div v-show="cardProfil" class="card">

            <div class="panel-body bio-graph-info">

              <h3 class="text-bold title"><i class="fa fa-user me-2"></i>Mon profil</h3>

              <div class="row">

                <div class="bio-row" v-if="status_legale === 2">
                  <p><span class="text-bold">Statut </span>: {{ (status_legale === 1) ? 'Particulier' : 'Professionnel'
                    }}</p>
                </div>

                <div class="bio-row" v-if="status_legale === 2">
                  <p><span class="text-bold">Numéro de SIRET </span>: {{ siret }}</p>
                </div>

                <div class="bio-row" v-if="status_legale === 2">
                  <p><span class="text-bold">Numéro de TVA </span>: {{ tva }}</p>
                </div>

                <div class="bio-row">
                  <p><span class="text-bold">Prénom </span>: {{ firstname }}</p>
                </div>

                <div class="bio-row">
                  <p><span class="text-bold">Nom </span>: {{ lastname }}</p>
                </div>

                <div class="bio-row">
                  <p><span class="text-bold">Location </span>: {{ location }}</p>
                </div>

                <div class="bio-row">
                  <p><span class="text-bold">Date de naissance</span>: {{ naissance }}</p>
                </div>

                <div class="bio-row">
                  <p><span class="text-bold">Fonction </span>: {{ fonction }}</p>
                </div>

                <div class="bio-row">
                  <p><span class="text-bold">Email </span>: {{ email }}</p>
                </div>

                <div class="bio-row mb-0">
                  <p class="mb-0"><span class="text-bold">Téléphone Mobile </span>: {{ mobile }}</p>
                </div>

                <div class="bio-row mb-0">
                  <p class="mb-0"><span class="text-bold">Téléphone fixe </span>: {{ phone }}</p>
                </div>

              </div>

            </div>

          </div>

          <div v-show="cardUpdateProfil" class="card">

            <div id="card-update-profil">

              <h3 class="text-bold title"><i class="fa fa-edit me-2"></i>Modifier mon profil</h3>

              <form method="post" class="d-grid bakery-detail">

                <div class="p-2">
                  <p class="form-group">

                    <label for="reg_status_legale">Statut <span class="required">*</span></label>
                    <select class="form-select select-bakery" name="reg_status_legale" id="reg_status_legale"
                      v-model="reg_status_legale">
                      <option :selected="(status_legale === 1) ? 'selected' : ''" value="1">Particulier</option>
                      <option :selected="(status_legale === 2) ? 'selected' : ''" value="2">Professionnel</option>
                    </select>
                  <p class="error-text reg_status_legale_error"></p>

                  </p>
                </div>

                <div class="p-2">
                  <p class="form-group">
                    <label for="req_siret">Numéro de SIRET <span class="required">*</span></label>
                    <input v-model="reg_siret" type="text" class="form-control" name="req_siret" id="req_siret">
                  <p class="error-text req_siret_error"></p>
                  </p>
                </div>

                <div class="p-2">
                  <p class="form-group">
                    <label for="reg_tva">Numéro de TVA <span class="required">*</span></label>
                    <input v-model="reg_tva" type="text" class="form-control" name="reg_tva" id="reg_tva">
                  <p class="error-text reg_tva_error"></p>
                  </p>
                </div>

                <div class="p-2">
                  <p class="form-group">
                    <label for="reg_firstname">Prénom <span class="required">*</span></label>
                    <input v-model="reg_firstname" type="text" class="form-control" name="firstname" id="reg_firstname">
                  <p class="error-text reg_firstname_error"></p>
                  </p>
                </div>

                <div class="p-2">
                  <p class="form-group">
                    <label for="reg_lastname">Nom <span class="required">*</span></label>
                    <input v-model="reg_lastname" type="text" class="form-control" name="lastname" id="reg_lastname">
                  <p class="error-text reg_lastname_error"></p>
                  </p>
                </div>

                <div class="p-2">

                  <p class="form-group">
                    <label for="reg_function">Poste occupé <span class="required">*</span></label>
                    <input v-model="reg_function" type="text" placeholder="ex : Ouvrier" class="form-control"
                      name="function" id="reg_function">
                  <p class="error-text reg_function_error"></p>
                  </p>

                </div>

                <div class="p-2">

                  <p class="form-group">
                    <label for="reg_naissance">Date de naissance <span class="required">*</span></label>
                    <input v-model="reg_naissance" placeholder="02/12/1999" type="text" class="form-control"
                      name="naissance" id="reg_naissance">
                  <p class="error-text reg_naissance_error"></p>
                  </p>

                </div>

                <div class="p-2 position-relative">

                  <p class="form-group">
                    <label for="reg_location">Localisation <span class="required">*</span></label>
                    <input @keyup="getAdresseApi()" v-model="reg_location" placeholder="ex : Le Mans" type="text"
                      class="form-control" name="location" id="reg_location">
                  </p>

                  <div class="search-place">
                    <ul></ul>
                  </div>

                  <p class="error-text reg_location_error"></p>

                </div>

                <div class="p-2">

                  <p class="form-group">
                    <label for="reg_mobile">Mobile</label>
                    <input v-model="reg_mobile" type="tel" class="form-control" name="mobile" id="reg_mobile">
                  </p>

                </div>

                <div class="p-2">

                  <p class="form-group">
                    <label for="reg_phone">Téléphone fixe</label>
                    <input v-model="reg_phone" type="tel" class="form-control" name="fixe" id="reg_phone">
                  </p>

                </div>

                <div style="padding: 0.5rem;">

                  <p class="form-group woocomerce-FormRow form-row">
                    <button @click="updateProfil" type="submit" class="btn btn-bakery">Valider les
                      modifications</button>
                  </p>

                </div>

              </form>

            </div>

          </div>

          <div v-show="cardActivity" class="card">

            <div id="activityCard">

              <h3 class="text-bold title"><i class="fa fa-calendar me-2"></i>Résumé de votre activité</h3>

              <table v-if="activityTable.length >= 1" class="table table-striped">

                <thead>

                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Crée le</th>
                    <th scope="col"></th>
                  </tr>

                </thead>

                <tbody>

                  <tr :id="'activityRow-' + activity.id" v-for="activity in activityTable" :key="activity.id">
                    <th scope="row">{{ activity.id }}</th>
                    <td><a @click="'bakery/' + activity.url">Renvendication de <strong>{{ activity.title
                          }}</strong></a></td>
                    <td>{{ moment(activity.userCreatedAt).format('DD MMMM YYYY') }}</td>
                    <td>

                      <a @click="'bakery/' + activity.url" class="text-success cursor-pointer me-2"><i
                          class="fa fa-eye"></i></a>

                      <a @click="deleteActivity(activity.id)" class="text-danger cursor-pointer"><i
                          class="fa fa-trash"></i></a>

                    </td>
                  </tr>

                </tbody>

              </table>

              <p v-else class="fw-bolder" style="text-align: center;margin-top: 1rem;">
                <i class="fa fa-warning text-warning"></i>
                Vous n'avez pas encore d'activité sur My Bakery.
              </p>

            </div>

          </div>

          <div v-show="cardOrder" class="card">

            <div id="orderCard">

              <h3 class="text-bold title"><i class="fa-solid fa-chart-line me-2"></i>Résumé de vos commandes</h3>

              <ag-grid-vue v-if="ordersTable.length >= 1" :paginationPageSize="paginationPageSize"
                :paginationPageSizeSelector="paginationPageSizeSelector" :tooltipShowDelay="tooltipShowDelay"
                :tooltipHideDelay="tooltipHideDelay" :localeText="localeText" :rowData="rowData" :columnDefs="colDefs"
                :pagination="true" class="ag-theme-quartz table-ag-grid">
              </ag-grid-vue>

              <p v-else class="fw-bolder" style="text-align: center;margin-top: 1rem;">
                <i class="fa fa-warning text-warning"></i>
                Vous n'avez pas encore de commande sur My Bakery.
              </p>

            </div>

          </div>

          <div v-if="admin === 1" v-show="cardBudget" class="card">

            <div id="budgetCard" class="filterCardE">

              <div class="row bakery-single">
                <span><strong>Filtres :</strong></span>
                <div class="col-2 mt-0 pt-1 special-select">
                  <select v-model="changeYear" @change="changeYearSelected($event)"
                    class="form-select select-filter select-bakery" name="changeYear">
                    <option
                      v-for="year in Array.from({ length: String(new Date().getFullYear()) - 2015 }, (value, index) => 2022 + index)"
                      :value="year">{{ year }}</option>
                  </select>
                </div>
              </div>

            </div>

            <hr />

            <div id="budgetCard" class="budgetCardE">

              <div class="card text-bg-secondary mb-3 me-3" style="max-width: 18rem;">
                <div class="card-header">Commande client</div>
                <div class="card-body">
                  <h5 class="card-title">Total des commandes</h5>
                  <p class="card-text">{{ totalOrders }} commande(s) clients</p>
                </div>
              </div>

              <div class="card text-bg-secondary mb-3 me-3" style="max-width: 18rem;">
                <div class="card-header">Pour l'année (<strong>{{ year }}</strong>)</div>
                <div class="card-body">
                  <h5 class="card-title">HT des commandes</h5>
                  <p class="card-text">{{ totalHT }} €</p>
                </div>
              </div>

              <div class="card text-bg-secondary mb-3 me-3" style="max-width: 18rem;">
                <div class="card-header">Pour l'année (<strong>{{ year }}</strong>)</div>
                <div class="card-body">
                  <h5 class="card-title">TTC des commandes</h5>
                  <p class="card-text">{{ totalTTC }} €</p>
                </div>
              </div>

            </div>

            <hr />

            <div id="budgetCard">

              <h3 class="text-bold title"><i class="fa-solid fa-chart-line me-2"></i>Suivi du budget My Bakery</h3>

              <ag-charts :options="optionsBudgets"> </ag-charts>

              <hr />

              <ag-charts :options="optionsRefund"> </ag-charts>

            </div>

          </div>

          <div v-if="user_bakery.succes === true" v-show="cardUserBakery" class="card">

            <div id="bakeryCard">

              <h3 class="text-bold title"><i class="fa-regular fa-building me-2"></i>Mes établissements My Bakery</h3>

              <div v-if="user_bakery.bakerys.length >= 1" class="bakery-card">

                <div class="card-bakery" :id="'establishement-' + bakery.id" v-for="bakery in user_bakery.bakerys">

                  <div class="left"
                    :style="(bakery.image !== 'default.jpg') ? 'background-image: url(' + folderPicture + bakery.image + ');' : 'background-image: url(' + 'bakerys/' + bakery.image + ');background-position: center center;background-size: 195px;background-repeat: no-repeat;'">

                    <div class="background">

                      <div class="establishement">
                      </div>

                    </div>

                  </div>

                  <div class="right">

                    <div v-if="!isNaN(moment(bakery.highlighting_at).diff(moment().format('YYYY-MM-DD HH:mm'), 'days'))"
                      class="highlighting">
                      <i class="fa-solid fa-highlighter text-warning"></i> <span>{{
                        moment(bakery.highlighting_at).diff(moment().format('YYYY-MM-DD'), "days") }} jour(s)
                        restant</span>
                    </div>

                    <p>
                      {{ bakery.small_content }}
                    </p>

                    <h3>{{ bakery.title }}</h3>

                    <div class="footer">

                      <a id="showDetailEstablishement" :data-id="bakery.bakery_id">
                        <i
                          :class="(subscription === false) ? 'fa-solid fa-chart-line me-3 text-danger' : 'fa-solid fa-chart-line me-3 text-orange'"></i>
                      </a>

                      <a @click="showDetailEstablishement(bakery.id)"
                        :class="(subscription === false) ? 'me-3 text-danger' : 'me-3 text-indigo'"><i
                          class="fa-solid fa-circle-info"></i></a>

                      <a v-if="bakery.credits >= 5" @click="this.$router.push('/credits/' + bakery.bakery_id)"
                        class="me-3 text-warning"><i class="fa-solid fa-coins"></i></a>
                      <a v-else @click="this.$router.push('/products')" class="me-3 text-danger"><i
                          class="fa-solid fa-coins"></i></a>

                      <a @click="this.$router.push('/bakery/' + bakery.url)" class="me-3 text-success"><i
                          class="fa-solid fa-eye"></i></a>

                      <a @click="deleteEstablishement(bakery.bakery_id, bakery.id)" class="text-danger"><i
                          class="fa-solid fa-trash"></i></a>

                    </div>

                    <div class="right-infos" :id="'right-info-' + bakery.id">

                      <div v-if="subscription === false" class="rightInfoSubscription">

                        <p>Pour suivre l'évolution de votre établisement vous devez acheter un pack sur notre boutique !
                        </p>

                        <a class="btn btn-bakery" @click="this.$router.push('/products')">Acheter un
                          pack</a>

                      </div>

                      <div :class="(subscription === false) ? 'rightSubscription' : ''">

                        <p>
                          <span class="subtitle"><i class="fa-regular fa-building me-2"></i>Propriétaire :</span><br />
                          <span v-if="subscription === true">{{ bakery.given_name }}</span>
                          <span v-else>NC</span>
                        </p>

                        <p>
                          <span class="subtitle"><i class="fa-regular fa-clock me-2"></i>Remonter en tête de liste
                            :</span><br>

                          <span v-if="subscription === true">

                            <span v-if="bakery.highlighting === 1" class="strong text-success"><i
                                class="fa-solid fa-check"></i> Oui {{ (bakery.highlighting_at) ? '- ' +
                                  moment(bakery.highlighting_at).format('DD MMMM YYYY à HH:mm') : '' }}
                            </span>

                            <span v-if="bakery.highlighting === 0" class="strong text-danger">
                              <i class="fa-solid fa-xmark"></i> Non {{ (bakery.highlighting_at) ? '- ' +
                                moment(bakery.highlighting_at).format('DD MMMM YYYY à HH:mm') : '' }}
                            </span>

                          </span>

                          <span v-else>NC</span>

                        </p>

                        <p>
                          <span class="subtitle"><i class="fa-solid fa-coins me-2"></i>Crédit dépenser :</span><br>
                          <span v-if="subscription === true">{{ bakery.user_credits_spent }}</span>
                          <span v-else>NC</span>
                        </p>

                        <p>
                          <span class="subtitle"><i class="fa-regular fa-clock me-2"></i>Revendiquer le :</span><br>
                          <span v-if="subscription === true">{{ moment(bakery.created_at).format('DD MMMM YYYY')
                            }}</span>
                          <span v-else>NC</span>
                        </p>

                        <p>
                          <span class="subtitle"><i class="fa-solid fa-eye me-2"></i>Vue(s) de l'établisement
                            :</span><br>
                          <span v-if="subscription === true">{{ bakery.viewsN }}</span>
                          <span v-else>NC</span>
                        </p>

                        <p class="mb-0">
                          <span class="subtitle"><i class="fa-regular fa-hand-pointer me-2"></i>Clic(s) sur
                            l'établisement
                            :</span><br>
                          <span v-if="subscription === true">{{ bakery.click }}</span>
                          <span v-else>NC</span>
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <p v-else class="fw-bolder" style="text-align: center;margin-top: 1rem;">
                <i class="fa fa-warning text-warning"></i>
                Vous ne gérer pas encore d'établissemen sur My Bakery.
              </p>

            </div>

          </div>

          <div v-if="subscription === true" v-show="cardBannerPlanning" class="card">

            <div id="bannerPlanningCard">

              <h3 class="text-bold title"><i class="fa-solid fa-bullhorn me-2"></i>Planning des bannières</h3>

              <div class="buttons mb-3">
                <p class="mb-2 text-bold font-size-sm">Nous somme le {{ moment().format('DD MMMM YYYY') }}</p>
                <a class="btn btn-bakery me-2" v-on:click="previous">Mois précédent</a>
                <a class="btn btn-bakery" id="next" v-on:click="next">Mois suivant</a>
              </div>

              <DayPilotMonth id="dp" @onBeforeCellRender="onBeforeCellRender" :config="config" ref="calendar"
                :eventBorderRadius="5">

                <template #event="{ event }">

                  <div class="event">

                    <div class="event-body">
                      <div class="event-title" v-html="event.text()"></div>
                    </div>

                  </div>

                </template>

              </DayPilotMonth>

              <p class="mt-2 text-warning" style="font-size:14px; font-weight: 500;">* Vous ne pouvez pas prendre de
                bannière sur
                l'amplitude de date d'un autre client</p>

            </div>

          </div>

          <div v-if="subscription === true" v-show="cardBannerAll" class="card">

            <div id="bannerAllCard">

              <h3 class="text-bold title"><i class="fa-solid fa-bullhorn me-2"></i>Mes bannières</h3>

              <table v-if="bannerTable.length >= 1" class="table table-striped">

                <thead>

                  <tr>
                    <th scope="col">N° de campagne</th>
                    <th scope="col">Nom de la campagne</th>
                    <th scope="col">Statut de la campagne</th>
                    <th scope="col">Crée le</th>
                    <th scope="col"></th>
                  </tr>

                </thead>

                <tbody>

                  <tr :id="'banniereRow-' + banner.campaign_id" v-for="banner in bannerTable" :key="banner.id">
                    <th scope="row">{{ banner.campaign_id }}</th>
                    <td v-html="banner.title"></td>
                    <td class="text-center">

                      <span
                        v-if="(moment(banner.start).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD') || moment().format('YYYY-MM-DD') <= moment(banner.end).format('YYYY-MM-DD'))">
                        <i class="fa-solid fa-check text-success me-2"></i>Actif
                      </span>

                      <span v-else>
                        <i class="fa-solid fa-xmark text-danger me-2"></i>Inactif
                      </span>

                    </td>
                    <td>{{ moment(banner.created_at).format('DD MMMM YYYY') }}</td>
                    <td>
                      <a @click="showDetailBanner(banner.clicksBanner, banner.viewsBanner, banner.id, banner.start, banner.end, banner.campaign_id, banner.banner_name, banner.banner_square_name)"
                        class="text-success cursor-pointer me-2"><i class="fa fa-eye"></i></a>
                    </td>
                  </tr>

                </tbody>

              </table>

              <p v-else class="fw-bolder" style="text-align: center;margin-top: 1rem;">
                <i class="fa fa-warning text-warning"></i>
                Vous n'avez pas encore de bannière sur My Bakery.
              </p>

            </div>

          </div>

          <div v-if="admin === 1" v-show="cardBakerys" class="card">

            <div id="bakerysCard">

              <h3 class="text-bold title"><i class="fa-solid fa-building-wheat me-2"></i>Liste des boulangeries</h3>

              <ag-grid-vue v-show="visibleLoadingBakerys" v-if="bakerysTable.length >= 1"
                :paginationPageSize="paginationPageSize" :paginationPageSizeSelector="paginationPageSizeSelector"
                :tooltipShowDelay="tooltipShowDelay" :tooltipHideDelay="tooltipHideDelay" :localeText="localeText"
                :rowData="rowDataBakerys" :columnDefs="colDefsBakerys" :pagination="true"
                class="ag-theme-quartz table-ag-grid">
              </ag-grid-vue>

              <p v-else v-show="visibleLoadingBakerys" class="fw-bolder" style="text-align: center;margin-top: 1rem;">
                <i class="fa fa-warning text-warning"></i>
                Il n'y a pas encore de boulangerie sur My Bakery.
              </p>

              <div class="loadingDiv bakerys-admin" v-show="!visibleLoadingBakerys">
                <q-spinner-gears size="50px" color="orange" />
              </div>

            </div>

          </div>

          <div v-if="admin === 1" v-show="cardNewsletter" class="card">

            <div id="newslettersCard">

              <h3 class="text-bold title"><i class="fa-solid fa-envelope-open-text me-2"></i>Utilisateurs inscrits à la
                lettre
                d'actualité</h3>

              <div  v-show="visibleLoadingNewsletter" class="text-start mb-3">
                <a class="btn btn-bakery" @click="sendNewsletter(newsletterTable.length)">Envoyer maintenant à {{
                  newsletterTable.length }}
                  utilisateurs</a>
              </div>

              <ag-grid-vue v-show="visibleLoadingNewsletter" v-if="newsletterTable.length >= 1"
                :paginationPageSize="paginationPageSize" :paginationPageSizeSelector="paginationPageSizeSelector"
                :tooltipShowDelay="tooltipShowDelay" :tooltipHideDelay="tooltipHideDelay" :localeText="localeText"
                :rowData="rowDataNewsletter" :columnDefs="colDefsNewsletter" :pagination="true"
                class="ag-theme-quartz table-ag-grid">
              </ag-grid-vue>

              <p v-else v-show="visibleLoadingNewsletter" class="fw-bolder"
                style="text-align: center;margin-top: 1rem;">
                <i class="fa fa-warning text-warning"></i>
                Il n'y a pas encore d'utilisateur inscrit sur la lettre d'actualité de My Bakery.
              </p>

              <div class="loadingDiv bakerys-admin" v-show="!visibleLoadingNewsletter">
                <q-spinner-gears size="50px" color="orange" />
              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="loadingDiv" v-show="visible">
        <q-spinner-grid size="70px" color="info" />
      </div>

    </div>

  </div>

  <!-- Modal Ticket Paiement -->
  <div class="modal fade modalSpecial" id="modalOrderShow" ref="printcontent" data-bs-backdrop="static"
    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

    <div class="modal-dialog modal-dialog-centered modal-lg">

      <div class="modal-content">

        <div class="modal-body">

          <div class="cardHead">

            <div class="title">Reçu de votre achat
              <div>
                <img class="imagePaiement" style="max-width: 60px;">
              </div>
            </div>

            <div class="info">

              <div class="row">

                <div class="col-7">
                  <span class="heading" id="staticDate">Date</span><br>
                  <span class="details" id="staticOrderShow2"></span><br>
                  <span class="heading" id="staticOrderCoordonnees">Coordonnées</span><br id="staticOrderCoordonneesBr">
                  <span id="staticOrderShow8"></span><br id="staticOrderShow8Br">
                  <span id="staticOrderShow9"></span><br id="staticOrderShow9Br">
                  <span id="staticOrderShow10"></span><br id="staticOrderShow10Br">
                  <span id="staticOrderShow11"></span><br id="staticOrderShow11Br">
                  <span id="staticOrderShow12"></span>
                </div>

                <div class="col-5 pull-right">
                  <span class="heading">Commande n°</span><br>
                  <span class="details" id="staticOrderShow3"></span>
                </div>

              </div>

            </div>

            <div class="pricing">

              <div class="row">

                <div class="col-9">
                  <span class="name" id="staticOrderShow4"></span>
                  <div id="staticOrderShow13"></div>
                </div>

                <div class="col-3">
                  <span class="price" id="staticOrderShow5"></span>
                </div>

              </div>

              <div class="row">

                <div class="col-9">
                  <span class="name">Frais de mise en service</span>
                </div>

                <div class="col-3">
                  <span class="price" id="staticOrderShow6"></span>
                </div>

              </div>

            </div>

            <div class="total">

              <div class="row">
                <div class="col-9">Total TTC</div>
                <div class="col-3" id="staticOrderShow7"></div>
              </div>

            </div>

            <div class="tracking">
              <div class="title">Suivi de commande</div>
            </div>

            <div class="progress-track">

              <ul id="progressbar">

              </ul>

            </div>

            <div class="footer">

              <div class="row">

                <div class="col-2"><img class="img-fluid" src="contact.png"></div>
                <div class="col-10">Vous voulez de l'aide ? &nbsp;<a href="mailto:contact@my-bakery.fr">
                    Contactez-nous</a></div>

                <div class="text-right">
                  <a class="btn btn-bakery mt-2 me-3" @click="printThis()"><i class="fa-solid fa-download me-2"></i>
                    Télécharger la facture</a>
                  <a class="btn btn-bakery mt-2" @click="closeModal()" data-bs-dismiss="modal">Fermer</a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  <!-- Modal Graph -->
  <div v-if="subscription === true" class="modal fade modalSpecial" id="modalEstablishementShow"
    data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
    aria-hidden="true">

    <div class="modal-dialog modal-dialog-centered modal-lg">

      <div class="modal-content">

        <div class="modal-body">

          <div class="cardHead">

            <div class="title">Suivi de votre établissement
              <div>
                <img src="barometre.png" style="max-width: 60px;">
              </div>
            </div>

            <div v-if="subscription === false" class="productOrders">

              <p>Pour suivre l'évolution de votre établisement vous devez acheter un pack sur notre boutique !</p>

              <a class="btn btn-bakery" @click="hideModal(), this.$router.push('/products')">Acheter un pack</a>

            </div>

            <div :class="(subscription === false) ? 'subscriptionEmpty graphEstablishement' : ' graphEstablishement'">

              <div>
                <ag-charts :options="optionsEstablishementViews"></ag-charts>
              </div>

              <hr />

              <div>
                <ag-charts :options="optionsEstablishementClick"></ag-charts>
              </div>

            </div>

            <div class="footer">

              <div class="row">

                <div class="text-right">
                  <a class="btn btn-bakery mt-2" @click="closeModal()" data-bs-dismiss="modal">Fermer</a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  <!-- Modal Banner -->
  <div v-if="subscription === true" class="modal fade modalSpecial" id="modalBannerShow" data-bs-backdrop="static"
    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

    <div class="modal-dialog modal-dialog-centered modal-lg">

      <div class="modal-content">

        <div class="modal-body">

          <div class="cardHead">

            <div class="title">Suivi de votre campagne publicitaire
              <div>
                <img src="annonce.png" style="max-width: 60px;">
              </div>
            </div>

            <div>

              <div class="bannerCardE">

                <div class="card text-bg-secondary mb-3 me-3" style="max-width: 18rem;">
                  <div class="card-header">Pour l'année (<strong>{{ year }}</strong>)</div>
                  <div class="card-body">
                    <h6 class="card-title">Nombre de clic</h6>
                    <p id="clicksBanner" class="card-text"></p>
                  </div>
                </div>

                <div class="card text-bg-secondary mb-3 me-3" style="max-width: 18rem;">
                  <div class="card-header">Pour l'année (<strong>{{ year }}</strong>)</div>
                  <div class="card-body">
                    <h6 class="card-title">Nombre de visites</h6>
                    <p id="viewsBanner" class="card-text"></p>
                  </div>
                </div>

              </div>

              <hr />

              <div class="title">Informations complémentaire</div>

              <div class="bannerCardE bannerCardF mb-0">
                <p id="titleCampaign"></p>
              </div>

              <div class="bannerCardE bannerCardF mt-0">
                <p id="startCampaign"></p>
                <p id="endCampaign"></p>
                <div id="statusCampaign">

                </div>
              </div>

              <div class="bannerCardE bannerCardH">
                <img id="imageCampaign" />
              </div>

              <div class="bannerCardE bannerCardH">
                <img id="image2Campaign" />
              </div>

              <hr />

              <div>
                <ag-charts :options="optionsBannerClick"></ag-charts>
              </div>

              <hr />

              <div>
                <ag-charts :options="optionsBannerViews"></ag-charts>
              </div>

            </div>

            <div class="footer">

              <div class="row">

                <div class="text-right">
                  <a class="btn btn-bakery mt-2" @click="closeModal()" data-bs-dismiss="modal">Fermer</a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<style lang="scss">
.event {
  position: absolute;
  inset: 0 0 0 5px;
  padding: 5px;
}

.event-header {
  display: flex;
  align-items: center;
}

.event-icon {
  margin-right: 5px;
}

.event-icon .icon {
  width: 16px;
  height: 16px;
  color: #ffba11;
  vertical-align: middle;
}

.event-text {
  flex-grow: 1;
}

.event-progress {
  margin-top: 10px;
  width: 100%;
  height: 4px;
  background-color: #e9ecef;
}

.event-progress-bar {
  height: 100%;
  background-color: #28a745;
}

.event-progress-text {
  font-size: 10px;
  color: #6c757d;
}

.event-button {
  margin-left: auto;
  padding: 5px 10px;
  font-size: 12px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.event-button:hover {
  background-color: #5a6268;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>

<style lang="css">
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
</style>


<style lang="css">
.disabled {
  pointer-events: none;
}

.page-my-account-profil.section,
.page-my-account-profil .section {
  margin-bottom: 0;
}

.h-blog {
  min-height: 200px;
}

@media all and (max-width: 768px) {
  .h-blog {
    min-height: 100%;
  }
}
</style>

<script>

import { defineComponent, onMounted, reactive, computed, ref } from 'vue'
import useValidate from '@vuelidate/core'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';
import { date, LocalStorage, SessionStorage, useQuasar } from 'quasar'
import moment from 'moment'
import { Cookies } from 'quasar'
import axios from 'axios'

// Graphique && Grid
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridVue } from "ag-grid-vue3"; // Vue Data Grid Component
import { AG_GRID_LOCALE_FR } from '@ag-grid-community/locale';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { AgCharts } from 'ag-charts-vue3';
import { AG_CHARTS_LOCALE_FR_FR } from 'ag-charts-locale';

// Calendar
import { DayPilot, DayPilotMonth, DayPilotNavigator } from '@daypilot/daypilot-lite-vue'

ModuleRegistry.registerModules([ClientSideRowModelModule]);

moment.locale('fr')

const visibleLoadingBakerys = ref(false),
  visibleLoadingNewsletter = ref(false),
  email = ref(''),
  firstname = ref(''),
  lastname = ref(''),
  fonction = ref(''),
  status_legale = ref(''),
  siret = ref(''),
  tva = ref(''),
  reg_status_legale = ref(''),
  reg_siret = ref(''),
  reg_tva = ref(''),
  reg_location = ref(''),
  location = ref(''),
  avatar = ref(null),
  phone = ref(''),
  mobile = ref(''),
  naissance = ref(''),
  cardProfil = ref(true),
  cardUpdateProfil = ref(false),
  cardActivity = ref(false),
  cardOrder = ref(false),
  cardBudget = ref(false),
  cardUserBakery = ref(false),
  cardBannerPlanning = ref(false),
  cardBannerAll = ref(false),
  cardBakerys = ref(false),
  cardNewsletter = ref(false),
  activity = ref(0),
  orders = ref(0),
  ordersTable = ref([]),
  bakerysTable = ref([]),
  newsletterTable = ref({}),
  activityTable = ref([]),
  tooltipShowDelay = ref(''),
  tooltipHideDelay = ref(''),
  credits = ref(0),
  admin = ref(0),
  subscription = ref(false),
  date_subcription = ref(''),
  totalTTC = ref(0),
  totalHT = ref(0),
  totalOrders = ref(0),
  reg_pays = ref(''),
  reg_pays_code = ref(''),
  reg_departement = ref(''),
  reg_ville = ref(''),
  reg_postcode = ref(''),
  reg_department_code = ref('')

// Row Data: The data to be displayed.
const rowData = ref([]),
  rowDataBakerys = ref([]),
  rowDataNewsletter = ref([]),
  paginationPageSize = ref(''),
  paginationPageSizeSelector = ref('')

const arrayBudget = ref([]),
  arrayViews = ref([]),
  arrayClick = ref([]),
  arrayRefund = ref([])

const optionsBudgets = ref(),
  optionsEstablishementViews = ref(),
  optionsEstablishementClick = ref(),
  optionsBannerClick = ref(),
  optionsBannerViews = ref(),
  optionsRefund = ref()

const onBeforeCellRender = ref()

const config = reactive({
  startDate: DayPilot.Date.today(),
  eventHeight: 70,
  cellWidth: 100,
  days: DayPilot.Date.today().daysInMonth(),
  locale: "fr-fr",
  timeHeaders: [{ groupBy: 'Month' }, { groupBy: 'Day', format: 'd' }],
  treeEnabled: true,
  viewType: "Week",
  showToolTip: false,
  onBeforeCellRender: args => {

    if (args.cell.start < DayPilot.Date.today()) {
      args.cell.properties.disabled = true;
      args.cell.properties.backColor = "#f0f0f0";
    }

    if (args.cell.start === DayPilot.Date.today()) {
      args.cell.properties.disabled = false;
      args.cell.properties.backColor = "#ffc107";
    }

  },
  eventMoveHandling: "Disabled",
  timeRangeSelectedHandling: "Disabled",
  eventResizeHandling: "Disabled",
  eventDeleteHandling: "Disabled",
  rowMoveHandling: "Disabled",
  taskMoveHandling: "Disabled",
  linkCreateHandling: "Disabled",
  rowCreateHandling: "Disabled",
}),
  next = ref(),
  previous = ref()

const bannerTable = ref([])

const notificationsActiveShow = ref(true)

export default defineComponent({
  name: 'AccountProfilComponent',
  components: {
    AgGridVue,
    DayPilotMonth,
    'ag-charts': AgCharts,
  },
  setup () {
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)
    const $q = useQuasar()
    const route = useRoute()
    const router = useRouter()

    const stateUser = computed(() => {
      return store.state.stateUser
    })

    const user = computed(() => {
      return store.state.stateUser.user
    })

    const user_bakery = computed(() => {
      return store.state.user_bakery
    })

    const searchPlace = computed(() => {
      return store.state.searchPlace
    })

    const paiement_status = computed(() => {
      return store.state.paiement_status
    })

    $q.notify.registerType('success-form', {
      icon: 'fa-solid fa-check',
      progress: false,
      color: 'green-6',
      textColor: 'white',
      classes: 'glossy',
      timeout: 3500
    })

    $q.notify.registerType('error-form', {
      icon: 'fa-solid fa-xmark',
      progress: false,
      color: 'red-6',
      textColor: 'white',
      classes: 'glossy',
      timeout: 3500
    })

    // sets 10 rows per page (default is 100)
    paginationPageSize.value = 10;

    // allows the user to select the page size from a predefined list of page sizes
    paginationPageSizeSelector.value = [5, 10, 20, 40, 60, 80, 100];

    var aYear = (route.params.year !== undefined) ? route.params.year : String(new Date().getFullYear())

    store.dispatch('fetchBudget', { 'year': aYear })

    setTimeout(() => {

      const show_budget = computed(() => {
        return store.state.show_budget
      })

      var budget = show_budget.value,
        months = show_budget.value.months,
        i = -1,
        i2 = -1

      budget.budget.forEach(element => {
        i++
        arrayBudget.value.push({ month: months[i], Paiement: element.totalTTC, Remboursement: element.total })
      });

      budget.refund.forEach(element => {
        i2++
        arrayRefund.value.push({ month: months[i2], Remboursement: element.total })
      });

      optionsBudgets.value = {
        title: {
          text: "Budget pour l'année " + aYear,
        },
        // Data: Data to be displayed in the chart
        data: arrayBudget.value,
        // Series: Defines which chart type and data to use
        series: [
          {
            type: 'line', xKey: 'month', stroke: "#129fc4", marker: {
              fill: '#129fc4',
              stroke: '#129fc4',
            }, stacked: true, yKey: 'Paiement', yName: "Paiement Paypal / Mollie"
          },
        ],
        locale: {
          localeText: AG_CHARTS_LOCALE_FR_FR,
        },
        legend: {
          enabled: true,
          item: {
            marker: {
              size: 20,
              strokeWidth: 3,
              shape: 'plus', // 'circle', 'square', 'cross', 'plus', 'triangle'
            },
          },
        },
        axes: [
          {
            position: "bottom",
            type: "category",
            title: {
              text: "Mois de l'année en cours",
            },
            crossLines: [
              {
                type: "line",
              },
            ],
          },
          {
            position: "left",
            type: "number",
            title: {
              text: "Montant (€)",
            },
            label: {
              formatter: (params) => `${params.value} €`,
            },
            crossLines: [
              {
                type: "line",
              },
            ],
          },
        ],
      }

      optionsRefund.value = {
        title: {
          text: "Remboursement pour l'année " + aYear,
        },
        // Data: Data to be displayed in the chart
        data: arrayRefund.value,
        // Series: Defines which chart type and data to use
        series: [
          {
            type: 'line', xKey: 'month', stroke: "#D21E75", stacked: true, marker: {
              fill: '#D21E75',
              stroke: '#D21E75',
            }, yKey: 'Remboursement', yName: "Remboursement Paypal / Mollie"
          }
        ],
        locale: {
          localeText: AG_CHARTS_LOCALE_FR_FR,
        },
        legend: {
          enabled: true,
          item: {
            marker: {
              size: 20,
              strokeWidth: 3,
              shape: 'circle', // 'circle', 'square', 'cross', 'plus', 'triangle'
            },
          },
        },
        axes: [
          {
            position: "bottom",
            type: "category",
            title: {
              text: "Mois de l'année en cours",
            },
            crossLines: [
              {
                type: "line",
              },
            ],
          },
          {
            position: "left",
            type: "number",
            title: {
              text: "Montant (€)",
            },
            label: {
              formatter: (params) => `${params.value} €`,
            },
            crossLines: [
              {
                type: "line",
                stroke: "#D21E75",
              },
            ],
          },
        ],
      }

    }, 1000);

    return {
      sendNewsletter (userLength) {

        function showNotif (message) {
          $q.notify({
            type: 'success-form',
            message: message
          })
        }

        function errorNotif (message = null) {
          $q.notify({
            type: 'error-form',
            message: message ? message : 'Une erreur est survenu !'
          })
        }

        if (admin.value === 1) {
          axios.get(process.env.WEBSITE + '/newsletter-send/all/null')
            .then((res) => {
              console.log(res.data)
              if (res.data.succes === true) {
                showNotif('La lettre d\'actualité a bien été envoyer à ' + userLength + ' utilisateurs !');
              }
            })
            .catch((error) => {
              errorNotif('Une erreur est survenue !');
            })

        }

      },
      visibleLoadingBakerys,
      visibleLoadingNewsletter,
      getAdresseApi () {

        var value = $('#reg_location').val()

        if (value.length >= 2) {

          $('.search-place').fadeIn(200)

          $('.search-place ul').html('<div style="position: relative;display: flex;width: 100%;align-items: center;justify-content: center;"><svg class="q-spinner text-warning" width="20px" height="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g></svg></div>')

          setTimeout(() => {

            $('.search-place ul').html('')

            store.dispatch('fetchSearchPlace', {
              search: value.trim()
            })

            if (this.searchPlace.length >= 1) {
              this.searchPlace.forEach(element => {
                $('.search-place ul').append('<li class="place-clic" data-adresse="' + element.formatted + '" data-pays="' + element.country + '" data-pays_code="' + element.country_code + '" data-departement="' + element.county + '" data-ville="' + element.city + '" data-postcode="' + element.postcode + '" data-department_code="' + element.department_COG + '"><i class="fa-solid fa-location-dot me-2"></i>' + element.formatted + '</li>')
              });
            } else {
              $('.search-place ul').html('<li>Il n\'y a aucun résultat correspondant à votre recherche !</li>')
              this.searchPlace = []
            }

          }, 2000);

        } else {
          $('.search-place').fadeOut(200)
          this.searchPlace = []
        }

      },
      searchPlace,
      closeModal () {

        window.addEventListener("orientationchange", function () {
          screen.orientation.unlock()
        });

      },
      folderPicture: process.env.WEBSITE + '/bakerys/images/',
      folderPictureUsers: process.env.WEBSITE + '/users/images/',
      showDetailEstablishement (id) {
        $('#right-info-' + id).toggleClass('show');
      },
      user_bakery,
      yearRouter: route.params.year,
      changeYearSelected (e) {
        window.location.href = '/my-account-profil/' + e.target.value
        router.go()
      },
      year: (route.params.year !== undefined) ? route.params.year : String(new Date().getFullYear()),
      optionsBudgets,
      optionsRefund,
      optionsEstablishementViews,
      optionsEstablishementClick,
      optionsBannerClick,
      optionsBannerViews,
      paginationPageSize,
      paginationPageSizeSelector,
      deleteActivity (id) {

        if (confirm("Êtes-vous sûr de vouloir supprimer cette activité ?")) {

          axios.get(process.env.WEBSITE + '/user-activity-delete/' + this.user.email + '/' + this.user.id + '/' + id)
            .then((res) => {
              if (res.status === 200) {
                $('#activityRow-' + id).fadeOut(200)
                $('#activityRow-' + id).remove()
              }
            })

        }

      },
      deleteEstablishement (bakeryId, id) {

        if (confirm("Êtes-vous sûr de vouloir supprimer cet établissement ?")) {

          axios.post(process.env.WEBSITE + '/user-establishement-delete', { email: this.user.email, user_id: this.user.id, bakeryId: bakeryId })
            .then((res) => {
              if (res.status === 200) {
                $('#establishement-' + id).fadeOut(200)
                $('#establishement-' + id).remove()
              }
            })

        }

      },
      showProfil () {
        cardProfil.value = true
        cardUpdateProfil.value = false
        cardActivity.value = false
        cardOrder.value = false
        cardBudget.value = false
        cardUserBakery.value = false
        cardBannerPlanning.value = false
        cardBannerAll.value = false
        cardBakerys.value = false
        cardNewsletter.value = false
        $('#card1').addClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').removeClass('active-list');
        $('#card5').removeClass('active-list');
        $('#card6').removeClass('active-list');
        $('#card7').removeClass('active-list');
        $('#card8').removeClass('active-list');
        $('#card9').removeClass('active-list');
        $('#card10').removeClass('active-list');

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#my-account-profil').offset().top
        }, '200')
      },
      showUpdateProfil () {
        cardProfil.value = false
        cardUpdateProfil.value = true
        cardActivity.value = false
        cardOrder.value = false
        cardBudget.value = false
        cardUserBakery.value = false
        cardBannerPlanning.value = false
        cardBannerAll.value = false
        cardBakerys.value = false
        cardNewsletter.value = false
        $('#card1').removeClass('active-list');
        $('#card2').addClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').removeClass('active-list');
        $('#card5').removeClass('active-list');
        $('#card6').removeClass('active-list');
        $('#card7').removeClass('active-list');
        $('#card8').removeClass('active-list');
        $('#card9').removeClass('active-list');
        $('#card10').removeClass('active-list');

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#my-account-profil').offset().top
        }, '200')
      },
      showActivity () {
        cardProfil.value = false
        cardUpdateProfil.value = false
        cardActivity.value = true
        cardOrder.value = false
        cardBudget.value = false
        cardUserBakery.value = false
        cardBannerPlanning.value = false
        cardBannerAll.value = false
        cardBakerys.value = false
        cardNewsletter.value = false
        $('#card1').removeClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').addClass('active-list');
        $('#card4').removeClass('active-list');
        $('#card5').removeClass('active-list');
        $('#card6').removeClass('active-list');
        $('#card7').removeClass('active-list');
        $('#card8').removeClass('active-list');
        $('#card9').removeClass('active-list');
        $('#card10').removeClass('active-list');

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#my-account-profil').offset().top
        }, '200')
      },
      showTextLoading (express = null) {
        visible.value = true
        $('.u-column1').fadeOut(300)
        $('.u-column2').fadeOut(300)
        showSimulatedReturnData.value = false

        if (express === null) {
          setTimeout(() => {
            visible.value = false
            showSimulatedReturnData.value = true
          }, 1500)
        }
      },
      showCartOrder () {
        cardProfil.value = false
        cardUpdateProfil.value = false
        cardActivity.value = false
        cardOrder.value = true
        cardBudget.value = false
        cardUserBakery.value = false
        cardBannerPlanning.value = false
        cardBannerAll.value = false
        cardBakerys.value = false
        cardNewsletter.value = false
        $('#card1').removeClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').addClass('active-list');
        $('#card5').removeClass('active-list');
        $('#card6').removeClass('active-list');
        $('#card7').removeClass('active-list');
        $('#card8').removeClass('active-list');
        $('#card9').removeClass('active-list');
        $('#card10').removeClass('active-list');

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#my-account-profil').offset().top
        }, '200')
      },
      showBudget () {
        cardProfil.value = false
        cardUpdateProfil.value = false
        cardActivity.value = false
        cardOrder.value = false
        cardBudget.value = true
        cardUserBakery.value = false
        cardBannerPlanning.value = false
        cardBannerAll.value = false
        cardBakerys.value = false
        cardNewsletter.value = false
        $('#card1').removeClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').removeClass('active-list');
        $('#card5').addClass('active-list');
        $('#card6').removeClass('active-list');
        $('#card7').removeClass('active-list');
        $('#card8').removeClass('active-list');
        $('#card9').removeClass('active-list');
        $('#card10').removeClass('active-list');

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#my-account-profil').offset().top
        }, '200')

      },
      showUserBakery () {
        cardProfil.value = false
        cardUpdateProfil.value = false
        cardActivity.value = false
        cardOrder.value = false
        cardBudget.value = false
        cardUserBakery.value = true
        cardBannerPlanning.value = false
        cardBannerAll.value = false
        cardBakerys.value = false
        cardNewsletter.value = false
        $('#card1').removeClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').removeClass('active-list');
        $('#card5').removeClass('active-list');
        $('#card6').addClass('active-list');
        $('#card7').removeClass('active-list');
        $('#card8').removeClass('active-list');
        $('#card9').removeClass('active-list');
        $('#card10').removeClass('active-list');

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#my-account-profil').offset().top
        }, '200')
      },
      showBannerPlanning () {
        cardProfil.value = false
        cardUpdateProfil.value = false
        cardActivity.value = false
        cardOrder.value = false
        cardBudget.value = false
        cardUserBakery.value = false
        cardBannerPlanning.value = true
        cardBannerAll.value = false
        cardBakerys.value = false
        cardNewsletter.value = false
        $('#card1').removeClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').removeClass('active-list');
        $('#card5').removeClass('active-list');
        $('#card6').removeClass('active-list');
        $('#card7').addClass('active-list');
        $('#card8').removeClass('active-list');
        $('#card9').removeClass('active-list');
        $('#card10').removeClass('active-list');

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#my-account-profil').offset().top
        }, '200')
      },
      showBannerAll () {

        cardProfil.value = false
        cardUpdateProfil.value = false
        cardActivity.value = false
        cardOrder.value = false
        cardBudget.value = false
        cardUserBakery.value = false
        cardBannerPlanning.value = false
        cardBannerAll.value = true
        cardBakerys.value = false
        cardNewsletter.value = false
        $('#card1').removeClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').removeClass('active-list');
        $('#card5').removeClass('active-list');
        $('#card6').removeClass('active-list');
        $('#card7').removeClass('active-list');
        $('#card8').addClass('active-list');
        $('#card10').removeClass('active-list');

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#my-account-profil').offset().top
        }, '200')

      },
      showBakerys (email) {

        if (visibleLoadingBakerys.value !== false) visibleLoadingBakerys.value = false

        bakerysTable.value = []
        rowDataBakerys.value = []

        cardProfil.value = false
        cardActivity.value = false
        cardOrder.value = false
        cardBudget.value = false
        cardUserBakery.value = false
        cardBannerPlanning.value = false
        cardBannerAll.value = false
        cardBakerys.value = true
        cardNewsletter.value = false
        $('#card1').removeClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').removeClass('active-list');
        $('#card5').removeClass('active-list');
        $('#card6').removeClass('active-list');
        $('#card7').removeClass('active-list');
        $('#card8').removeClass('active-list');
        $('#card9').addClass('active-list');
        $('#card10').removeClass('active-list');

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#my-account-profil').offset().top
        }, '200')

        // Bakerys
        if (admin.value === 1) {

          axios.get(process.env.WEBSITE + '/bakerys-admin/' + email)
            .then((res) => {

              if (res.data.succes === true) {
                // Static values
                bakerysTable.value = res.data.bakerysTable

                res.data.bakerysTable.forEach(element => {

                  rowDataBakerys.value.push({
                    'Id': element.id,
                    'Status': (element.active === 1) ? 'tick-in-circle.png' : (element.active === 0) ? 'cross-in-circle.png' : '',
                    'TooltipStatus': (element.active === 1) ? 'Active' : 'Inactive',
                    'Nom': element.title,
                    'Clics': element.clicks_bakery,
                    'Vues': element.views_bakery,
                    'Mise à jour': (element.updated_at !== null) ? moment(element.updated_at).format('DD MMMM YYYY à HH:mm') : '/',
                    'Crée le': (element.created_at !== null) ? moment(element.created_at).format('DD MMMM YYYY à HH:mm') : '/',
                  })

                  setTimeout(() => {
                    visibleLoadingBakerys.value = true
                  }, 1500);

                })

              }

            })

        }

      },
      showNewsletter (email) {

        if (visibleLoadingNewsletter.value !== false) visibleLoadingNewsletter.value = false

        newsletterTable.value = []
        rowDataNewsletter.value = []

        cardProfil.value = false
        cardActivity.value = false
        cardOrder.value = false
        cardBudget.value = false
        cardUserBakery.value = false
        cardBannerPlanning.value = false
        cardBannerAll.value = false
        cardBakerys.value = false
        cardNewsletter.value = true
        $('#card1').removeClass('active-list');
        $('#card2').removeClass('active-list');
        $('#card3').removeClass('active-list');
        $('#card4').removeClass('active-list');
        $('#card5').removeClass('active-list');
        $('#card6').removeClass('active-list');
        $('#card7').removeClass('active-list');
        $('#card8').removeClass('active-list');
        $('#card9').removeClass('active-list');
        $('#card10').addClass('active-list');

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#my-account-profil').offset().top
        }, '200')

        // Newsletter
        if (admin.value === 1) {

          axios.get(process.env.WEBSITE + '/newsletter-admin/' + email)
            .then((res) => {

              if (res.data.succes === true) {
                // Static values
                newsletterTable.value = res.data.newsletterTable

                res.data.newsletterTable.forEach(element => {

                  rowDataNewsletter.value.push({
                    'TooltipStatus': 'Envoyer maintenant',
                    '#': element.id,
                    'Email': element.email,
                    'Envoyé le': (element.deliver_at !== null) ? moment(element.deliver_at).format('DD MMMM YYYY à HH:mm') : '/',
                    'Crée le': (element.created_at !== null) ? moment(element.created_at).format('DD MMMM YYYY à HH:mm') : '/',
                  })

                  setTimeout(() => {
                    visibleLoadingNewsletter.value = true
                  }, 1500);

                })

              }

            })

        }

      },
      deleteAccount () {

        if (confirm("Êtes-vous sûr de vouloir supprimer votre compte My Bakery ?")) {

          axios.get(process.env.WEBSITE + '/user-delete/' + this.user.email + '/' + this.user.id)
            .then((res) => {
              if (res.status === 200) {
                sessionStorage.removeItem('email')
                sessionStorage.removeItem('token')
                window.location.reload()
              }
            })

        }

      },
      showNotif (message) {
        $q.notify({
          type: 'success-form',
          message: message
        })
      },
      errorNotif (message = null) {
        $q.notify({
          type: 'error-form',
          message: message ? message : 'Une erreur est survenue dans le formulaire.'
        })
      },
      visible,
      user,
      stateUser,
      moment: moment,
      Cookies: Cookies,
      showSimulatedReturnData,
      notificationsInactive () {

        notificationsActiveShow.value = false
        window.WonderPush = window.WonderPush || [];
        WonderPush.unsubscribeFromNotifications();

        document.addEventListener('deviceready', onDeviceReady, false)

        function onDeviceReady () {
          // L'utilisateur s'inscrit aux notifications de WonderPush
          WonderPush.unsubscribeFromNotifications(function () {
          })

          // You can also use this variation that will show an alert dialog
          // to Android users who have repeatedly denied the permission, taking them to the settings
          // of your app where they can flip the permission switch:
          // eslint-disable-next-line no-undef
          WonderPush.unsubscribeFromNotifications(true, function () {
          })
        }

        this.showNotif('Vous avez annulé votre inscription aux notifications de My Bakery.')

      },
      notificationsActive () {

        notificationsActiveShow.value = true
        window.WonderPush = window.WonderPush || [];
        WonderPush.subscribeToNotifications();

        document.addEventListener('deviceready', onDeviceReady, false)

        function onDeviceReady () {
          // L'utilisateur s'inscrit aux notifications de WonderPush
          WonderPush.subscribeToNotifications(function () {
          })

          // You can also use this variation that will show an alert dialog
          // to Android users who have repeatedly denied the permission, taking them to the settings
          // of your app where they can flip the permission switch:
          // eslint-disable-next-line no-undef
          WonderPush.subscribeToNotifications(true, function () {
          })
        }

        this.showNotif('Vous avez donné votre accord pour recevoir les notifications de My Bakery.')

      },
      notificationsActiveShow
    }
  },
  data () {
    const store = useStore()
    const route = useRoute()

    const show_views = computed(() => {
      return store.state.show_views
    })

    // Column Definitions: Defines the columns to be displayed. << Orders >>
    const colDefs = ref([
      { field: "methode", hide: true },
      { field: "CreatedAt", hide: true },
      { field: "idProduct", hide: true },
      { field: "TooltipStatus", hide: true },
      { field: "Nom2", hide: true },
      { field: "IconPack", hide: true },
      { field: "PaiementStatusValidate", hide: true },
      { field: "PaiementStatus", hide: true },
      { field: "Id", hide: true },
      { field: "#", filter: false, maxWidth: 80 },
      {
        field: "Nom", cellRenderer (params) {
          return `<div><span class="missionSpan"><i class="${params.data.IconPack} missionIcon" /><span class="missionTexte">${params.data.Nom2}</span></span></div>`
        }, filter: true, sortable: false, maxWidth: 150
      },
      { field: "Quantité", filter: false, maxWidth: 120, cellClass: 'cellCenter' },
      { field: "Total HT", filter: true, maxWidth: 130 },
      { field: "Total TTC", filter: true, maxWidth: 140 },
      { field: "Paiement par", filter: true, maxWidth: 140 },
      {
        field: "Statut", cellRenderer (params) {
          return '<span class="missionSpan"><img src="' + params.data.PaiementStatus + '" class="missionIcon"/></span>'
        }, filter: false, sortable: false, maxWidth: 80, cellClass: 'cellCenter', tooltipValueGetter (p) {
          return p.data.TooltipStatus
        }
      },
      { field: "Crée le", filter: false },
      { field: "Payé le", filter: false },
      { field: "Rembourser le", filter: false },
      {
        field: "Actions", filter: false, sortable: false, cellRenderer (params) {

          var data = ''

          if (params.data.PaiementStatusValidate !== 3 && params.data.PaiementStatusValidate !== 4) {
            data = '<a id="showOrderButton" data-paypal="' + params.data.Id + '" class="text-success cursor-pointer me-2"><i class="fa-regular fa-folder-open"></i></a><a id="refundButton" data-methode="' + params.data.methode + '" data-id="' + params.data.idProduct + '" data-token="' + params.data.Id + '" data-date="' + params.data.CreatedAt + '" class="text-danger cursor-pointer"><i class="fa-solid fa-cart-arrow-down"></i></a>'
          } else {
            data = '<a id="showOrderButton" data-paypal="' + params.data.Id + '" class="text-success cursor-pointer me-2"><i class="fa-regular fa-folder-open"></i></a>'
          }

          return data
        }, maxWidth: 100, cellClass: 'cellCenter'
      }
    ]);

    // Column Definitions: Defines the columns to be displayed << Bakerys >>
    const colDefsBakerys = ref([
      { field: "Id", hide: true },
      { field: "Status", hide: true },
      { field: "TooltipStatus", hide: true },

      { field: "Nom", filter: true, minWidth: 400 },
      { field: "Clics", filter: true, maxWidth: 110 },
      { field: "Vues", filter: true, maxWidth: 110 },
      {
        field: "Statut", cellRenderer (params) {
          return '<span class="missionSpan"><img src="' + params.data.Status + '" class="missionIcon"/></span>'
        }, filter: false, sortable: false, maxWidth: 80, cellClass: 'cellCenter', tooltipValueGetter (p) {
          return p.data.TooltipStatus
        }
      },
      { field: "Crée le", filter: false },
      { field: "Mise à jour", filter: true },
      {
        field: "Actions", filter: false, sortable: false, cellRenderer (params) {

          var data = ''

          if (params.data.TooltipStatus !== 'Active') {
            data = '<a id="activeButton" data-email="' + email.value + '" data-active="' + params.data.TooltipStatus + '" data-id="' + params.data.Id + '" class="text-danger cursor-pointer"><i class="fa-solid fa-check"></i></a>'
          } else {
            data = '<a id="activeButton" data-email="' + email.value + '" data-active="' + params.data.TooltipStatus + '" data-id="' + params.data.Id + '" class="text-success cursor-pointer me-2"><i class="fa-solid fa-xmark"></i></a>'
          }

          return data
        }, maxWidth: 100, cellClass: 'cellCenter'
      }
    ])

    const colDefsNewsletter = ref([
      { field: "TooltipStatus", hide: true },
      { field: "#", maxWidth: 60, filter: false },
      { field: "Email", minWidth: 300, filter: true },
      { field: "Envoyé le", filter: true },
      { field: "Crée le", filter: false },
      {
        field: "Actions", filter: false, sortable: false, cellRenderer (params) {

          var data = ''

          data = '<a id="newsletterButton" data-email="' + email.value + '" class="text-success cursor-pointer me-2"><i class="fa-solid fa-check"></i></a>'

          return data

        }, maxWidth: 100, cellClass: 'cellCenter', tooltipValueGetter (p) {
          return p.data.TooltipStatus
        }
      }
    ])

    return {
      preview: null,
      showDetailBanner (clicks, vues, bannerId, start, end, campaign_id, image, image2) {

        var aYear = (route.params.year !== undefined) ? route.params.year : String(new Date().getFullYear())

        axios.get(process.env.WEBSITE + '/user-banner/' + aYear + '/' + bannerId)
          .then((res) => {
            if (res.data.succes === true) {

              optionsBannerViews.value = []
              optionsBannerClick.value = []
              arrayClick.value = []
              arrayViews.value = []

              var views = res.data.views,
                click = res.data.click,
                months = res.data.months,
                i = -1,
                i2 = -1

              views.forEach(element => {
                i++
                arrayViews.value.push({ month: months[i], Views: element.totalId })
              });

              click.forEach(element => {
                i2++
                arrayClick.value.push({ month: months[i2], Click: element.totalId })
              });

              optionsBannerViews.value = {
                title: {
                  text: "Vue pour l'année " + aYear,
                },
                // Data: Data to be displayed in the chart
                data: arrayViews.value,
                // Series: Defines which chart type and data to use
                series: [
                  {
                    type: 'line', xKey: 'month', stroke: "#892580", marker: {
                      fill: '#892580',
                      stroke: '#892580',
                    }, stacked: true, yKey: 'Views', yName: "Vue(s)"
                  },
                ],
                locale: {
                  localeText: AG_CHARTS_LOCALE_FR_FR,
                },
                legend: {
                  enabled: true,
                  item: {
                    marker: {
                      size: 20,
                      strokeWidth: 3,
                      shape: 'plus', // 'circle', 'square', 'cross', 'plus', 'triangle'
                    },
                  },
                },
                axes: [
                  {
                    position: "bottom",
                    type: "category",
                    title: {
                      text: "Mois de l'année en cours",
                    },
                    crossLines: [
                      {
                        type: "line",
                      },
                    ],
                  },
                  {
                    position: "left",
                    type: "number",
                    title: {
                      text: "Vue(s)",
                    },
                    label: {
                      formatter: (params) => `${params.value} vues`,
                    },
                    crossLines: [
                      {
                        type: "line",
                      },
                    ],
                  },
                ],
              }

              optionsBannerClick.value = {
                title: {
                  text: "Clic pour l'année " + aYear,
                },
                // Data: Data to be displayed in the chart
                data: arrayClick.value,
                // Series: Defines which chart type and data to use
                series: [
                  {
                    type: 'line', xKey: 'month', stroke: "#508925", marker: {
                      fill: '#508925',
                      stroke: '#508925',
                    }, stacked: true, yKey: 'Click', yName: "Clic(s)"
                  },
                ],
                locale: {
                  localeText: AG_CHARTS_LOCALE_FR_FR,
                },
                legend: {
                  enabled: true,
                  item: {
                    marker: {
                      size: 20,
                      strokeWidth: 3,
                      shape: 'plus', // 'circle', 'square', 'cross', 'plus', 'triangle'
                    },
                  },
                },
                axes: [
                  {
                    position: "bottom",
                    type: "category",
                    title: {
                      text: "Mois de l'année en cours",
                    },
                    crossLines: [
                      {
                        type: "line",
                      },
                    ],
                  },
                  {
                    position: "left",
                    type: "number",
                    title: {
                      text: "Clic(s)",
                    },
                    label: {
                      formatter: (params) => `${params.value} clics`,
                    },
                    crossLines: [
                      {
                        type: "line",
                      },
                    ],
                  },
                ],
              }

            }

          })

        setTimeout(() => {

          $('#clicksBanner').text(clicks)
          $('#viewsBanner').text(vues)
          $('#startCampaign').html('<strong>Démarrage de la campagne</strong> <br/>' + moment(start).format('DD MMMM YYYY'))
          $('#endCampaign').html('<strong>Fin de la campagne</strong> <br/>' + moment(end).format('DD MMMM YYYY'))
          $('#titleCampaign').html('<strong>Campagne publicitaire n°' + campaign_id + '</strong>')
          $('#imageCampaign').attr('src', process.env.WEBSITE + '/banners/images/' + image)
          $('#image2Campaign').attr('src', process.env.WEBSITE + '/banners/images/' + image2)

          if ((moment(start).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD') || moment().format('YYYY-MM-DD') <= moment(end).format('YYYY-MM-DD'))) $('#statusCampaign').html('<strong>Statut de la campagne</strong> <br/>' + '<span><i style="font-size: 18px;" class="fa-solid fa-check text-success me-2"></i>Actif</span>')
          else $('#statusCampaign').html('<strong>Statut de la campagne</strong> <br/>' + '<span><i style="font-size: 18px;" class="fa-solid fa-xmark text-danger me-2"></i>Inactif</span>')

          $('#modalBannerShow').modal('show');

        }, 1500);
      },
      bannerTable,
      onBeforeCellRender,
      config,
      next: () => {
        config.startDate = config.startDate.addMonths(1);
        config.days = config.startDate.daysInMonth();
      },
      previous: () => {
        config.startDate = config.startDate.addMonths(-1);
        config.days = config.startDate.daysInMonth();
      },
      events: [],
      datePickerConfig: {
        locale: "fr-fr",
        showMonths: 1,
        skipMonths: 1,
        selectMode: "Week",
      },
      hideModal () {
        $('#modalOrderShow').modal('hide');
        $('body').removeClass('modal-open')
        $('body').removeAttr('style')
        $('.modal-backdrop').remove()
      },
      show_views,
      changeYear: (this.$route.params.year !== undefined) ? this.$route.params.year : moment().format('YYYY'),
      totalOrders,
      totalHT,
      totalTTC,
      tooltipShowDelay,
      tooltipHideDelay,
      localeText: AG_GRID_LOCALE_FR,
      rowData,
      rowDataBakerys,
      rowDataNewsletter,
      colDefs,
      colDefsBakerys,
      colDefsNewsletter,
      email,
      firstname,
      lastname,
      fonction,
      status_legale,
      siret,
      tva,
      location,
      avatar,
      phone,
      mobile,
      naissance,
      cardProfil,
      cardUpdateProfil,
      cardActivity,
      cardOrder,
      cardBudget,
      cardUserBakery,
      cardBannerPlanning,
      cardBannerAll,
      cardBakerys,
      cardNewsletter,
      v$: useValidate(),
      activity,
      activityTable,
      orders,
      ordersTable,
      bakerysTable,
      newsletterTable,
      credits,
      admin,
      subscription,
      date_subcription,

      reg_naissance: '',
      reg_firstname: '',
      reg_lastname: '',
      reg_function: '',
      reg_location,
      reg_mobile: '',
      reg_phone: '',

      reg_pays,
      reg_pays_code,
      reg_departement,
      reg_ville,
      reg_postcode,
      reg_department_code,

      reg_status_legale,
      reg_siret,
      reg_tva,

      replaces: function (st, rep, repWith) {
        const result = st.split(rep).join(repWith)
        return result;
      },
    }
  },
  computed: {
    calendar () {
      return this.$refs.calendar.control;
    }
  },
  methods: {
    async printThis () {

      const el = this.$refs.printcontent;

      const options = {
        type: "dataURL",
        background: '#FFFFFF',
        logging: true,
        allowTaint: true,
        useCORS: true,
      };
      const printCanvas = await html2canvas(el, options);

      const link = document.createElement("a");
      link.setAttribute("download", 'facture-' + moment().format('YYYY-MM-DD-HH-mm-ss') + '.jpg');
      link.setAttribute(
        "href",
        printCanvas
          .toDataURL("image/jpg")
          .replace("image/jpg", "image/octet-stream")
      );
      link.click();

    },
    updateProfil (e) {

      e.preventDefault()

      this.v$.$validate() // checks all inputs

      var options = {
        'id': this.user.id,
        'email': this.user.email,
        'status_legale': $('#reg_status_legale').val(),
        'siret': reg_siret.value,
        'tva': reg_tva.value,
        'firstname': this.reg_firstname,
        'lastname': this.reg_lastname,
        'naissance': this.reg_naissance,
        'fonction': this.reg_function,
        'location': reg_location.value,
        'phone': this.reg_phone,
        'mobile': this.reg_mobile,
        'pays': reg_pays.value,
        'pays_code': reg_pays_code.value,
        'departement': reg_departement.value,
        'ville': reg_ville.value,
        'postcode': reg_postcode.value,
        'department_code': reg_department_code.value,
      }

      if ($('#reg_status_legale').val() === '1' && this.reg_firstname && this.reg_lastname && this.reg_function && reg_location.value) {

        this.showTextLoading()

        axios.post(process.env.WEBSITE + '/update-profil', options)
          .then((res) => {

            if (res.data.succes === true) {

              this.showNotif('La modification de votre profil a été effectuée avec succès !')

              setTimeout(() => {
                $(document).find('.error-text').text('')
                $(document).find('.error-text').removeAttr()

              }, 3500);

            } else {
              this.errorNotif(res.data.message)
            }

          })
          .catch((error) => {
            this.errorNotif()
          })

      }

      if ($('#reg_status_legale').val() === '2' && reg_siret.value && reg_tva.value && this.reg_firstname && this.reg_lastname && this.reg_function && reg_location.value) {

        this.showTextLoading()

        axios.post(process.env.WEBSITE + '/update-profil', options)
          .then((res) => {

            if (res.data.succes === true) {

              this.showNotif('La modification de votre profil a été effectuée avec succès !')

              setTimeout(() => {
                $(document).find('.error-text').text('')
                $(document).find('.error-text').removeAttr()

              }, 3500);

            } else {
              this.errorNotif(res.data.message)
            }

          })
          .catch((error) => {
            this.errorNotif()
          })

      }

      if (!reg_siret.value) {
        $('.' + 'reg_siret' + '_error').attr('style', 'display: block')
        $('.' + 'reg_siret' + '_error').text("Le champs siret est obligatoire !");
      } else {
        $('.' + 'reg_siret' + '_error').removeAttr()
        $('.' + 'reg_siret' + '_error').text("");
      }

      if (!reg_tva.value) {
        $('.' + 'reg_tva' + '_error').attr('style', 'display: block')
        $('.' + 'reg_tva' + '_error').text("Le champs tva est obligatoire !");
      } else {
        $('.' + 'reg_tva' + '_error').removeAttr()
        $('.' + 'reg_tva' + '_error').text("");
      }

      if (!this.reg_firstname) {
        $('.' + 'reg_firstname' + '_error').attr('style', 'display: block')
        $('.' + 'reg_firstname' + '_error').text("Le champs prénom est obligatoire !");
      } else {
        $('.' + 'reg_firstname' + '_error').removeAttr()
        $('.' + 'reg_firstname' + '_error').text("");
      }

      if (!this.reg_lastname) {
        $('.' + 'reg_lastname' + '_error').attr('style', 'display: block')
        $('.' + 'reg_lastname' + '_error').text("Le champs nom est obligatoire !");
      } else {
        $('.' + 'reg_lastname' + '_error').removeAttr()
        $('.' + 'reg_lastname' + '_error').text("");
      }

      if (!this.reg_function) {
        $('.' + 'reg_function' + '_error').attr('style', 'display: block')
        $('.' + 'reg_function' + '_error').text("Le champs fonction est obligatoire !");
      } else {
        $('.' + 'reg_function' + '_error').removeAttr()
        $('.' + 'reg_function' + '_error').text("");
      }

      if (!reg_location.value) {
        $('.' + 'reg_location' + '_error').attr('style', 'display: block')
        $('.' + 'reg_location' + '_error').text("Le champs location est obligatoire !");
      } else {
        $('.' + 'reg_location' + '_error').removeAttr()
        $('.' + 'reg_location' + '_error').text("");
      }

    },
    loadEvents () {

      var data = []

      axios.get(process.env.WEBSITE + '/bakery-banner-events')
        .then((res) => {

          if (res.data.succes === true) {

            data = res.data.events;

            this.calendar.update({ events: data });

          }

        })

    },
    saveImage () {

      const form_data = new FormData();

      form_data.append('file', this.image);
      form_data.append('userEmail', email.value);

      axios({
        method: "POST",
        url: process.env.WEBSITE + '/update-profil-picture',
        data: form_data,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
        .then((res) => {

          if (res.data.succes === true) {

            $('.removeImage').hide()
            $('.addImage').hide()
            $('.file-input').show()
            $('.preview').show()
            $('.first-preview').hide()
            this.image = null
            $('.image-error').hide()
            $('.image-error').html('')

          } else {
            this.errorNotif()
          }

        })
        .catch((error) => {
          this.errorNotif()
        })

    },
    removeImage () {
      $('.removeImage').hide()
      $('.addImage').hide()
      $('.file-input').show()
      $('.preview').hide()
      $('.first-preview').show()
      this.image = null
      $('.image-error').hide()
      $('.image-error').html('')
    },
    handleFileChange: function (event) {

      const file = event.files[0],
        ext = file.name.split('.').pop(),
        extValid = ['png', 'jpeg', 'jpg']

      if (event.files[0].size <= 1684688109387) {

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = evt => {

          let img = new Image();

          img.onload = () => {

            if (extValid.indexOf(ext) !== -1) {

              // dimension de l'image
              if (img.width === 150 && img.height === 150) {

                this.image = file

                $('.removeImage').show()
                $('.addImage').show()
                $('.file-input').hide()
                $('.first-preview').hide()
                $('.preview').show()
                this.preview = URL.createObjectURL(file);

              } else {

                this.image = null
                $('.image-error').show()
                $('.image-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être au format 150 pixels par 150 pixels.')

              }

            } else {

              this.image = null
              $('.image-error').show()
              $('.image-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être de type image.')

            }

          }

          img.src = evt.target.result;

          $('.image-error').hide()
          $('.image-error').html('')

        }

        reader.onerror = evt => {
          console.error(evt);
        }

      } else {
        $('.removeImage').hide()
        $('.addImage').hide()
        this.image = null
        $('.image-error').show()
        $('.image-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher est trop lourd ! Il ne doit pas dépasser 8 mo.')
      }

    },
  },
  validations () {
  },
  beforeMount () {
    tooltipShowDelay.value = 0;
    tooltipHideDelay.value = 2000;
  },
  mounted () {

    const $q = useQuasar()
    const store = useStore()
    const route = useRoute()

    function onDeviceReady () {
      // Prompt user for push subscription
      WonderPush.isSubscribedToNotifications(function (isSubscribed) {

        if (isSubscribed) {
          notificationsActiveShow.value = true
        } else {
          notificationsActiveShow.value = false
        }

      });

    }
    // In this example, we'll prompt the user as soon as the 'deviceready' event is fired
    // There's good chances you'll find a more suitable moment in the user journey
    document.addEventListener('deviceready', onDeviceReady);

    window.WonderPush = window.WonderPush || [];
    WonderPush.push(function () {
      WonderPush.isSubscribedToNotifications().then(function (isSubscribed) {

        if (isSubscribed) {
          notificationsActiveShow.value = true
        } else {
          notificationsActiveShow.value = false
        }

      });
    });

    this.showTextLoading()

    if (this.$route.params.year !== undefined) this.year = this.$route.params.year

    setTimeout(() => {
      if (sessionStorage.getItem('token') !== null) {
        axios.get(process.env.WEBSITE + '/user-profil/' + SessionStorage.getItem('email'))
          .then((res) => {
            if (res.status === 200) {

              var userId = res.data.user.id,
                userEmail = res.data.user.email

              if (this.$route.params.year !== undefined) {
                cardProfil.value = false
                cardUpdateProfil.value = false
                cardActivity.value = false
                cardOrder.value = false
                cardBudget.value = true
                cardUserBakery.value = false
                cardBannerPlanning.value = false
                cardBannerAll.value = false
                cardBakerys.value = false
                cardNewsletter.value = false
                $('#card1').removeClass('active-list');
                $('#card2').removeClass('active-list');
                $('#card3').removeClass('active-list');
                $('#card4').removeClass('active-list');
                $('#card5').addClass('active-list');
                $('#card6').removeClass('active-list');
                $('#card7').removeClass('active-list');
                $('#card8').removeClass('active-list');
                $('#card9').removeClass('active-list');
                $('#card10').removeClass('active-list');

              } else {

                cardProfil.value = true
                cardUpdateProfil.value = false
                cardActivity.value = false
                cardOrder.value = false
                cardBudget.value = false
                cardUserBakery.value = false
                cardBannerPlanning.value = false
                cardBannerAll.value = false
                cardBakerys.value = false
                cardNewsletter.value = false
                $('#card1').addClass('active-list');
                $('#card2').removeClass('active-list');
                $('#card3').removeClass('active-list');
                $('#card4').removeClass('active-list');
                $('#card5').removeClass('active-list');
                $('#card6').removeClass('active-list');
                $('#card7').removeClass('active-list');
                $('#card8').removeClass('active-list');
                $('#card9').removeClass('active-list');
                $('#card10').removeClass('active-list');

              }

              // Static values
              email.value = userEmail
              firstname.value = res.data.user.firstname
              lastname.value = res.data.user.lastname
              location.value = res.data.user.location
              fonction.value = res.data.user.fonction
              status_legale.value = res.data.user.status_legale
              siret.value = res.data.user.siret
              tva.value = res.data.user.tva
              phone.value = res.data.user.phone
              mobile.value = res.data.user.mobile
              naissance.value = res.data.user.naissance
              credits.value = res.data.user.credits
              admin.value = res.data.user.admin
              subscription.value = res.data.subscription
              date_subcription.value = res.data.dateSubcription
              avatar.value = res.data.user.image

              // Form dynamique values
              this.reg_firstname = res.data.user.firstname
              this.reg_lastname = res.data.user.lastname
              reg_location.value = res.data.user.location
              this.reg_function = res.data.user.fonction
              this.reg_phone = res.data.user.phone
              this.reg_mobile = res.data.user.mobile
              this.reg_naissance = res.data.user.naissance

              reg_status_legale.value = res.data.user.status_legale
              $('#reg_status_legale').val(res.data.user.status_legale)
              reg_siret.value = res.data.user.siret
              reg_tva.value = res.data.user.tva

              reg_pays.value = res.data.user.pays
              reg_pays_code.value = res.data.user.pays_code
              reg_departement.value = res.data.user.departement
              reg_ville.value = res.data.user.ville
              reg_postcode.value = res.data.user.postcode
              reg_department_code.value = res.data.user.department_code

              // Verificaiton si l'user est dans une boulangerie
              store.dispatch('fetchUserBakery', { 'email': userEmail, 'id': userId })
              //

              axios.get(process.env.WEBSITE + '/user-activity/' + userEmail + '/' + userId)
                .then((res) => {
                  if (res.status === 200) {
                    // Static values
                    activity.value = (res.data.activity == []) ? 0 : res.data.activity
                    activityTable.value = res.data.activityTable
                  }
                })

              var axYear = (this.$route.params.year !== undefined) ? this.$route.params.year : String(new Date().getFullYear())

              axios.get(process.env.WEBSITE + '/user-orders/' + userEmail + '/' + userId + '/' + axYear)
                .then((res) => {

                  if (res.status === 200) {
                    // Static values
                    orders.value = (res.data.orders == []) ? 0 : res.data.orders
                    ordersTable.value = res.data.ordersTable
                    totalOrders.value = (res.data.orders == []) ? 0 : res.data.orders
                    totalHT.value = (res.data.totalHT == []) ? 0 : res.data.totalHT
                    totalTTC.value = (res.data.totalTTC == []) ? 0 : res.data.totalTTC

                    res.data.ordersTable.forEach(element => {

                      rowData.value.push({
                        'methode': element.paiement,
                        'CreatedAt': moment(element.created_at).format('YYYY-MM-DD'),
                        'idProduct': element.id,
                        'TooltipStatus': element.titleStatus,
                        'Nom2': 'Pack ' + element.title,
                        'IconPack': element.image,
                        'PaiementStatusValidate': element.status,
                        'PaiementStatus': (element.status === 1) ? 'cross-in-warning.png' : (element.status === 2) ? 'tick-in-circle.png' : (element.status === 3) ? 'cross-in-circle.png' : (element.status === 4) ? 'cross-in-circle.png' : '',
                        'Id': element.paypal_id,
                        '#': element.id,
                        'Quantité': element.qte,
                        'Total HT': element.total_ht + ' €',
                        'Total TTC': element.total_ttc + ' €',
                        'Paiement par': element.paiement,
                        'Statut': true,
                        'Crée le': (element.created_at !== null) ? moment(element.created_at).format('DD MMMM YYYY à HH:mm') : '/',
                        'Payé le': (element.validate_at !== null) ? moment(element.validate_at).format('DD MMMM YYYY à HH:mm') : '/',
                        'Rembourser le': (element.refund_at !== null) ? moment(element.refund_at).format('DD MMMM YYYY à HH:mm') : '/',
                      })

                    })

                    function showNotif (message) {
                      $q.notify({
                        type: 'success-form',
                        message: message
                      })
                    }

                    function errorNotif (message = null) {
                      $q.notify({
                        type: 'error-form',
                        message: message ? message : 'Votre demande de remboursement ne peut pas aboutir !'
                      })
                    }

                    function refundOrder (id, methode, tokenPaiement, date) {

                      window.addEventListener("orientationchange", function () {
                        screen.orientation.lock('landscape');
                      });

                      if (moment().add(14, 'days').format('YYYY-MM-DD') >= moment(date).format('YYYY-MM-DD')) {

                        if (methode === "Paypal") {

                          axios.post(process.env.WEBSITE + '/order-refund', { 'tokenPaiement': tokenPaiement })
                            .then((res) => {

                              if (res.data.succes === true) {

                                showNotif('Votre demande de remboursement à bien été pris en compte !');

                                setTimeout(() => {

                                  window.location.reload()

                                }, 2500);

                              } else {
                                errorNotif(paiement_status.message);
                              }

                            })

                        } else if (methode === "Mollie") {

                          axios.post(process.env.WEBSITE + '/order-refund-mobilie', { 'tokenPaiement': tokenPaiement })
                            .then((res) => {

                              if (res.data.succes === true) {

                                showNotif('Votre demande de remboursement à bien été pris en compte !');

                                setTimeout(() => {

                                  window.location.reload()

                                }, 2500);

                              } else {
                                errorNotif(paiement_status.message);
                              }

                            })

                        }

                      } else {
                        errorNotif('Votre demande de remboursement ne peut pas aboutir !');
                      }

                    }

                    function showOrder (paypalId) {

                      window.addEventListener("orientationchange", function () {
                        screen.orientation.lock('landscape');
                      });

                      store.dispatch('fetchShowOrder', { 'paypalId': paypalId })

                      const show_order = computed(() => {
                        return store.state.show_order
                      })

                      setTimeout(() => {
                        $('#modalOrderShow').modal('show');
                      }, 1500);

                      // Modal Static Values

                      setTimeout(() => {
                        console.log(show_order.value.order)
                        if (show_order.value.order.status >= 5) $('#staticOrderShow2').text(moment(show_order.value.order.validate_at).format('DD MMMM YYYY à HH:mm'))
                        if (show_order.value.order.status === 4) $('#staticOrderShow2').text(moment(show_order.value.order.refund_at).format('DD MMMM YYYY à HH:mm'))
                        if (show_order.value.order.status === 1) $('#staticOrderShow2').text(moment(show_order.value.order.created_at).format('DD MMMM YYYY à HH:mm'))
                        if (show_order.value.order.status === 2) $('#staticOrderShow2').text(moment(show_order.value.order.validate_at).format('DD MMMM YYYY à HH:mm'))
                        if (show_order.value.order.status === 3) $('#staticOrderShow2').text(moment(show_order.value.order.created_at).format('DD MMMM YYYY à HH:mm'))

                        if (show_order.value.order.status === 1) $('#staticDate').text('Crée le')
                        if (show_order.value.order.status === 2) $('#staticDate').text('Payé le')
                        if (show_order.value.order.status === 3) $('#staticDate').text('Crée le')
                        if (show_order.value.order.status === 4) $('#staticDate').text('Rembourser le')
                        if (show_order.value.order.status === 5) $('#staticDate').text('Livré le')

                        $('#staticOrderShow3').text(String(show_order.value.order.paypal_id).replace('PAYID-', '').replace('tr_', ''))
                        $('#staticOrderShow4').html('<span><i class="me-2 ' + show_order.value.order.image + '"></i></span>' + '<span>Pack ' + show_order.value.order.title + '</span>')
                        $('#staticOrderShow5').text(show_order.value.order.total_ht + ' €')
                        $('#staticOrderShow6').text('0.00 €')
                        $('#staticOrderShow7').text(show_order.value.order.total_ttc + ' €')

                        $('#staticOrderShow8').text(show_order.value.order.recipient_name_payer)
                        $('#staticOrderShow9').text(show_order.value.order.email_payer)
                        $('#staticOrderShow10').text(show_order.value.order.line_payer)
                        if (show_order.value.order.city_payer !== null) $('#staticOrderShow11').text(show_order.value.order.city_payer + ' ' + show_order.value.order.postal_code_payer)
                        else $('#staticOrderShow11').text('')
                        $('#staticOrderShow12').text(show_order.value.order.country_code_payer)

                        $('#staticOrderShow13').html('<ul>' + show_order.value.order.content + '</ul>')

                        if (show_order.value.order.paiement === 'Paypal') {
                          $('.imagePaiement').attr('src', 'paypal.png')
                        } else if (show_order.value.order.paiement === 'Mollie') {
                          $('.imagePaiement').attr('src', 'mollie.jpg')
                        }

                        if (show_order.value.order.recipient_name_payer === null) {
                          $('#staticOrderCoordonnees').hide()
                          $('#staticOrderCoordonneesBr').hide()
                          $('#staticOrderShow8').hide()
                          $('#staticOrderShow8Br').hide()
                        }

                        if (show_order.value.order.email_payer === null) {
                          $('#staticOrderShow9').hide()
                          $('#staticOrderShow9Br').hide()
                        }

                        if (show_order.value.order.line_payer === null) {
                          $('#staticOrderShow10').hide()
                          $('#staticOrderShow10Br').hide()
                        }

                        if (show_order.value.order.city_payer === null) {
                          $('#staticOrderShow11').hide()
                          $('#staticOrderShow1Br').hide()
                        }

                        if (show_order.value.order.country_code_payer === null) {
                          $('#staticOrderShow12').hide()
                        }

                        // ProgressBar
                        var progressLine = ''

                        if (show_order.value.order.status >= 1) progressLine += '<li class="step0 active" id="step1">Commande crée</li>'
                        if (show_order.value.order.status >= 1) progressLine += '<li class="step0 active text-center" id="step2">Paiement en attente</li>'

                        if (show_order.value.order.status >= 2 && show_order.value.order.status !== 3 && show_order.value.order.status !== 4) progressLine += '<li class="step0 active text-right" id="step3">Paiement accepté</li>'

                        if (show_order.value.order.status === 3) progressLine += '<li class="step0 text-right" id="step3">Paiement accepté</li>'
                        if (show_order.value.order.status === 4) progressLine += '<li class="step0 active text-right" id="step3">Paiement accepté</li>'

                        if (show_order.value.order.status <= 1) progressLine += '<li class="step0 text-right" id="step3">Paiement accepté</li>'
                        if (show_order.value.order.status === 2 && show_order.value.order.status !== 3) progressLine += '<li class="step0 active text-right" id="step4">Commande livré</li>'
                        if (show_order.value.order.status <= 3 && show_order.value.order.status !== 2) progressLine += '<li class="step0 text-right" id="step4">Commande livré</li>'
                        if (show_order.value.order.status === 4) progressLine += '<li class="step0 active text-right" id="step4">Commande livré</li>'


                        $('#progressbar').html(progressLine)

                      }, 1000);

                    }

                    $(document).on('click', '#refundButton', function (e) {

                      e.preventDefault()

                      var id = $(this).data('id'),
                        date = $(this).data('date'),
                        methode = $(this).data('methode'),
                        tokenPaiement = $(this).data('token')

                      refundOrder(id, methode, tokenPaiement, date)

                    })

                    $(document).on('click', '#showOrderButton', function (e) {

                      e.preventDefault()

                      var paypal = $(this).data('paypal')

                      showOrder(paypal)

                    })

                    $(document).on('click', '#showDetailEstablishement', function (e) {

                      e.preventDefault()

                      var bakeryId = $(this).data('id')

                      showDetailEstablishement(bakeryId)

                    })

                    $(document).on('click', '#activeButton', function (e) {

                      e.preventDefault()

                      var id = $(this).data('id'),
                        active = $(this).data('active'),
                        email = $(this).data('email')

                      changeStatusBakery(id, active, email)

                    })

                    $(document).on('click', '#newsletterButton', function (e) {

                      e.preventDefault()

                      var email = $(this).data('email')

                      sendNewsletterFirstUser(email)

                    })

                    // Modal Show Details Establishement
                    function showDetailEstablishement (bakeryId) {

                      window.addEventListener("orientationchange", function () {
                        screen.orientation.lock('landscape');
                      });

                      optionsEstablishementViews.value = []
                      optionsEstablishementClick.value = []
                      arrayClick.value = []
                      arrayViews.value = []

                      setTimeout(() => {
                        $('#modalEstablishementShow').modal('toggle');
                      }, 1500);

                      if (subscription.value === true) {

                        var aYear = (route.params.year !== undefined) ? route.params.year : String(new Date().getFullYear())

                        axios.get(process.env.WEBSITE + '/user-establishement/' + aYear + '/' + bakeryId)
                          .then((res) => {
                            if (res.data.succes === true) {

                              var views = res.data.views,
                                click = res.data.click,
                                months = res.data.months,
                                i = -1,
                                i2 = -1

                              views.forEach(element => {
                                i++
                                arrayViews.value.push({ month: months[i], Views: element.totalId })
                              });

                              click.forEach(element => {
                                i2++
                                arrayClick.value.push({ month: months[i2], Click: element.totalId })
                              });

                              optionsEstablishementViews.value = {
                                title: {
                                  text: "Vue pour l'année " + aYear,
                                },
                                // Data: Data to be displayed in the chart
                                data: arrayViews.value,
                                // Series: Defines which chart type and data to use
                                series: [
                                  {
                                    type: 'line', xKey: 'month', stroke: "#892580", marker: {
                                      fill: '#892580',
                                      stroke: '#892580',
                                    }, stacked: true, yKey: 'Views', yName: "Vue(s) par fiche d'établissement"
                                  },
                                ],
                                locale: {
                                  localeText: AG_CHARTS_LOCALE_FR_FR,
                                },
                                legend: {
                                  enabled: true,
                                  item: {
                                    marker: {
                                      size: 20,
                                      strokeWidth: 3,
                                      shape: 'plus', // 'circle', 'square', 'cross', 'plus', 'triangle'
                                    },
                                  },
                                },
                                axes: [
                                  {
                                    position: "bottom",
                                    type: "category",
                                    title: {
                                      text: "Mois de l'année en cours",
                                    },
                                    crossLines: [
                                      {
                                        type: "line",
                                      },
                                    ],
                                  },
                                  {
                                    position: "left",
                                    type: "number",
                                    title: {
                                      text: "Vue(s)",
                                    },
                                    label: {
                                      formatter: (params) => `${params.value} vues`,
                                    },
                                    crossLines: [
                                      {
                                        type: "line",
                                      },
                                    ],
                                  },
                                ],
                              }

                              optionsEstablishementClick.value = {
                                title: {
                                  text: "Clic pour l'année " + aYear,
                                },
                                // Data: Data to be displayed in the chart
                                data: arrayClick.value,
                                // Series: Defines which chart type and data to use
                                series: [
                                  {
                                    type: 'line', xKey: 'month', stroke: "#508925", marker: {
                                      fill: '#508925',
                                      stroke: '#508925',
                                    }, stacked: true, yKey: 'Click', yName: "Clic(s) par fiche d'établissement"
                                  },
                                ],
                                locale: {
                                  localeText: AG_CHARTS_LOCALE_FR_FR,
                                },
                                legend: {
                                  enabled: true,
                                  item: {
                                    marker: {
                                      size: 20,
                                      strokeWidth: 3,
                                      shape: 'plus', // 'circle', 'square', 'cross', 'plus', 'triangle'
                                    },
                                  },
                                },
                                axes: [
                                  {
                                    position: "bottom",
                                    type: "category",
                                    title: {
                                      text: "Mois de l'année en cours",
                                    },
                                    crossLines: [
                                      {
                                        type: "line",
                                      },
                                    ],
                                  },
                                  {
                                    position: "left",
                                    type: "number",
                                    title: {
                                      text: "Clic(s)",
                                    },
                                    label: {
                                      formatter: (params) => `${params.value} clics`,
                                    },
                                    crossLines: [
                                      {
                                        type: "line",
                                      },
                                    ],
                                  },
                                ],
                              }

                            }
                          })
                          .catch((error) => {
                            console.log(error)
                          })

                      }

                    }

                    // Change statut bakery by id
                    function changeStatusBakery (id, active, email) {

                      var status = 0

                      if (active === 'Active') {
                        status = 0
                      } else {
                        status = 1
                      }

                      if (admin.value === 1) {
                        axios.post(process.env.WEBSITE + '/bakerys-admin-update', {
                          id,
                          email,
                          status
                        })
                          .then((res) => {
                            if (res.data.succes === true) {
                              showNotif('La boulangerie a bien été modifiée !');
                            }
                          })
                          .catch((error) => {
                            errorNotif('Une erreur est survenue !');
                          })

                      }

                    }

                    // Send Newsletter for one user by email
                    function sendNewsletterFirstUser (email) {

                      if (admin.value === 1) {
                        axios.get(process.env.WEBSITE + '/newsletter-send/first/' + email)
                          .then((res) => {
                            console.log(res.data)
                            if (res.data.succes === true) {
                              showNotif('La lettre d\'actualité a bien été envoyer à ' + email + ' !');
                            }
                          })
                          .catch((error) => {
                            errorNotif('Une erreur est survenue !');
                          })

                      }

                    }

                  }

                })

              axios.get(process.env.WEBSITE + '/user-banners/' + userEmail + '/' + userId)
                .then((res) => {
                  if (res.status === 200) {
                    // Static values
                    bannerTable.value = res.data.bannerTable
                  }
                })

              // Calendar
              if (bannerTable.value.length >= 1) {
                this.loadEvents();
              }
            }

          })

      } else {
        this.$router.push('/')
      }
    }, 200)

    $(document).on('click', '.place-clic', function (e) {

      e.preventDefault();

      var adresse = $(this).data('adresse'),
        pays = $(this).data('pays'),
        pays_code = $(this).data('pays_code'),
        departement = $(this).data('departement'),
        ville = $(this).data('ville'),
        postcode = $(this).data('postcode'),
        department_code = $(this).data('department_code')

      reg_location.value = adresse
      reg_pays.value = pays
      reg_pays_code.value = pays_code
      reg_departement.value = departement
      reg_ville.value = ville
      reg_postcode.value = postcode
      reg_department_code.value = department_code

      $('#reg_location').val(adresse)

      $('.search-place').fadeOut(200)

      setTimeout(() => {
        $('.search-place ul').html('')
        this.searchPlace = []
      }, 300);

    })

  }

})

</script>
