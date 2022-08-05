<template>
    
    <v-form style="margin-top: 5%;">
    <!-- <div v-for="(tab,index) in tab" :key="index"> <h1>{{ pays.area }}</h1></div> -->
        <!-- <v-row v-for="(pays,index) in pays" :key="index">
            <span> {{pays}} </span>
        </v-row> -->
        
        <v-row>
        
          <!-- <v-autocomplete v-model="villeDepart" outlined prepend-icon="mdi-map-marker" label="Ville de départ" :items="villes"/>
          <v-autocomplete v-model="villeArrivee" outlined prepend-icon="mdi-map-marker" label="Ville d'arrivée" :items="villes"/> -->
          <v-text-field @change="isAutocomplete=false" v-model="villeDepart" label="Ville de départ" outlined prepend-icon="mdi-map-marker" > </v-text-field>
          <v-btn @click="entrerVD" dark fab small color="green"> <v-icon dark>mdi-checkbox-marked-circle</v-icon> </v-btn>
          <v-btn @click="villeDepart='' , isAutocompleteVD=false" dark fab small color="red"> <v-icon dark>mdi-close-circle</v-icon> </v-btn>

          <v-text-field @change="isAutocomplete=false" v-model="villeArrivee" label="Ville d'arrivée'" outlined prepend-icon="mdi-map-marker" > </v-text-field>
          <v-btn @click="entrerVA" dark fab small color="green"> <v-icon dark>mdi-checkbox-marked-circle</v-icon> </v-btn>
          <v-btn @click="villeArrivee='' , isAutocompleteVA=false" dark fab small color="red"> <v-icon dark>mdi-close-circle</v-icon> </v-btn>
        </v-row>
        <v-row>
          
          <!-- <v-autocomplete v-model="adresseDepart" outlined prepend-icon="mdi-map-marker" label="Adresse de départ" :items="adresses"/>
          <v-autocomplete v-model="adresseArrivee" outlined prepend-icon="mdi-map-marker" label="Adresse d'arrivée" :items="adresses"/> -->
          <v-text-field @change="isAutocomplete=false" v-model="adresseDepart" label="Adresse de départ" outlined prepend-icon="mdi-map-marker" > </v-text-field>
          <v-btn @click="entrerAD" dark fab small color="green"> <v-icon dark>mdi-checkbox-marked-circle</v-icon> </v-btn>
          <v-btn @click="adresseDepart='' , isAutocompleteAD=false" dark fab small color="red"> <v-icon dark>mdi-close-circle</v-icon> </v-btn>

          <v-text-field @change="isAutocomplete=false" v-model="adresseArrivee" label="Adresse d'arrivée" outlined prepend-icon="mdi-map-marker" > </v-text-field>
          <v-btn @click="entrerAA" dark fab small color="green"> <v-icon dark>mdi-checkbox-marked-circle</v-icon> </v-btn>
          <v-btn @click="adresseArrivee='' , isAutocompleteAA=false" dark fab small color="red"> <v-icon dark>mdi-close-circle</v-icon> </v-btn>
        </v-row>
          
          
        <v-row>
          <!-- MENU PICKER DATE -->
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
          <!-- FIN MENU PICKER DATE-->
          <!-- MENU PICKER HEURE -->
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
          <!-- FIN MENU PICKER HEURE -->
          
          <!-- <v-text-field v-model="title" label="Heure départ" outlined></v-text-field> -->
          <!-- <v-text-field v-model="title" label="Nombre places max" outlined></v-text-field> -->
          <v-select :items="items" label="Nombre places max (non implémenté)" outlined></v-select>
          <v-text-field  v-model="prix" label="Prix" outlined  prefix="€"></v-text-field>
        </v-row>
        
       
        <v-row>
          <span class="mt-3 mr-2"> Selectionner le nombre d'étapes</span>
          <v-autocomplete outlined :items="items" v-model="nombreEtapes"> </v-autocomplete>

        </v-row>
       
        <v-text-field v-model="etape1" outlined label="Etape complémentaire" v-if="nombreEtapes>0"></v-text-field>
        <v-text-field v-model="etape2" outlined label="Etape complémentaire" v-if="nombreEtapes>1"></v-text-field>
        <v-text-field v-model="etape3" outlined label="Etape complémentaire" v-if="nombreEtapes>2"></v-text-field>
        <v-text-field v-model="etape4" outlined label="Etape complémentaire" v-if="nombreEtapes>3"></v-text-field>
        <v-text-field v-model="etape5" outlined label="Etape complémentaire" v-if="nombreEtapes>4"></v-text-field>
       

        <v-row>
          <v-textarea outlined v-model="content" label="Commentaire (non implémenté)"></v-textarea>
        </v-row>

        <v-row>
          <br/>
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
      menu: false,
      menu2: false,
      adresses: ["Adresse1","Adresse2","Adresse3","Adresse4"],
      villes: ["Ville1","Ville2","Ville3","Ville4"],
      nombreEtapes: 0,
      items: [1,2,3,4],
      itineraires:[{itineraire:''},],
      isAutocompleteVA: false,
      isAutocompleteVD: false,
      isAutocompleteAA: false,
      isAutocompleteAD: false,
      etape1:null,
      etape2:null,
      etape3:null,
      etape4:null,
      etape5:null,

      tab: null,
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
          ActionValidate() {
            //console.log(this.itineraires);
            this.itineraires.forEach(item => console.log(item))
          },

          entrerAD(){
            var res= this.adresseDepart.split(' ').join("+");
            axios.get("https://api-adresse.data.gouv.fr/search/?q="+res+"&limit=1").then(response => {
            this.adresseDepart = response.data.features[0].properties.name
            this.isAutocompleteAD=true
            })
          },

          entrerAA(){
            var res= this.adresseArrivee.split(' ').join("+");
            axios.get("https://api-adresse.data.gouv.fr/search/?q="+res+"&limit=1").then(response => {
            this.adresseArrivee = response.data.features[0].properties.name
            this.isAutocompleteAA=true
            })
          },

          entrerVD(){
            var res= this.villeDepart.split(' ').join("+");
            axios.get("https://api-adresse.data.gouv.fr/search/?q="+res+"&limit=1").then(response => {
            this.villeDepart = response.data.features[0].properties.city
            this.isAutocompleteVD=true
            })
          },

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