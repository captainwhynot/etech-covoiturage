<template>
    
    <v-form style="margin-top: 5%;">
    <!-- <div v-for="(tab,index) in tab" :key="index"> <h1>{{ pays.area }}</h1></div> -->
        <!-- <v-row v-for="(pays,index) in pays" :key="index">
            <span> {{pays}} </span>
        </v-row> -->
        
        <v-row>
          <!-- <v-text-field v-model="uneVar" label="Ville de départ" outlined prepend-icon="mdi-map-marker"></v-text-field>
          <v-text-field label="Adresse de départ" outlined prepend-icon="mdi-map-marker"></v-text-field> -->
          <v-autocomplete outlined prepend-icon="mdi-map-marker" label="Ville de départ" :items="villes"/>
          <v-autocomplete outlined prepend-icon="mdi-map-marker" label="Ville d'arrivée" :items="villes"/>
        </v-row>
        <v-row>
          <!-- <v-text-field label="Ville d'arrivée" outlined prepend-icon="mdi-map-marker"></v-text-field>
          <v-text-field label="Adresse d'arrivée" outlined prepend-icon="mdi-map-marker"></v-text-field> -->
          <v-autocomplete outlined prepend-icon="mdi-map-marker" label="Adresse d'arrivée" :items="adresses"/>
          <v-autocomplete outlined prepend-icon="mdi-map-marker" label="Adresse de départ" :items="adresses"/>
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
          <v-select :items="items" label="Nombre places max" outlined></v-select>
          <v-text-field  label="Prix" outlined  prefix="€"></v-text-field>
        </v-row>
        
        <v-row>
          <span subheading >Ajouter ou enlever une étape</span>
          <v-btn @click.prevent="addField(itineraires)">+</v-btn>
          <v-btn @click.prevent="removeField(index,itineraires)">-</v-btn>
        </v-row>
      
        <v-row v-for="(input, index) in itineraires" :key="index">
          <v-text-field   label="Etapes complémentaires" outlined></v-text-field>   
        </v-row>
       

        <v-row>
          <v-textarea outlined v-model="content" label="Commentaire"></v-textarea>
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
      items: [1,2,3,4,5,6,7],
      itineraires:[{itineraire:''},],
      tab: null,
      txt: null,
      pays:null

    }),
    methods: {
          ActionValidate() {
            console.log("TEST VALIDATE");
          },
          addField(itineraires){
            itineraires.push({});
          },
          removeField(index,itineraires){
            itineraires.splice(index, 1);
          }
      },
    mounted(){
        axios.get("https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port").then((response) =>{
            
            this.pays=response.data;
            console.log(this.pays);
            console.log("test :"+this.pays.length);
        })
    },

  }
</script>

<style lang="scss">
.v-form{
  margin-left: 20%;
  margin-right: 20%;
}

</style>