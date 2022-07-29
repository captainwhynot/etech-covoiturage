<template>
    <div class="my-5">
        
        
        <BarreRecherche/>
        <div class="d-flex justify-center">
            <v-form class="ml-16 pl-16">
                <span> Options de recherche </span>
                <v-row> <v-checkbox  label="Prix croissant">  </v-checkbox> </v-row>
                <v-row> <v-checkbox  label="Trajets directs">  </v-checkbox> </v-row>
                <v-row> 
                    <v-menu
                        ref="menu"
                        v-model="menu"
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
                            label="Heure de départ min"
                            outlined
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            prepend-icon="mdi-clock"
                        ></v-text-field>
                        </template>
                        <v-time-picker
                        v-if="menu"
                        format="24hr"
                        v-model="time"
                        full-width
                        @click:minute="$refs.menu.save(time)"
                        ></v-time-picker>
                    </v-menu>
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
                            label="Heure de départ max"
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
                </v-row>
                <v-row v-if="false"> <v-checkbox  label="Profils certifiés">  </v-checkbox> </v-row>
                <v-row v-if="false"> <v-checkbox  label="Espace entre les sièges">  </v-checkbox> </v-row>
                <v-row v-if="false"> <v-checkbox  label="Autorisation de fumer">  </v-checkbox> </v-row>
            </v-form>
            <div class="mr-16 pr-16">
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
    </div> 
</template>

<script>
import BarreRecherche from './BarreRecherche'
import testCovoit from '../testJson/testCovoit.json'
export default {
    components: { BarreRecherche },
    
    data() {
        return {
            tabIndex: [],
            covoits: testCovoit,
            menu: false,
            menu2: false,
            items: [
                {ville: "ville1"},
                {ville: "ville2"},
                {ville: "ville3"}
            ]
        }
    },
    methods: {
        
        printID(givenID){
            this.$router.push({name:'DetailsCovoiturageView', params: {id: givenID}}); 
            
        }
    },

    
   
}    
</script>

<style>

</style>