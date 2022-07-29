<template>
    <div>

        <h2 class="d-flex justify-center"> Mes covoiturages en tant que </h2>
        <v-row justify="space-around" class="mt-4">
            
            <v-btn @click="conducteur" width="500" color="primary" depressed > CONDUCTEUR </v-btn>
            <v-btn @click="passager" width="500" color="primary" depressed> PASSAGER </v-btn>
        </v-row>
        
        <div v-if="covConducteur">
            <h1> CLIC CONDUCTEUR</h1>
        </div>

        <div v-if="covPassager">
            <h1> CLIC passager</h1>
        </div>
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
                        <h1 class="mt-2 mr-2">{{item.prix}} €</h1>
                        <span class="mt-n3 mr-2"> Places libres: {{item.placeLibre}}/{{item.placeTotal}}</span>
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
                            @click="printID(item.id)"
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
        covoits: testCovoit,
        covConducteur: false,
        covPassager: false,
    }
},

methods: {
    conducteur() {
      this.covConducteur= true;
      this.covPassager=false;  
    },

    passager(){
      this.covConducteur= false;
      this.covPassager= true;  
    },
},
}
</script>

<style>

</style>