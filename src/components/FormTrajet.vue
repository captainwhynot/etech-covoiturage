<!-- Formulaire de creation d'un covoiturage
utilise l'API du gouvernement pour l'entrée des adresses (ne fonctionne pas correctement)
l'utilisateur doit entrer le nom des adresses/villes EN ENTIER puis doit cliquer sur le bouton valider pour lancer la validation du champ entré
(je n'ai pas réussi a implémenter une liste d'autocomplétion mise a jour automatiquement lorsque l'utilisateur tape sa recherche)  
il n'y a pas de vérification des champs (l'utilisateur peut entrer une adresse qui n'est pas dans la ville qu'il a entrée précédement)
Pour le nom de certaines variables de cette page, les abréviations suivantes sont utilisées:
AA = Adresse d'Arrivée
AD = Adresse de Depart
VA = Ville d'Arrovée
VD = Ville de Depart-->
<template>
    
    <v-form style="margin-top: 5%;">
        
        <!-- les champs pour les entrées des villes -->
        <v-row>
          <!-- entrée pour la ville d'arrivée -->
          <!-- des qu'on entre une information, une autocompletion doit etre demandée -->
          <v-text-field @change="isAutocompleteVD=false" v-model="villeDepart" label="Ville de départ" outlined prepend-icon="mdi-map-marker" > </v-text-field>
          <!-- bouton qui effectue l'autocompletion -->
          <v-btn @click="entrerVD" dark fab small color="green"> <v-icon dark>mdi-checkbox-marked-circle</v-icon> </v-btn>
          <!-- on réinitialise le champ a 0 et on redemande une autocompletion a l'utilisateur -->
          <v-btn @click="villeDepart='' , isAutocompleteVD=false" dark fab small color="red"> <v-icon dark>mdi-close-circle</v-icon> </v-btn>

          <!-- entrée pour la ville de départ -->
          <v-text-field @change="isAutocompleteVA=false" v-model="villeArrivee" label="Ville d'arrivée'" outlined prepend-icon="mdi-map-marker" > </v-text-field>
          <v-btn @click="entrerVA" dark fab small color="green"> <v-icon dark>mdi-checkbox-marked-circle</v-icon> </v-btn>
          <v-btn @click="villeArrivee='' , isAutocompleteVA=false" dark fab small color="red"> <v-icon dark>mdi-close-circle</v-icon> </v-btn>
        </v-row>
        
        <!-- les champs pour les entrées des adresses -->
        <v-row>
          <!-- etrée pour l'adresse de départ -->
          <v-text-field @change="isAutocompleteAD=false" v-model="adresseDepart" label="Adresse de départ" outlined prepend-icon="mdi-map-marker" > </v-text-field>
          <v-btn @click="entrerAD" dark fab small color="green"> <v-icon dark>mdi-checkbox-marked-circle</v-icon> </v-btn>
          <v-btn @click="adresseDepart='' , isAutocompleteAD=false" dark fab small color="red"> <v-icon dark>mdi-close-circle</v-icon> </v-btn>

          <v-text-field @change="isAutocompleteAA=false" v-model="adresseArrivee" label="Adresse d'arrivée" outlined prepend-icon="mdi-map-marker" > </v-text-field>
          <v-btn @click="entrerAA" dark fab small color="green"> <v-icon dark>mdi-checkbox-marked-circle</v-icon> </v-btn>
          <v-btn @click="adresseArrivee='' , isAutocompleteAA=false" dark fab small color="red"> <v-icon dark>mdi-close-circle</v-icon> </v-btn>
        </v-row>
          
    
        <v-row>
          <!-- menu pour la selection d'une date (issu de la doc vuetify) -->
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
            >
            <template v-slot:activator="{ on, attrs }" >
              <v-text-field
                v-model="date"
                label="Date de départ"
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
                prepend-icon="mdi-calendar"

              ></v-text-field>
            </template>
            <v-date-picker
              locale="fr"
              v-model="date"
              no-title
              scrollable
              >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="menu = false"
                >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu.save(date)"
                >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu> 
          
          <!-- menu pour la selection d'une heure (issu de la doc vuetify) -->
          <v-menu
            ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time"
                label="Heure de départ"
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
                prepend-icon="mdi-clock"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menu2"
              format="24hr"
              v-model="time"
              full-width
              @click:minute="$refs.menu2.save(time)"
            ></v-time-picker>
          </v-menu>
          
          <v-select :items="items" label="Nombre places max " outlined></v-select>
          <v-text-field  v-model="prix" label="Prix" outlined  prefix="€"></v-text-field>
        </v-row>
        
       
       <!-- L'utilisateur selectionne le nombre d'étapes intermédiares entre l'arrivée et le départ (validation des données par l'API a ajouter) -->
        <v-row>
          <span class="mt-3 mr-2"> Selectionner le nombre d'étapes</span>
          <v-autocomplete outlined :items="items" v-model="nombreEtapes"> </v-autocomplete>

        </v-row>
       <!-- affichage des champs selon le nombre d'étapes selectionné par l'utilisateur -->
        <v-text-field v-model="etape1" outlined label="Etape complémentaire" v-if="nombreEtapes>0"></v-text-field>
        <v-text-field v-model="etape2" outlined label="Etape complémentaire" v-if="nombreEtapes>1"></v-text-field>
        <v-text-field v-model="etape3" outlined label="Etape complémentaire" v-if="nombreEtapes>2"></v-text-field>
        <v-text-field v-model="etape4" outlined label="Etape complémentaire" v-if="nombreEtapes>3"></v-text-field>
        <v-text-field v-model="etape5" outlined label="Etape complémentaire" v-if="nombreEtapes>4"></v-text-field>
       

        <v-row>
          <v-textarea outlined v-model="content" label="Commentaire"></v-textarea>
        </v-row>

       



        
        <v-spacer></v-spacer>
        <v-btn @click="ActionValidate" class="success mx-0 mt-3">Valider trajet</v-btn>
    </v-form>
</template>

<script>
import axios from 'axios'
export default {
    //name: 'HomeView',
    data: () => ({
      //vars pour affichage des menu de sélection de date/heure
      menu: false, //menu date
      menu2: false, //menu heure
      
      //vars pour le choix des étapes intermédiaires
      nombreEtapes: 0, //vmodel pour le champ de selection
      items: [1,2,3,4], //les choix possibles
      //les vmodel pour les champs d'entrée des etapes intermédiaires
      etape1:null,
      etape2:null,
      etape3:null,
      etape4:null,
      etape5:null,

      // champs pour verifier l'autocompletion des villes et des adresses
      isAutocompleteVA: false,
      isAutocompleteVD: false,
      isAutocompleteAA: false,
      isAutocompleteAD: false,
      

      // les vars pour les vmodel de l'ensemble des formulaires
      txt: null,
      pays:null,
      date:null,
      time:null,
      adresseDepart:null,
      adresseArrivee:null,
      villeDepart:null,
      villeArrivee:null,
      prix:null,

    }),
    methods: {
          // action du bouton validate
          ActionValidate() {
            
          },

          //action du bouton pour la validation de l'adresse de depart
          entrerAD(){
            var res= this.adresseDepart.split(' ').join("+"); //separer les espaces par des + pour pouvoir envoyer la requete à l'API
            axios.get("https://api-adresse.data.gouv.fr/search/?q="+res+"&limit=1").then(response => { //on limite le nombre de resultat à 1 pour avoir directement le champ validé
            this.adresseDepart = response.data.features[0].properties.name //on récupere le nom du resultat obtenu
            this.isAutocompleteAD=true //on valide l'autocompletion du champ
            })
          },

          //action du bouton pour la validation de l'adresse d'arrivée
          entrerAA(){
            var res= this.adresseArrivee.split(' ').join("+");
            axios.get("https://api-adresse.data.gouv.fr/search/?q="+res+"&limit=1").then(response => {
            this.adresseArrivee = response.data.features[0].properties.name
            this.isAutocompleteAA=true
            })
          },

          //action du bouton pour la validation de la ville de depart
          entrerVD(){
            var res= this.villeDepart.split(' ').join("+");
            axios.get("https://api-adresse.data.gouv.fr/search/?q="+res+"&limit=1").then(response => {
            this.villeDepart = response.data.features[0].properties.city
            this.isAutocompleteVD=true
            })
          },

          //action du bouton pour la validation de la ville d'arrivée
          entrerVA(){
            var res= this.villeArrivee.split(' ').join("+");
            axios.get("https://api-adresse.data.gouv.fr/search/?q="+res+"&limit=1").then(response => {
            this.villeArrivee = response.data.features[0].properties.city
            this.isAutocompleteVA=true
            })
          }

        
          
      },
    
  }
</script>

<style lang="scss">
.v-form{
  margin-left: 20%;
  margin-right: 20%;
}

</style>