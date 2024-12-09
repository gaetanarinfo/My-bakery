<template name="BakeryComponent">
  <div class="background fadeIn2 bb background1">

    <div class="content">

      <h1>{{ bakery.title }}</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a @click="this.$router.push('/')">Accueil</a></li>

            <li class="before"><a role="button" @click="this.$router.push('/bakerys')">Boulangeries</a></li>

            <li class="active">{{ bakery.title }}</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div class="page-bakery-one bakery-single section fadeIn3">

    <div class="container">

      <div class="bakery-detail u-column2" v-show="showSimulatedReturnData">

        <div class="bakery">

          <div class="row">

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 widthMaxCol">

              <div class="thumbnail">

                <div id="slider_1" class="sliderimgSpec" tabindex="0">
                  <img class="sliderSpec" v-if="bakery.image === 'default.jpg'" :src="'bakerys/' + bakery.image"
                    :alt="bakery.title">
                  <div class="sliderSpec" v-else :style="'background: url(' + folderPicture + bakery.image + ');'">
                  </div>
                </div>

                <div id="slider_2" class="sliderimgSpec hide" v-if="bakery.image_2 !== 'default2.jpg'" tabindex="0">
                  <div :style="'background: url(' + folderPicture + bakery.image_2 + ');'" class="sliderSpec">
                  </div>
                </div>

                <div id="slider_3" class="sliderimgSpec hide" v-if="bakery.image_3 !== 'default.jpg'" tabindex="0">
                  <div :style="'background: url(' + folderPicture + bakery.image_3 + ');'" class="sliderSpec">
                  </div>
                </div>

                <div id="slider_4" class="sliderimgSpec hide" v-if="bakery.image_4 !== 'default2.jpg'" tabindex="0">
                  <div :style="'background: url(' + folderPicture + bakery.image_4 + ');'" class="sliderSpec">
                  </div>
                </div>

              </div>

              <div class="preview">

                <div id="slider_image_1" class="sliderimgSpec" tabindex="0">
                  <img class="sliderSpec active" v-if="bakery.image === 'default.jpg'" :src="'bakerys/' + bakery.image"
                    :alt="bakery.title">
                  <div class="sliderSpec active" v-else
                    :style="'background: url(' + folderPicture + bakery.image + ');'">
                  </div>
                </div>

                <div id="slider_image_2" class="sliderimgSpec" v-if="bakery.image_2 !== 'default2.jpg'" tabindex="0">
                  <div :style="'background: url(' + folderPicture + bakery.image_2 + ');'" class="sliderSpec">
                  </div>
                </div>

                <div id="slider_image_3" class="sliderimgSpec" v-if="bakery.image_3 !== 'default.jpg'" tabindex="0">
                  <div :style="'background: url(' + folderPicture + bakery.image_3 + ');'" class="sliderSpec">
                  </div>
                </div>

                <div id="slider_image_4" class="sliderimgSpec" v-if="bakery.image_4 !== 'default2.jpg'" tabindex="0">
                  <div :style="'background: url(' + folderPicture + bakery.image_4 + ');'" class="sliderSpec">
                  </div>
                </div>

              </div>

            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              <div class="info">
                <h2>{{ bakery.title }}</h2>

                <div class="rating last-bakery">

                  <div class="choix">

                    <div class="br-widget">

                      <a v-if="bakery.counter_choix !== 0" v-for="note4 in 5" :key="note4" :data-rating-value="note4"
                        :data-rating-text="note4"
                        v-bind:class="note4 > Math.round(bakery.counter_choix * 5 / bakery.sum_choix) ? '' : 'br-selected'"></a>

                      <a :data-rating-value="note4" :data-rating-text="note4" v-if="bakery.counter_choix === 0"
                        v-for="note4 in 5" :key="note4" class=""></a>

                      <div v-if="bakery.counter_choix !== 0" class="br-current-rating">{{
                        Math.round(bakery.counter_choix * 5 / bakery.sum_choix)
                      }}</div>

                      <div class="br-current-rating" v-else>0</div>

                    </div>

                  </div>

                </div>

                <div>
                  <p><strong>{{ bakery.adresse }}</strong></p>
                </div>

                <div>
                  <p class="phone"><a :href="'tel:' + bakery.phone"><i class="fa-solid fa-phone me-2"></i><strong>{{
                    bakery.phone
                        }}</strong></a></p>
                </div>

                <div>
                  <p><i class="fa-brands fa-accessible-icon me-2"></i> Accès handicapé <span
                      :class="(bakery.handicap == 0) ? 'text-danger' : 'text-success'"><i v-if="bakery.handicap == 0"
                        class="fa-solid fa-xmark text-danger ms-2"></i><i v-else
                        class="fa-solid text-success fa-check ms-2"></i></span></p>
                </div>

                <div>
                  <p><i class="fa-solid fa-truck me-2"></i>Livraison <span
                      :class="(bakery.delivery == 0) ? 'text-danger' : 'text-success'"><i v-if="bakery.delivery == 0"
                        class="fa-solid fa-xmark text-danger ms-2"></i><i v-else
                        class="fa-solid text-success fa-check ms-2"></i></span></p>
                </div>

                <div>
                  <p><i class="fa-solid fa-utensils me-2"></i>Restauration sur place <span
                      :class="(bakery.dine_in == 0) ? 'text-danger' : 'text-success'"><i v-if="bakery.dine_in == 0"
                        class="fa-solid fa-xmark text-danger ms-2"></i><i v-else
                        class="fa-solid text-success fa-check ms-2"></i></span></p>
                </div>

                <div v-if="bakery.website !== null && bakery.website !== ''">
                  <p class="website"><a :href="bakery.website" target="_blank"><i
                        class="fa-solid fa-globe me-2"></i>Visiter le site internet</a></p>
                </div>

                <div class="short-desc">

                  <p><strong>{{ bakery.small_content }}</strong></p>

                </div>

                <div class="simple-action grid-mobile text-end">

                  <div v-if="Cookies.has('bakerysList') !== false">

                    <a v-if="Cookies.get('bakerysList').indexOf(bakery.id) != -1" @click="saveBakeryList(bakery.id)"
                      :class="'btn btn-bakery delete-bakery-list-' + bakery.id"><i
                        class="fa-solid fa-heart-circle-xmark me-2 text-danger"></i>Supprimer</a>

                    <a v-else @click="saveBakeryList(bakery.id)" :class="'btn btn-bakery bakery-list-' + bakery.id"><i
                        class="fa-solid fa-heart me-2 text-danger"></i>Ajouter à ma liste</a>

                  </div>

                  <div v-else>

                    <a @click="saveBakeryList(bakery.id)" :class="'btn btn-bakery bakery-list-' + bakery.id"><i
                        class="fa-solid fa-heart me-2 text-danger"></i>Ajouter à ma liste</a>

                  </div>

                </div>

                <div class="sharing">

                  <p class="text-right">Partager sur :

                    <a :href="'https://www.facebook.com/sharer/sharer.php?u=https://my-bakery.fr' + $route.fullPath"><i
                        class="fa fa-facebook"></i></a>

                    <a :href="'https://twitter.com/share?url=https://my-bakery.fr' + $route.fullPath + '&text=' + bakery.title + '&via=my-bakery'"
                      onclick="window.open(this.href);return false;"><i class="fa-brands fa-x-twitter"></i></a>

                    <a
                      :href="'https://www.linkedin.com/shareArticle?mini=true&url=https://my-bakery.fr' + $route.fullPath + '&text=' + bakery.title"><i
                        class="fa fa-linkedin"></i></a>

                  </p>

                </div>

              </div>

            </div>

          </div>

          <div class="section section-rating fadeIn7">

            <div class="row">

              <div v-if="bakery.total_rating_google >= 1" class="bloc-rating">

                <img src="avis-google.svg" alt="Logo Google">

                <p>{{ bakery.total_rating_google }}/5 d'avis positifs<br />
                  sur {{ bakery.user_rating_google }} avis.</p>

              </div>

              <div v-else>

                <img src="avis-google.svg" alt="Logo Google">

                <p>Aucun avis pour le moment.</p>

              </div>

            </div>

          </div>

          <MapComponent :lat="bakery.lat" :lng="bakery.lng" :map="this.map" />

          <div class="bakery-content">

            <ul class="tab-list" role="tablist">

              <li class="active" id="btn_description">

                <a aria-controls="tab_description" role="tab" data-toggle="tab" aria-expanded="true">Description</a>

              </li>

              <li class="" id="btn_reviews">

                <a aria-controls="tab_reviews" role="tab" data-toggle="tab" aria-expanded="false">Avis
                  ({{ bakeryComments.length }})</a>

              </li>

              <li class="" id="btn_hours">

                <a aria-controls="tab_hours" role="tab" data-toggle="tab" aria-expanded="false">Horaire d'ouverture</a>

              </li>

              <li v-if="isLoggedIn && user_subscription === true" class="me-0" id="btn_settings">

                <a aria-controls="tab_settings" role="tab" data-toggle="tab" aria-expanded="false">Revendiquer cet
                  établissement</a>

              </li>

              <li v-else class="me-0">

                <a class="disabled">Revendiquer
                  cet
                  établissement</a>

              </li>

            </ul>

          </div>

          <div class="tab-content">

            <div class="tab-pane active" role="tabpanel" id="tab_description" v-html="bakery.content">
            </div>

            <div class="tab-pane" role="tabpanel" id="tab_reviews">

              <div id="reviews">

                <div v-if="bakeryComments.length !== 0" id="comments">

                  <p class="mb-20">{{ bakeryComments.length }} avis pour <strong>{{ bakery.title }}</strong></p>

                  <div class="commentlist">

                    <div class="bypostauthor bs-review">

                      <div v-for="bakeryComment in bakeryComments" v-bind:id="bakeryComment.id"
                        :id="'comment' + bakeryComment.id" class="comment-container">

                        <div class="bs-review-thumbnail">
                          <img :alt="bakeryComment.author" src="users/028cac9c481f4f5c4269f34ace3667a0.png" height="80"
                            width="80" loading="lazy">
                        </div>

                        <div class="bs-review-content">

                          <header>

                            <p class="meta mb-0">
                              Par <a>{{ bakeryComment.author }}</a> -
                              {{ moment(bakeryComment.created_at).format("DD MMMM YYYY à H: mm") }}
                            </p>

                          </header>

                          <div class="description">

                            <p class="mb-0">{{ bakeryComment.content }}</p>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div id="review-form-rapper">

                  <div class="bs-bakery-review">

                    <div class="row">

                      <div class="bs-form-bakery-review">

                        <div class="col-xs-12">

                          <h3 class="text-center mb-4 mt-2">AJOUTEZ VOTRE AVIS</h3>

                          <form id="form-comment">

                            <input type="hidden" :value="bakery.url" id="url" name="url">

                            <p class="comment-notes"><span id="email-notes">Votre adresse e-mail ne sera pas
                                publié.</span> <span class="required-field-message" aria-hidden="true">Champs
                                obligatoires
                                sont marqués<span class="required" aria-hidden="true">*</span></span></p>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                              <div class="form-group">

                                <label for="rating"><strong>Devanture du magasin <sup>*</sup></strong></label>

                                <div class="devanture">

                                  <div class="br-widget">

                                    <input type="hidden" id="devanture" name="devanture">

                                    <a role="button" v-for="note in 5" :key="note" data-name="devanture"
                                      :data-rating-value="note" :data-rating-text="note"></a>

                                    <div class="br-current-rating">0</div>

                                    <span span class="error-text devanture_error"></span>

                                  </div>

                                </div>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                              <div class="form-group">

                                <label for="rating"><strong>Propreté du magasin <sup>*</sup></strong></label>

                                <div class="proprete">

                                  <div class="br-widget">

                                    <input type="hidden" id="proprete" name="proprete">

                                    <a role="button" v-for="note in 5" :key="note" data-name="proprete"
                                      :data-rating-value="note" :data-rating-text="note"></a>

                                    <div class="br-current-rating">0</div>

                                    <span span class="error-text proprete_error"></span>

                                  </div>

                                </div>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                              <div class="form-group">

                                <label for="rating"><strong>Prix des produits <sup>*</sup></strong></label>

                                <div class="prix">

                                  <div class="br-widget">

                                    <input type="hidden" id="prix" name="prix">

                                    <a role="button" v-for="note in 5" :key="note" data-name="prix"
                                      :data-rating-value="note" :data-rating-text="note"></a>

                                    <div class="br-current-rating">0</div>

                                    <span span class="error-text prix_error"></span>

                                  </div>

                                </div>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                              <div class="form-group">

                                <label for="rating"><strong>Choix des produits <sup>*</sup></strong></label>

                                <div class="choix">

                                  <div class="br-widget">

                                    <input type="hidden" id="choix" name="choix">

                                    <a role="button" v-for="note in 5" :key="note" data-name="choix"
                                      :data-rating-value="note" :data-rating-text="note"></a>

                                    <div class="br-current-rating">0</div>

                                    <span span class="error-text choix_error"></span>

                                  </div>

                                </div>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                              <div class="form-group">

                                <label for="comment"><strong>Votre avis <sup>*</sup></strong></label>

                                <textarea v-model="comment" id="comment" class="form-control" name="comment" cols="45"
                                  rows="8"></textarea>

                                <span class="error-text comment_error"></span>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                              <div class="form-group">

                                <label for="author"><strong>Votre nom <sup>*</sup></strong></label>

                                <input v-model="author" id="author" name="author" type="text" size="30"
                                  class="form-control" aria-required="true">

                                <span class="error-text author_error"></span>

                              </div>

                              <div class="form-group">

                                <label for="emailComment"><strong>Adresse email <sup>*</sup></strong></label>

                                <input v-model="emailComment" id="emailComment" name="emailComment" type="email"
                                  class="form-control" size="30" aria-required="true">

                                <span class="error-text email_error"></span>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                              <div class="form-group">

                                <button type="submit" v-bind:class="submit !== false ? '' : 'disabled'"
                                  @click="submitComment" class="submit btn btn-bakery">Valider<i
                                    class="ps-icon-next"></i>
                                </button>

                              </div>

                            </div>

                          </form>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div class="tab-pane" role="tabpanel" id="tab_hours">

              <div id="reviews">

                <div id="review-form-rapper">

                  <div class="bs-bakery-review">

                    <div class="row">

                      <div class="bs-form-bakery-review">

                        <div class="col-xs-12">

                          <ul class="bakeryHour" v-if="bakeryHours.length >= 1">

                            <li v-for="bakeryHour in bakeryHours" v-bind:id="bakeryHour.id">
                              <div>{{ bakeryHour.date }}</div>
                              <div v-if="bakeryHour.active !== 0">{{ bakeryHour.am }}</div>
                              <div v-else>Fermé</div>
                            </li>

                          </ul>

                          <div v-else>Aucun horaire prévu pour cette boulangerie.</div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div v-if="isLoggedIn && user_subscription === true" class="tab-pane" role="tabpanel" id="tab_settings">
              <div id="review-form-rapper">

                <div class="bs-bakery-review">

                  <div class="row">

                    <div class="bs-form-bakery-review">

                      <div class="col-xs-12">

                        <h3 class="text-center mb-4 mt-2">GÉRER LA FICHE D'ÉTABLISSEMENT</h3>

                        <p class="comment-notes"><span id="email-notes">Vous revendiquez cette boulangerie, grâce à
                            votre compte My Bakery, vous pouvez la modifier librement !</span></p>

                        <div class="bakery-detail">

                          <div class="bakery">

                            <div class="row">

                              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                <div class="thumbnail">

                                  <div class="updateImg">

                                    <label for="image">
                                      <img id="showImg" :src="imageSrc" style="display: block;">
                                      <input type="file" accept="image/*" name="image" id="image" @change="setImage">
                                    </label>

                                  </div>

                                  <div class="removeImage text-center mt-4"><a @click="removeImage"
                                      class="btn btn-danger">Supprimer
                                      l'image</a></div>

                                  <div class="error-text image-error"></div>

                                  <textarea v-model="addDesc" class="form-control" rows="20" id="addDesc"
                                    style="max-height: 220px !important;" name="addDesc"
                                    placeholder="Description de la boulangerie*"></textarea>
                                  <p class="error-text addDesc_error"></p>


                                </div>

                              </div>

                              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                <div class="info">
                                  <div>
                                    <p>
                                      <input v-model="addName" type="text" class="form-control" id="addName"
                                        name="addName" placeholder="Nom de la boulangerie*">
                                    </p>
                                    <p class="error-text addName_error"></p>
                                  </div>

                                  <div>
                                    <p>
                                      <input v-model="addWebsite" type="text" class="form-control" id="addWebsite"
                                        name="addWebsite" placeholder="Site internet de la boulangerie">
                                    </p>
                                    <p class="error-text addWebsite_error"></p>
                                  </div>

                                  <div>
                                    <p>
                                      <input v-model="addAdresse" type="text" class="form-control" id="addAdresse"
                                        name="addAdresse" placeholder="Adresse de la boulangerie*">
                                    </p>
                                    <p class="error-text addAdresse_error"></p>
                                  </div>

                                  <div>
                                    <p>
                                      <input v-model="addPhone" type="text" class="form-control" id="addPhone"
                                        name="addPhone" placeholder="Téléphone de la boulangerie*">
                                    </p>
                                    <p class="error-text addPhone_error"></p>
                                  </div>

                                  <div>
                                    <p class="d-flex special-select">
                                      <label for="">Accès handicapé* :</label>
                                      <select v-model="addHandicap" class="form-select mt-2 select-bakery"
                                        name="addHandicap" id="addHandicap">
                                        <option value="" selected disabled></option>
                                        <option value="1">Oui</option>
                                        <option value="0">Non</option>
                                      </select>
                                    </p>
                                    <p class="error-text addHandicap_error"></p>
                                  </div>

                                  <div>
                                    <p class="d-flex special-select">
                                      <label for="">Livraison* :</label>
                                      <select v-model="addLivraison" class="form-select mt-2 select-bakery"
                                        name="addLivraison" id="addLivraison">
                                        <option value="" selected disabled></option>
                                        <option value="1">Oui</option>
                                        <option value="0">Non</option>
                                      </select>
                                    </p>
                                    <p class="error-text addLivraison_error"></p>
                                  </div>

                                  <div>
                                    <p class="d-flex special-select">
                                      <label for="">Restauration sur place* :</label>
                                      <select v-model="addRestauration" class="form-select mt-2 select-bakery"
                                        name="addRestauration" id="addRestauration">
                                        <option value="" selected disabled></option>
                                        <option value="1">Oui</option>
                                        <option value="0">Non</option>
                                      </select>
                                    </p>
                                    <p class="error-text addRestauration_error"></p>
                                  </div>

                                  <div class="short-desc">

                                    <textarea v-model="addSmallContent" class="form-control" maxlength="200" rows="6"
                                      id="addSmallContent" name="addSmallContent" placeholder="Petite description*"
                                      @keyup="verifLengthArea"></textarea>
                                    <p class="error-text addSmallContent_error"></p>
                                    <p class="limite-text text-end mt-1"><b><span>0</span> / 200</b></p>

                                  </div>

                                  <input id="addId" name="addId" v-model="addId" type="hidden">

                                </div>

                              </div>

                              <h3 class="text-center mb-4 mt-2">HORRAIRE D'OUVERTURE</h3>

                              <p class="text-center text-danger"><i class="fa-solid fa-exclamation me-2"></i><b>Si la
                                  boulangerie est fermé écrire Fermé*</b></p>

                              <div id="tab_hours">

                                <div class="col-xs-12">

                                  <ul class="bakeryHour bakeryHourS">

                                    <li>
                                      <label for="">Lundi</label>
                                      <input v-model="addHours1" class="form-control border-hours" type="text"
                                        id="addHours1" name="addHours1" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                                      <p class="error-text addHours1_error"></p>
                                    </li>

                                    <li>
                                      <label for="">Mardi</label>
                                      <input v-model="addHours2" class="form-control border-hours" type="text"
                                        id="addHours2" name="addHours2" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                                      <p class="error-text addHours2_error"></p>
                                    </li>

                                    <li>
                                      <label for="">Mercredi</label>
                                      <input v-model="addHours3" class="form-control border-hours" type="text"
                                        id="addHours3" name="addHours3" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                                      <p class="error-text addHours3_error"></p>
                                    </li>

                                    <li>
                                      <label for="">Jeudi</label>
                                      <input v-model="addHours4" class="form-control border-hours" type="text"
                                        id="addHours4" name="addHours4" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                                      <p class="error-text addHours4_error"></p>
                                    </li>

                                    <li>
                                      <label for="">Vendredi</label>
                                      <input v-model="addHours5" class="form-control border-hours" type="text"
                                        id="addHours5" name="addHours5" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                                      <p class="error-text addHours5_error"></p>
                                    </li>

                                    <li>
                                      <label for="">Samedi</label>
                                      <input v-model="addHours6" class="form-control border-hours" type="text"
                                        id="addHours6" name="addHours6" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                                      <p class="error-text addHours6_error"></p>
                                    </li>

                                    <li>
                                      <label for="">Dimanche</label>
                                      <input v-model="addHours7" class="form-control border-hours" type="text"
                                        id="addHours7" name="addHours7" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                                      <p class="error-text addHours7_error"></p>
                                    </li>

                                  </ul>

                                </div>

                              </div>

                              <h3 class="text-center mb-4 mt-4">PHOTOS SUPPLÉMENTAIRES</h3>

                              <div class="grid-images-others">

                                <div class="thumbnail">

                                  <div class="updateImg">
                                    <label for="image2">
                                      <img id="showImg2" :src="imageSrc2"><input @change="setImage2" type="file"
                                        accept="image/*" name="image2" id="image2"></label>
                                  </div>

                                  <div class="removeImage2 text-center mt-4" @click="removeImage2"><a
                                      class="btn btn-danger">Supprimer
                                      l'image</a></div>
                                  <div class="error-text image2-error"></div>

                                </div>

                                <div class="thumbnail">

                                  <div class="updateImg">
                                    <label for="image3">
                                      <img id="showImg3" :src="imageSrc3"><input @change="setImage3" type="file"
                                        accept="image/*" name="image3" id="image3"></label>
                                  </div>

                                  <div class="removeImage3 text-center mt-4" @click="removeImage3"><a
                                      class="btn btn-danger">Supprimer
                                      l'image</a></div>
                                  <div class="error-text image3-error"></div>

                                </div>

                                <div class="thumbnail">

                                  <div class="updateImg">
                                    <label for="image4">
                                      <img id="showImg4" :src="imageSrc4"><input @change="setImage4" type="file"
                                        accept="image/*" name="image4" id="image4"></label>
                                  </div>

                                  <div class="removeImage4 text-center mt-4" @click="removeImage4"><a
                                      class="btn btn-danger">Supprimer
                                      l'image</a></div>
                                  <div class="error-text image4-error"></div>

                                </div>

                              </div>

                              <div class="mt-5 text-center">
                                <button type="submit" id="submit_bakery" @click="submitBakery"
                                  class="btn btn-bakery">Modifier la boulangerie</button>
                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

        <BannerComponent :margin="true" :top="true" />

      </div>

      <div class="loadingDiv" v-show="visible">
        <q-spinner-grid size="70px" color="info" />
      </div>

    </div>

  </div>
</template>

<style lang="css">
.bb .content {
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  max-width: 1170px;
  text-align: center;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}

@media all and (max-width: 768px) {
  .bb .content {
    padding: 2rem 2rem;
  }
}

@media (max-width: 768px) {
  .page-bakery-one .ads_campaign {
    margin-bottom: 0 !important;
  }

  .page-bakery-one .ads_campaign.top {
    padding-top: 0 !important;
  }
}

.disabled {
  pointer-events: none;
}

.page-bakery-one.section,
.page-bakery-one .section {
  margin-bottom: 0;
}

.h-bakery {
  min-height: 200px;
}

@media all and (max-width: 768px) {
  .h-bakery {
    min-height: auto;
  }
}

.page-bakery-one .last-bakery .column-inner .wrapper {
  background: none;
}

.page-bakery-one .last-bakery .column-inner .wrapper .bloc {
  padding: 0 0;
}
</style>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useQuasar } from 'quasar'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useStore } from 'vuex'
import moment from 'moment'
import { ref } from 'vue'
import { Cookies } from 'quasar'
import { useRoute } from 'vue-router';
import axios from 'axios'
import BannerComponent from 'components/Banner.vue'
import MapComponent from 'components/Map.vue'

moment.locale('fr')

import slick_css from "../css/slick.scss";

slick_css

const addSmallContent = ref(''),
  user_subscription = ref(false)

export default defineComponent({
  name: 'BakeryComponent',
  components: {
    BannerComponent,
    MapComponent
  },
  setup () {
    const route = useRoute();
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)
    const paginationData = ref(true)
    const $q = useQuasar()
    const FormData = require('form-data');

    const bakery = computed(() => {
      return store.state.bakery
    })

    const bakeryComments = computed(() => {
      return store.state.bakeryComments
    })

    const bakeryHours = computed(() => {
      return store.state.bakeryHours
    })

    const user = computed(() => {
      return store.state.stateUser.user
    })

    onMounted(() => {
      store.dispatch('fetchBakery',
        {
          'url': route.params.url
        })
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

    return {
      user,
      isLoggedIn: store.getters.isLoggedIn,
      showTextLoading (express = null) {
        visible.value = true
        $('.u-column2').fadeOut(300)
        showSimulatedReturnData.value = false

        if (express === null) {
          setTimeout(() => {
            visible.value = false
            showSimulatedReturnData.value = true
          }, 1500)
        }
      },
      bakery,
      bakeryComments,
      bakeryHours,
      Cookies: Cookies,
      visible,
      paginationData,
      moment: moment,
      showSimulatedReturnData,
      showNotifComment () {
        $q.notify({
          type: 'success-form',
          message: 'Votre avis a bien été ajouté.'
        })
      },
      errorNotifComment (message = null) {
        $q.notify({
          type: 'error-form',
          message: message ? message : 'Une erreur est survenue dans le formulaire.'
        })
      },
      showNotif () {
        $q.notify({
          type: 'success-form',
          message: 'La boulangerie a bien été modifier.'
        })
      },
      errorNotif (message = null) {
        $q.notify({
          type: 'error-form',
          message: message ? message : 'Une erreur est survenue dans le formulaire.'
        })
      }
    }
  },
  data () {

    const store = useStore()

    const user = computed(() => {
      return store.state.stateUser.user
    })

    $(document).on('change', '#form-comment', function (e) {

      var emailComment = $('#emailComment').val(),
        author = $('#author').val(),
        comment = $('#comment').val()

      if (emailComment.length >= 2 && comment.length >= 2 && author.length >= 2) {
        $('#form-comment button').removeClass('disabled')
      } else {
        $('#form-comment button').addClass('disabled')
      }

    })

    return {
      user,
      user_subscription,
      folderPicture: process.env.WEBSITE + '/bakerys/images/',
      map: null,
      v$: useValidate(),
      submit: false,
      url: null,
      comment: null,
      author: null,
      emailComment: null,
      v$: useValidate(),
      addDesc: null,
      addHours1: null,
      addHours2: null,
      addHours3: null,
      addHours4: null,
      addHours5: null,
      addHours6: null,
      addHours7: null,
      addName: null,
      addWebsite: null,
      addAdresse: null,
      addPhone: null,
      addHandicap: null,
      addLivraison: null,
      addRestauration: null,
      addSmallContent,
      addId: null,
      image: null,
      image2: null,
      imageSrc: null,
      imageSrc2: null,
      imageSrc3: null,
      imageSrc4: null
    }
  },
  methods: {
    verifLengthArea (e) {
      setTimeout(() => {
        if (addSmallContent.value.length <= 200) $('.limite-text span').html(addSmallContent.value.length)
      }, 1500);
    },
    saveBakeryList (id) {

      const bakerysList = Cookies.has('bakerysList'),
        cookies = Cookies.get('bakerysList')

      $('.bakery-list-' + id).html('<i class="fa-solid fa-heart-circle-xmark text-danger me-2"></i> Supprimer')

      if ($(document).find('.bakery-list-' + id).length !== 0) {

        if (!bakerysList) {
          Cookies.set('bakerysList', id, { expires: 30000 })
        } else {
          Cookies.set('bakerysList', Cookies.get('bakerysList') + '-' + id)
        }

        $('.bakery-list-' + id).removeClass('bakery-list-' + id).addClass('delete-bakery-list-' + id)

      } else {

        var total = cookies.replace('-' + id, '')

        if (cookies.indexOf(id + '-') != -1) {

          var total = cookies.replace(id + '-', '');
          Cookies.set('bakerysList', total, {
            secure: true,
            sameSite: 'None'
          });

        } else if (cookies.indexOf('-' + id) != -1) {

          var total = cookies.replace('-' + id, '');
          Cookies.set('bakerysList', total, {
            secure: true,
            sameSite: 'None'
          });

        }

        $('.delete-bakery-list-' + id).addClass('bakery-list-' + id)

        $('.delete-bakery-list-' + id).removeClass('delete-bakery-list-' + id)

        $('.bakery-list-' + id).html('<i class="fa-solid fa-heart text-danger me-2"></i> Ajouter à ma liste')

        Cookies.set('bakerysList', total)

        if (cookies.split('-').length === 1) {
          Cookies.remove('bakerysList');
        }

      }

    },
    submitComment (e) {
      e.preventDefault();

      this.v$.$validate() // checks all inputs

      let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      let valid = reg.test(this.emailComment)

      if (valid) {

        $('.' + 'email' + '_error').removeAttr()
        $('.' + 'email' + '_error').text("");

        if (!this.v$.$error && $('#devanture').val().length >= 1 && $('#prix').val().length >= 1 && $('#choix').val().length >= 1 && $('#proprete').val().length >= 1) {

          axios.post(process.env.WEBSITE + '/bakery-comment', {
            'url': $('#url').val(),
            'devanture': $('#devanture').val(),
            'proprete': $('#proprete').val(),
            'prix': $('#prix').val(),
            'choix': $('#choix').val(),
            'email': this.emailComment,
            'author': this.author,
            'comment': this.comment,
          })
            .then((res) => {

              if (res.data.success === true) {

                this.showNotifComment()

                $([document.documentElement, document.body]).animate({
                  scrollTop: $('.commentlist').offset().top
                }, 300)

                setTimeout(() => {
                  $('#tab_reviews .commentlist .bypostauthor').prepend('<div class="comment-container"><div class="bs-review-thumbnail"><img :alt="' + this.author + '" src="users/028cac9c481f4f5c4269f34ace3667a0.png" height="80"width="80" loading="lazy"></div><div class="bs-review-content"><header><p class="meta mb-0">Par <a>' + this.author + '</a> - ' + moment().format('DD MMMM YYYY à H: mm') + '</p></header><div class="description"><p class="mb-0">' + this.comment + '</p></div></div></div>').hide().fadeIn(600)
                }, 600);

                setTimeout(() => {
                  $(document).find('.error-text').text('')
                  $(document).find('.error-text').removeAttr()
                  $('#form-comment').find('input').val('')
                  this.submit = false
                  $('#form-comment button').addClass('disabled')
                  $(document).find('#form-comment a.br-active').removeClass('br-active')
                  this.devanture = null
                  this.proprete = null
                  this.prix = null
                  this.choix = null
                  this.emailComment = null
                  this.author = null
                  this.comment = null

                }, 3500);

              } else {
                this.errorNotifComment(res.data.message)
              }

            })
            .catch((error) => {
              this.errorNotifComment()
            })

        } else {

          this.submit = false

          if (this.emailComment && this.author && this.comment && $('#devanture').val().length >= 1 && $('#prix').val().length >= 1 && $('#choix').val().length >= 1 && $('#proprete').val().length >= 1) {

            this.submit = true

            return true
          }

          if (!this.comment) {
            $('.' + 'comment' + '_error').attr('style', 'display: block')
            $('.' + 'comment' + '_error').text("Le champs commentaire est obligatoire !");
          } else {
            $('.' + 'comment' + '_error').removeAttr()
            $('.' + 'comment' + '_error').text("");
          }

          if (!this.author) {
            $('.' + 'author' + '_error').attr('style', 'display: block')
            $('.' + 'author' + '_error').text("Le champs nom est obligatoire !");
          } else {
            $('.' + 'author' + '_error').removeAttr()
            $('.' + 'author' + '_error').text("");
          }

          if (!this.emailComment) {
            $('.' + 'email' + '_error').attr('style', 'display: block')
            $('.' + 'email' + '_error').text("Le champs adresse email est obligatoire !");
          } else {
            $('.' + 'email' + '_error').removeAttr()
            $('.' + 'email' + '_error').text("");
          }

          if ($('#devanture').val().length <= 0) {
            $('.' + 'devanture' + '_error').attr('style', 'display: block')
            $('.' + 'devanture' + '_error').text("Votre note pour la devanture est obligatoire !");
          } else {
            $('.' + 'devanture' + '_error').removeAttr()
            $('.' + 'devanture' + '_error').text("");
          }

          if ($('#choix').val().length <= 0) {
            $('.' + 'choix' + '_error').attr('style', 'display: block')
            $('.' + 'choix' + '_error').text("Votre note pour le choix des produits est obligatoire !");
          } else {
            $('.' + 'choix' + '_error').removeAttr()
            $('.' + 'choix' + '_error').text("");
          }

          if ($('#proprete').val().length <= 0) {
            $('.' + 'proprete' + '_error').attr('style', 'display: block')
            $('.' + 'proprete' + '_error').text("Votre note pour la propreté du magasin des produits est obligatoire !");
          } else {
            $('.' + 'proprete' + '_error').removeAttr()
            $('.' + 'proprete' + '_error').text("");
          }

          if ($('#prix').val().length <= 0) {
            $('.' + 'prix' + '_error').attr('style', 'display: block')
            $('.' + 'prix' + '_error').text("Votre note pour le prix est obligatoire !");
          } else {
            $('.' + 'prix' + '_error').removeAttr()
            $('.' + 'prix' + '_error').text("");
          }

        }

      } else {

        $('.' + 'email' + '_error').attr('style', 'display: block')
        $('.' + 'email' + '_error').text("Le champs adresse email n'est pas valide !");

      }
    },
    submitBakery (e) {

      e.preventDefault();

      if (this.addAdresse
        && this.addName
        && this.addPhone
        && addSmallContent.value
        && this.addHours1
        && this.addHours2
        && this.addHours3
        && this.addHours4
        && this.addHours5
        && this.addHours6
        && this.addHours7
        && this.addDesc
      ) {

        const config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };

        const form_data = new FormData();

        fetch('https://api.ipify.org?format=json')
          .then(x => x.json())
          .then(({ ip }) => {

            form_data.append("ip", this.ip);
            form_data.append("addDesc", this.addDesc);
            form_data.append('file', this.image);
            form_data.append('file', this.image2);
            form_data.append('file', this.image3);
            form_data.append('file', this.image4);
            form_data.append("addName", this.addName);
            form_data.append("addAdresse", this.addAdresse);
            form_data.append("addPhone", this.addPhone);
            form_data.append("addWebsite", this.addWebsite);
            form_data.append("addHandicap", this.addHandicap);
            form_data.append("addLivraison", this.addLivraison);
            form_data.append("addRestauration", this.addRestauration);
            form_data.append("addSmallContent", addSmallContent.value);
            form_data.append("addId", this.addId);
            form_data.append("addHours1", this.addHours1);
            form_data.append("addHours2", this.addHours2);
            form_data.append("addHours3", this.addHours3);
            form_data.append("addHours4", this.addHours4);
            form_data.append("addHours5", this.addHours5);
            form_data.append("addHours6", this.addHours6);
            form_data.append("addHours7", this.addHours7);
            form_data.append("userId", this.user.id);

            axios({
              method: "POST",
              url: process.env.WEBSITE + '/update-bakery',
              data: form_data,
              headers: {
                "Content-Type": "multipart/form-data"
              }
            })
              .then((res) => {

                if (res.data.success === true) {

                  this.showNotif()

                  setTimeout(() => {
                    $(document).find('.error-text').text('')
                    $(document).find('.error-text').removeAttr()
                    location.reload()
                  }, 3500);

                } else {
                  this.errorNotif()
                }

              })
              .catch((error) => {
                this.errorNotif()
              })

          })

      }

      if (!this.addHours1) {
        $('.' + 'addHours' + '1' + '_error').attr('style', 'display: block')
        $('.' + 'addHours' + '1' + '_error').text("Le champs horaire d'ouverture est obligatoire !");
      } else {
        $('.' + 'addHours' + '1' + '_error').removeAttr()
        $('.' + 'addHours' + '1' + '_error').text("");
      }

      if (!this.addHours2) {
        $('.' + 'addHours' + '2' + '_error').attr('style', 'display: block')
        $('.' + 'addHours' + '2' + '_error').text("Le champs horaire d'ouverture est obligatoire !");
      } else {
        $('.' + 'addHours' + '2' + '_error').removeAttr()
        $('.' + 'addHours' + '2' + '_error').text("");
      }

      if (!this.addHours3) {
        $('.' + 'addHours' + '3' + '_error').attr('style', 'display: block')
        $('.' + 'addHours' + '3' + '_error').text("Le champs horaire d'ouverture est obligatoire !");
      } else {
        $('.' + 'addHours' + '3' + '_error').removeAttr()
        $('.' + 'addHours' + '3' + '_error').text("");
      }

      if (!this.addHours4) {
        $('.' + 'addHours' + '4' + '_error').attr('style', 'display: block')
        $('.' + 'addHours' + '4' + '_error').text("Le champs horaire d'ouverture est obligatoire !");
      } else {
        $('.' + 'addHours' + '4' + '_error').removeAttr()
        $('.' + 'addHours' + '4' + '_error').text("");
      }

      if (!this.addHours5) {
        $('.' + 'addHours' + '5' + '_error').attr('style', 'display: block')
        $('.' + 'addHours' + '5' + '_error').text("Le champs horaire d'ouverture est obligatoire !");
      } else {
        $('.' + 'addHours' + '5' + '_error').removeAttr()
        $('.' + 'addHours' + '5' + '_error').text("");
      }

      if (!this.addHours6) {
        $('.' + 'addHours' + '6' + '_error').attr('style', 'display: block')
        $('.' + 'addHours' + '6' + '_error').text("Le champs horaire d'ouverture est obligatoire !");
      } else {
        $('.' + 'addHours' + '6' + '_error').removeAttr()
        $('.' + 'addHours' + '6' + '_error').text("");
      }

      if (!this.addHours7) {
        $('.' + 'addHours' + '7' + '_error').attr('style', 'display: block')
        $('.' + 'addHours' + '7' + '_error').text("Le champs horaire d'ouverture est obligatoire !");
      } else {
        $('.' + 'addHours' + '7' + '_error').removeAttr()
        $('.' + 'addHours' + '7' + '_error').text("");
      }

      if (!this.addName) {
        $('.' + 'addName' + '_error').attr('style', 'display: block')
        $('.' + 'addName' + '_error').text("Le champs nom est obligatoire !");
      } else {
        $('.' + 'addName' + '_error').removeAttr()
        $('.' + 'addName' + '_error').text("");
      }

      if (!this.addAdresse) {
        $('.' + 'addAdresse' + '_error').attr('style', 'display: block')
        $('.' + 'addAdresse' + '_error').text("Le champs adresse est obligatoire !");
      } else {
        $('.' + 'addAdresse' + '_error').removeAttr()
        $('.' + 'addAdresse' + '_error').text("");
      }

      if (!this.addPhone) {
        $('.' + 'addPhone' + '_error').attr('style', 'display: block')
        $('.' + 'addPhone' + '_error').text("Le champs téléphone est obligatoire !");
      } else {
        $('.' + 'addPhone' + '_error').removeAttr()
        $('.' + 'addPhone' + '_error').text("");
      }

      if (!addSmallContent.value) {
        $('.' + 'addSmallContent' + '_error').attr('style', 'display: block')
        $('.' + 'addSmallContent' + '_error').text("Le champs description est obligatoire !");
      } else {
        $('.' + 'addSmallContent' + '_error').removeAttr()
        $('.' + 'addSmallContent' + '_error').text("");
      }

      if (!this.addDesc) {
        $('.' + 'addDesc' + '_error').attr('style', 'display: block')
        $('.' + 'addDesc' + '_error').text("Le champs description est obligatoire !");
      } else {
        $('.' + 'addDesc' + '_error').removeAttr()
        $('.' + 'addDesc' + '_error').text("");
      }

    },
    removeImage () {
      $('.removeImage').hide()
      this.imageSrc = 'bakerys/add-bakery.jpg'
      this.image = null
      $('.image-error').hide()
      $('.image-error').html('')
    },
    removeImage2 () {
      $('.removeImage2').hide()
      this.imageSrc2 = 'bakerys/add-bakery.jpg'
      this.image2 = null
      $('.image-error2').hide()
      $('.image-error2').html('')
    },
    removeImage3 () {
      $('.removeImage3').hide()
      this.imageSrc3 = 'bakerys/add-bakery.jpg'
      this.image3 = null
      $('.image-error3').hide()
      $('.image-error3').html('')
    },
    removeImage4 () {
      $('.removeImage4').hide()
      this.imageSrc4 = 'bakerys/add-bakery.jpg'
      this.image4 = null
      $('.image-error4').hide()
      $('.image-error4').html('')
    },
    setImage (e) {
      const file = e.target.files[0],
        ext = file.name.split('.').pop(),
        extValid = ['png', 'jpeg', 'jpg']

      if (e.target.files[0].size <= 1684688109387) {

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = evt => {

          let img = new Image();

          img.onload = () => {

            // dimension de l'image
            if (img.width <= 1920 && img.height <= 1080) {

              if (extValid.indexOf(ext, 0) === 0) {

                this.image = file
                this.imageSrc = URL.createObjectURL(file);
                $('.removeImage').show()

              } else {

                $('.removeImage').hide()
                this.imageSrc = 'bakerys/add-bakery.jpg'
                this.image = null
                $('.image-error').show()
                $('.image-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être de type image.')

              }

            } else {

              $('.removeImage').hide()
              this.imageSrc = 'bakerys/add-bakery.jpg'
              this.image = null
              $('.image-error').show()
              $('.image-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher ne doit pas dépasser 1920 pixels par 1080 pixels.')

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
        this.image = null
        $('.image-error').show()
        $('.image-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher est trop lourd ! Il ne doit pas dépasser 8 mo.')
      }
    },
    setImage2 (e) {
      const file = e.target.files[0],
        ext = file.name.split('.').pop(),
        extValid = ['png', 'jpeg', 'jpg']

      if (e.target.files[0].size <= 1684688109387) {

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = evt => {

          let img = new Image();

          img.onload = () => {

            if (img.width <= 1920 && img.height <= 1080) {

              if (extValid.indexOf(ext, 0) === 0) {

                this.image2 = file
                this.imageSrc2 = URL.createObjectURL(file);
                $('.removeImage2').show()

              } else {

                $('.removeImage2').hide()
                this.imageSrc2 = 'bakerys/add-bakery.jpg'
                this.image2 = null
                $('.image2-error').show()
                $('.image2-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être de type image.')

              }

            } else {
              $('.removeImage2').hide()
              this.imageSrc2 = 'bakerys/add-bakery.jpg'
              this.image2 = null
              $('.image2-error').show()
              $('.image2-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher ne doit pas dépasser 1920 pixels par 1080 pixels.')
            }

          }

          img.src = evt.target.result;

          $('.image2-error').hide()
          $('.image2-error').html('')

        }

        reader.onerror = evt => {
          console.error(evt);
        }

      } else {
        $('.removeImage2').hide()
        this.image = null
        $('.image2-error').show()
        $('.image2-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher est trop lourd ! Il ne doit pas dépasser 8 mo.')
      }
    },
    setImage3 (e) {
      const file = e.target.files[0],
        ext = file.name.split('.').pop(),
        extValid = ['png', 'jpeg', 'jpg']

      if (e.target.files[0].size <= 1684688109387) {

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = evt => {

          let img = new Image();

          img.onload = () => {

            if (img.width <= 1920 && img.height <= 1080) {

              if (extValid.indexOf(ext, 0) === 0) {

                this.image3 = file
                this.imageSrc3 = URL.createObjectURL(file);
                $('.removeImage3').show()

              } else {

                $('.removeImage3').hide()
                this.imageSrc3 = 'bakerys/add-bakery.jpg'
                this.image3 = null
                $('.image3-error').show()
                $('.image3-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être de type image.')

              }

            } else {
              $('.removeImage3').hide()
              this.imageSrc3 = 'bakerys/add-bakery.jpg'
              this.image3 = null
              $('.image3-error').show()
              $('.image3-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher ne doit pas dépasser 1920 pixels par 1080 pixels.')
            }

          }

          img.src = evt.target.result;

          $('.image3-error').hide()
          $('.image3-error').html('')

        }

        reader.onerror = evt => {
          console.error(evt);
        }

      } else {
        $('.removeImage3').hide()
        this.image = null
        $('.image3-error').show()
        $('.image3-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher est trop lourd ! Il ne doit pas dépasser 8 mo.')
      }
    },
    setImage4 (e) {
      const file = e.target.files[0],
        ext = file.name.split('.').pop(),
        extValid = ['png', 'jpeg', 'jpg']

      if (e.target.files[0].size <= 1684688109387) {

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = evt => {

          let img = new Image();

          img.onload = () => {

            if (img.width <= 1920 && img.height <= 1080) {

              if (extValid.indexOf(ext, 0) === 0) {

                this.image4 = file
                this.imageSrc4 = URL.createObjectURL(file);
                $('.removeImage4').show()

              } else {

                $('.removeImage4').hide()
                this.imageSrc4 = 'bakerys/add-bakery.jpg'
                this.image4 = null
                $('.image4-error').show()
                $('.image4-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être de type image.')

              }

            } else {
              $('.removeImage4').hide()
              this.imageSrc4 = 'bakerys/add-bakery.jpg'
              this.image4 = null
              $('.image4-error').show()
              $('.image4-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher ne doit pas dépasser 1920 pixels par 1080 pixels.')
            }

          }

          img.src = evt.target.result;

          $('.image4-error').hide()
          $('.image4-error').html('')

        }

        reader.onerror = evt => {
          console.error(evt);
        }

      } else {
        $('.removeImage4').hide()
        this.image = null
        $('.image4-error').show()
        $('.image4-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher est trop lourd ! Il ne doit pas dépasser 8 mo.')
      }
    },
  },
  validations () {
    return {
      comment: { required },
      author: { required },
      emailComment: { required },
      addName: { required },
      addAdresse: { required },
      addPhone: { required },
      addSmallContent: { required }
    }
  },
  mounted () {
    const store = useStore()

    this.showTextLoading()

    setTimeout(() => {
      fetch('https://api.ipify.org?format=json')
        .then(x => x.json())
        .then(({ ip }) => {
          store.dispatch('fetchBakeryUpdate',
            {
              'ip': ip,
              'bakeryId': this.bakery.id
            })
        })
    }, 200);

    // Galeries
    $('#slider_image_1').on('click', function (e) {
      $('#slider_image_1 .sliderSpec').addClass('active');
      $('#slider_image_2 .sliderSpec').removeClass('active');
      $('#slider_image_3 .sliderSpec').removeClass('active');
      $('#slider_image_4 .sliderSpec').removeClass('active');

      $('#slider_1').removeClass('hide').addClass('show')
      $('#slider_2').removeClass('show').addClass('hide')
      $('#slider_3').removeClass('show').addClass('hide')
      $('#slider_4').removeClass('show').addClass('hide')
    });

    $('#slider_image_2').on('click', function (e) {
      $('#slider_image_1 .sliderSpec').removeClass('active');
      $('#slider_image_2 .sliderSpec').addClass('active');
      $('#slider_image_3 .sliderSpec').removeClass('active');
      $('#slider_image_4 .sliderSpec').removeClass('active');

      $('#slider_1').removeClass('show').addClass('hide')
      $('#slider_2').removeClass('hide').addClass('show')
      $('#slider_3').removeClass('show').addClass('hide')
      $('#slider_4').removeClass('show').addClass('hide')
    });

    $('#slider_image_3').on('click', function (e) {
      $('#slider_image_1 .sliderSpec').removeClass('active');
      $('#slider_image_2 .sliderSpec').removeClass('active');
      $('#slider_image_3 .sliderSpec').addClass('active');
      $('#slider_image_4 .sliderSpec').removeClass('active');

      $('#slider_1').removeClass('show').addClass('hide')
      $('#slider_2').removeClass('show').addClass('hide')
      $('#slider_3').removeClass('hide').addClass('show')
      $('#slider_4').removeClass('show').addClass('hide')
    });

    $('#slider_image_4').on('click', function (e) {
      $('#slider_image_1 .sliderSpec').removeClass('active');
      $('#slider_image_2 .sliderSpec').removeClass('active');
      $('#slider_image_3 .sliderSpec').removeClass('active');
      $('#slider_image_4 .sliderSpec').addClass('active');

      $('#slider_1').removeClass('show').addClass('hide')
      $('#slider_2').removeClass('show').addClass('hide')
      $('#slider_3').removeClass('show').addClass('hide')
      $('#slider_4').removeClass('hide').addClass('show')
    });

    setTimeout(() => {

      if (this.user !== null) {

        axios.get(process.env.WEBSITE + '/user-profil/' + this.user.email)
          .then((res) => {

            if (res.status === 200) {

              // Static values
              user_subscription.value = res.data.subscription

            }

          })

      }

      this.addDesc = this.bakery.content
      this.addName = this.bakery.title
      this.addPhone = this.bakery.phone
      this.addWebsite = this.bakery.website
      addSmallContent.value = this.bakery.small_content
      this.addAdresse = this.bakery.adresse
      this.addHandicap = this.bakery.handicape
      this.addLivraison = this.bakery.delivery
      this.addRestauration = this.bakery.dine_in
      this.addId = this.bakery.id
      this.imageSrc = 'bakerys/add-bakery.jpg'
      this.imageSrc2 = 'bakerys/add-bakery.jpg'
      this.imageSrc3 = 'bakerys/add-bakery.jpg'
      this.imageSrc4 = 'bakerys/add-bakery.jpg'

      if (this.bakeryHours[0] !== undefined) this.addHours1 = this.bakeryHours[0].am
      if (this.bakeryHours[1] !== undefined) this.addHours2 = this.bakeryHours[1].am
      if (this.bakeryHours[2] !== undefined) this.addHours3 = this.bakeryHours[2].am
      if (this.bakeryHours[3] !== undefined) this.addHours4 = this.bakeryHours[3].am
      if (this.bakeryHours[4] !== undefined) this.addHours5 = this.bakeryHours[4].am
      if (this.bakeryHours[5] !== undefined) this.addHours6 = this.bakeryHours[5].am
      if (this.bakeryHours[6] !== undefined) this.addHours7 = this.bakeryHours[6].am

      this.verifLengthArea()

      this.map = 1

    }, 1500);

    $('#menu-main-menu').removeAttr('style')

    // Header menu

    $(document).on('click', '.menu-toggle-2:not(.active)', function (e) {
      e.preventDefault()

      $(this).addClass('active')

      $('#menu-main-menu').fadeIn(300)

    })

    $(document).on('click', '.menu-toggle-2.active', function (e) {
      e.preventDefault()

      $(this).removeClass('active')

      $('#menu-main-menu').fadeOut(300)

    })

    $(document).on('click', '#blog .btn-target', function (e) {
      e.preventDefault()
      var url = $(this).attr('href')
      location.href = url
    })

    // Header

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 1500) {
        $('header').removeClass('navigation-sticky navigation-unpin')
      } else {
        $('header').removeClass('navigation-sticky navigation-unpin')
      }
    })

    $('.header').addClass('h-bakery')
    $('body').removeClass('loading')
    $('.fadeIn').fadeIn(600)
    $('.fadeIn2').fadeIn(600)
    $('.fadeIn3').fadeIn(600)
    $('.fadeIn7').fadeIn(600)
    $('.fadeIn8').fadeIn(600)

    // Scroll click

    $(document).on('click', '.scroll-click-s', function (e) {
      e.preventDefault()

      const scroll = $(this).data('scroll')

      $([document.documentElement, document.body]).animate({
        scrollTop: $('#' + scroll).offset().top
      }, '200')
    })

    // FOOTER

    // Back to top

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 600) {
        $('#back-top').addClass('active')
      } else {
        $('#back-top').removeClass('active')
      }
    })

    $(document).on('click', '#back-top', function (e) {
      e.preventDefault()
      $('html, body').animate({ scrollTop: 0 })
    })

    // Header menu

    $(document).on('click', '.menu-toggle', function (e) {
      e.preventDefault()

      $(this).toggleClass('active')

      $('#menu-main-menu').fadeToggle(300)
    })

    setTimeout(() => {
      $('.search-btn').on('click', function (e) {
        e.preventDefault()

        $('.searchbox').addClass('active')
        $('body').css({
          overflow: 'hidden'
        })
      })

      $('.searchbox-remove').on('click', function (e) {
        e.preventDefault()

        $('.searchbox').removeClass('active')
        $('body').css({
          overflow: 'auto'
        })
      })

      $('#btn_description').on('click', function (e) {

        e.preventDefault()

        $(this).addClass('active')
        $('#tab_description').addClass('active')

        $('#btn_reviews').removeClass('active')
        $('#tab_reviews').removeClass('active')
        $('#btn_hours').removeClass('active')
        $('#tab_hours').removeClass('active')
        $('#btn_settings').removeClass('active')
        $('#tab_settings').removeClass('active')

      })

      $('#btn_reviews').on('click', function (e) {

        e.preventDefault()

        $(this).addClass('active')
        $('#tab_reviews').addClass('active')

        $('#btn_description').removeClass('active')
        $('#tab_description').removeClass('active')
        $('#btn_hours').removeClass('active')
        $('#tab_hours').removeClass('active')
        $('#btn_settings').removeClass('active')
        $('#tab_settings').removeClass('active')
      })

      $('#btn_hours').on('click', function (e) {

        e.preventDefault()

        $(this).addClass('active')
        $('#tab_hours').addClass('active')

        $('#btn_description').removeClass('active')
        $('#tab_description').removeClass('active')
        $('#btn_reviews').removeClass('active')
        $('#tab_reviews').removeClass('active')
        $('#btn_settings').removeClass('active')
        $('#tab_settings').removeClass('active')

      })

      if (this.isLoggedIn) {

        $('#btn_settings').on('click', function (e) {

          e.preventDefault()

          $(this).addClass('active')
          $('#tab_settings').addClass('active')

          $('#btn_description').removeClass('active')
          $('#tab_description').removeClass('active')
          $('#btn_reviews').removeClass('active')
          $('#tab_reviews').removeClass('active')
          $('#btn_hours').removeClass('active')
          $('#tab_hours').removeClass('active')

        })

      }

    }, 100)

    $(document).on('click', '.bs-form-bakery-review .br-widget a', function (e) {

      e.preventDefault()

      var rating = $(this).data('rating-value'),
        name = $(this).data('name')

      $('#' + name).val(rating)
      $('#' + name).removeAttr('class')

      $(this).addClass('br-active')
      $(this).prevAll().addClass('br-active')
      $(this).nextAll().removeClass('br-active')

    })

  }
})
</script>
