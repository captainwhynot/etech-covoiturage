<template>
  <div class="marge">
    <h1 class="d-flex justify-center">{{this.jours[this.getNameDay(item.date)]}} {{item.date}}</h1>
    <v-card
                color="#385F73"
                dark
                class="mx-auto my-3"
                width="550"
  
                >
                
                <div class="d-flex justify-space-between">
                    <div class="d-flex justify-start ">
                        <v-avatar class="block ml-3 mt-4 mr-n3" width="60" height="60"> <img src="../image/imgAvatar.png"/> </v-avatar>
                        <div class="ml-2">
                            <v-card-title class="mt-4 text-h5">
                            {{item.nom}}
                            </v-card-title>
                                
                        </div>                
                    </div>
                    <div>
                        <h1 class="mt-2 mr-2">{{item.note}}/5 - {{item.note}} avis </h1>
                        <span class="mt-n3 mr-2 text-decoration-underline">Me contacter</span> <v-icon class="mb-1 text-decoration-none">mdi-chat-outline</v-icon>
                        <br/>
                       
                    </div>
                    
                    
                    
                </div>  

               
    </v-card>
  
  <div>
    <h1> Détails du covoiturage</h1>
    <span><v-icon>mdi-cash</v-icon> {{item.prix}}€ par personne </span>
    <br/>
    <span v-if="profilValid"> <v-icon> mdi-shield-check</v-icon> profil certifié </span>
    <span v-if="!profilValid"> <v-icon> mdi-shield-off</v-icon> profil non certifié </span>
    <br/>
    <span v-if="bagages"> <v-icon> mdi-bag-suitcase</v-icon> gros bagages acceptés </span>
    <span v-if="!bagages"> <v-icon> mdi-bag-suitcase</v-icon> gros bagages non acceptés </span>
    <br/>
    <span v-if="smoke"><v-icon>mdi-smoking</v-icon> fumeur acceptés </span>
    <span v-if="!smoke"><v-icon>mdi-smoking-off</v-icon> non fumeur </span>
    <br/>
    <span v-if="espaceSiege"><v-icon>mdi-car-seat</v-icon> siege entre les passagers </span>
    <span v-if="!espaceSiege"><v-icon>mdi-car-seat</v-icon> pas de sieges entre les passagers </span>
    <br/>
    <span class="subheading"> Modele du véhicule :</span>
    <br/>
    <v-card>
      <div class="d-flex justify-start ">
                        <v-avatar class="block ml-3 mt-4 mr-n3" width="60" height="60"> <img src="../image/imgAvatar.png"/> </v-avatar>
                        <div class="ml-2">
                            <v-card-title class="text-h5">
                            TESLA MODEL X
                            </v-card-title>
                                
                            <v-card-subtitle class="text-h6">  ROSE CLAIR </v-card-subtitle>  
                        </div>                
                    </div>
    </v-card>
     
  </div>
  <br/><br/><br/>
  <h2> Trajet réalisé</h2>
  <div class="d-flex justify-start">
    
    <div class="ml-2">
      <span><v-icon class="mb-1">mdi-map-marker</v-icon> Départ :  </span>
      <span>{{item.depart}}, </span>
      <span>3 chemin du Bigot </span>
      <br/>
      <span v-if="item.itineraires.length != 0">Etapes du trajet: </span>
      <div v-for="itin in item.itineraires" :key="itin">
        <span> <v-icon class="mb-1">mdi-pin-outline</v-icon>{{itin}}, </span>
        <span> 3 chemin du Bigot </span>
      </div>
      <span ><v-icon class="mb-1">mdi-map-marker</v-icon> Arrivée :  </span>
      <span>{{item.arrivee}}, </span>
      <span> 3 chemin du Bigot </span>
      <br/>                    
    </div>
  
 
  </div>
  <br/><br/><br/>
  <h2>Reserver le covoiturage</h2>
  <div>
    <span> <v-icon>mdi-account-group</v-icon>Places disponibles : {{item.placeLibre}}/{{item.placeTotal}}</span>
    <v-select v-on:change="selectChange"   :items="placesSelected" v-model="nbSelected" label="Nombre de réservation pour le covoiturage" outlined></v-select>
    <span> Prix total de la reservation: {{this.prixTotal}}€</span>
    <br/>
    <v-btn> ENVOYER DEMANDE DE RESERVATION </v-btn>
  </div>
  
    
    
  </div>
</template>

<script>
export default {
  data() {
      return {
          jours: ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],

          item: {note: 2.8,
                 nom: "Karim",
                 depart: "Angers",
                 arrivee: "Toulouse",
                 prix: 19,
                 date: "08/24/2022",
                 placeTotal: "4",
                 placeLibre: "2",
                 itineraires: ["ville1","ville4"]},
          smoke: true,
          espaceSiege: true,
          bagages: true,
          profilValid: true,
          id: Number,
          prixTotal: Number,
          nbSelected: Number,
          placesSelected: []
      }
    


  },

  mounted () {
    let i=1;
    for(i; i<= this.item.placeTotal - this.item.placeLibre; i++){
      this.placesSelected.push(i)
    }
    this.prixTotal = this.item.prix;
  },

  methods: {
    selectChange(){
      this.prixTotal= this.item.prix * this.nbSelected;
    },
    getNameDay(strDate) {
      var date = new Date(strDate);
      return date.getDay();
    }
  },
  created () {
    this.id = this.$route.params.id;
    console.log("TEST TRANSMISSION :\n"+this.id);
  }
}
</script>

<style>
.marge {
  margin-left: 25%;
  margin-right: 25%;
}
</style>