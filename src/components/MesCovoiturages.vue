<!-- Component pour l'affichage de l'historique des covoiturages d'un user
utilise le fichier json testConcoit dans le packages testJson pour avoir un affichage automatique de certains covoiturages -->
<template>

    <div>
        <!-- choix de l'historique en tant que passager ou en tant que conducteur -->
        <h2 class="d-flex justify-center"> Mes covoiturages en tant que </h2>
        <v-row justify="space-around" class="mt-4">
            
            <v-btn @click="conducteur" width="500" color="primary" depressed > CONDUCTEUR </v-btn>
            <v-btn @click="passager" width="500" color="primary" depressed> PASSAGER </v-btn>
        </v-row>
        
        <!-- affichage des covoiturages en tant que passager, meme principe que pour la recherche sauf que seul les details sont consultables 
        et le gain d'argent affiché est négatif-->
        <div v-if="covPassager" class="mt-4">
                <v-card
                
                color="#385F73"
                dark
               
                class="mx-auto my-3"
                width="450"
                v-for="item in this.covoits" :key="item.id"
                >
                
                <div class="d-flex justify-space-between">
                    <div class="d-flex justify-start ">
                        <v-avatar class="block ml-3 mt-4 mr-n3" width="60" height="60"> <img src="../image/imgAvatar.png"/> </v-avatar>
                        <div class="ml-2">
                            <v-card-title class="text-h5">
                            {{item.nom}}
                            </v-card-title>
                                
                            <v-card-subtitle class="text-h6"> <v-icon class="mb-1">mdi-star</v-icon> {{item.note}} </v-card-subtitle>  
                        </div>                
                    </div>
                    <div>
                        <h1 class="mt-2 mr-2"> -{{item.prix}} €</h1>
                        
                        <br/>
                        <span class="mt-4 mr-2"><v-icon class="mb-1">mdi-calendar</v-icon>{{item.date}}</span>
                    </div>
                    
                    
                    
                </div>  

                <div class="d-flex justify-space-between mt-4">
                    <div class="d-flex justify-start">
                        <div class="ml-2">
                            <span><v-icon class="mb-1">mdi-map-marker</v-icon> Départ :  </span>
                            <span>{{item.depart}}</span>
                            <br/>
                            <span v-if="item.itineraires.length != 0">Etapes du trajet: </span>
                            <div v-for="itin in item.itineraires" :key="itin">
                                <span> <v-icon class="mb-1">mdi-pin-outline</v-icon>{{itin}}</span>
                            </div>
                            <span ><v-icon class="mb-1">mdi-map-marker</v-icon> Arrivée :  </span>
                            <span>{{item.arrivee}}</span>
                            <br/>
                            
                        </div>
                    </div>
                        <v-card-actions>
                            <v-btn
                            class="ml-2 mt-5"
                            outlined
                            rounded
                            small
                            @click="ActionDetails(item.id)"
                            >
                            VOIR DETAILS
                        </v-btn>
                        </v-card-actions>  
                </div>  
                </v-card>
            </div>
        <!-- affichage des covoiturages en tant que passager, meme principe que pour la recherche sauf que seul les details sont consultables 
        et le gain d'argent affiché est positif-->
        <div v-if="covConducteur" class="mt-4">
                <v-card
                
                color="#385F73"
                dark
               
                class="mx-auto my-3"
                width="450"
                v-for="item in this.covoits" :key="item.id"
                >
                
                <div class="d-flex justify-space-between">
                    <div class="d-flex justify-start ">
                        <v-avatar class="block ml-3 mt-4 mr-n3" width="60" height="60"> <img src="../image/imgAvatar.png"/> </v-avatar>
                        <div class="ml-2">
                            <v-card-title class="text-h5">
                            {{item.nom}}
                            </v-card-title>
                                
                            <v-card-subtitle class="text-h6"> <v-icon class="mb-1">mdi-star</v-icon> {{item.note}} </v-card-subtitle>  
                        </div>                
                    </div>
                    <div>
                        <h1 class="mt-2 mr-2">+{{item.prix}} €</h1>
                        <br/>
                        <span class="mt-4 mr-2"><v-icon class="mb-1">mdi-calendar</v-icon>{{item.date}}</span>
                    </div>
                    
                    
                    
                </div>  

                <div class="d-flex justify-space-between mt-4">
                    <div class="d-flex justify-start">
                        <div class="ml-2">
                            <span><v-icon class="mb-1">mdi-map-marker</v-icon> Départ :  </span>
                            <span>{{item.depart}}</span>
                            <br/>
                            <span v-if="item.itineraires.length != 0">Etapes du trajet: </span>
                            <div v-for="itin in item.itineraires" :key="itin">
                                <span> <v-icon class="mb-1">mdi-pin-outline</v-icon>{{itin}}</span>
                            </div>
                            <span ><v-icon class="mb-1">mdi-map-marker</v-icon> Arrivée :  </span>
                            <span>{{item.arrivee}}</span>
                            <br/>
                            
                        </div>
                    </div>
                        <v-card-actions>
                            <v-btn
                            class="ml-2 mt-5"
                            outlined
                            rounded
                            small
                            @click="ActionDetails(item.id)"
                            >
                            VOIR DETAILS
                        </v-btn>
                        </v-card-actions>  
                </div>  
                </v-card>
            </div>
    </div>
  
</template>

<script>

import testCovoit from '../testJson/testCovoit.json'
export default {
data() {
    return {
        covoits: testCovoit, //mes données du fichier json
        covConducteur: false, //la var pour l'affichage des cov en Conducteur
        covPassager: false, //la var pour l'affichage des cov en Passager
    }
},

methods: {
    //action du bouton conducteur 
    conducteur() {
      this.covConducteur= true;
      this.covPassager=false;  
    },
    //action du bouton passager
    passager(){
      this.covConducteur= false;
      this.covPassager= true;  
    },

    //action lorsque l'on clique sur le détail d'une carte de covoiturage
    ActionDetails(idTransfer){
        if(this.covPassager) //si consulte en tant que passager, affiche le conducteur dans les détails
            this.$router.push({name:'DetailsCovoiturageView', params: {id: idTransfer, afficherConducteur: true, reserver: false }});
        else if(this.covConducteur)//si consulte en tant que conducteur, affiche les passagers dans les détails
            this.$router.push({name:'DetailsCovoiturageView', params: {id: idTransfer, afficherConducteur: false, reserver: false }});

    }
},
}
</script>

<style>

</style>