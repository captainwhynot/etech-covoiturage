<template>
    <div class="everything">
       <h1 class="d-flex justify-center mb-4"> Bienvenue, où désirez vous voyager ?</h1>
       <v-form>
            <v-row>
                <v-text-field v-model="villeDepart" outlined  prepend-inner-icon="mdi-map-marker" label="Ville de départ"></v-text-field>
                <v-text-field v-model="villeArrivee" outlined prepend-inner-icon="mdi-map-marker" label="Ville d'arrivée"></v-text-field>
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
                        v-model="dateDepart"
                        label="Date de départ"
                        outlined
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        prepend-inner-icon="mdi-calendar"

                    ></v-text-field>
                    </template>
                    <v-date-picker
                    locale="fr"
                    v-model="dateDepart"
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
                <v-select v-if="false" prepend-inner-icon="mdi-account" :items="items" label="Nombre places max" outlined></v-select>
                <v-btn @click="ActionChercher" class="mt-2"> CHERCHER</v-btn>
            </v-row>
        
        </v-form>

        <h1 class="d-flex justify-center mb-4"> Vous etes un conducteur ? </h1>
        <vrow class="d-flex justify-center mb-4">
            <span> Cliquer ici pour poster un covoiturage </span>
            <v-btn @click="ActionPoster" class="mt-2"> POSTER </v-btn>
        </vrow>
      
           
            
        
    </div>
    
</template>

<script>
//import BarreRecherche from './BarreRecherche'
export default {
    //components: { BarreRecherche },
    data() {
        return {
            villeDepart: "",
            villeArrivee: "",
            dateDepart: "",
            nombrePlaces: Number,
            villes: ["Ville1","Ville2","Ville3","Ville4"],
            items: [1,2,3,4,5,6,7,8],
        }
    },
    methods: {
        ActionChercher() {
            this.$router.push({name:'CovoiturageRechercheView', params: {villeDepart: this.villeDepart, villeArrivee: this.villeArrivee, dateDepart: this.dateDepart }});
        },
        ActionPoster(){
            this.$router.push({name:'CreateTrajetView'});
        }
    },
}

</script>

<style lang="scss">

.everything{
    margin-top: 50px;
}

.bouton{
    margin-left: 50%;
}
.text{
    margin-left: 20%;
    margin-right: 20%;

    
}
</style>