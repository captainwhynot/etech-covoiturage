
<!-- Component de la page d'accueil, contient redirections vers creation de trajet / recherche de trajets -->
<template>
    <div class="everything">
       <h1 class="d-flex justify-center mb-4"> Bienvenue, où désirez vous voyager ?</h1>
       <!-- formulaire pour la recherche de trajet -->
       <v-form>
            <v-row>
                <v-text-field v-model="villeDepart" outlined  prepend-inner-icon="mdi-map-marker" label="Ville de départ"></v-text-field>
                <v-text-field v-model="villeArrivee" outlined prepend-inner-icon="mdi-map-marker" label="Ville d'arrivée"></v-text-field>
                <!-- menu de selection de la date (recupéré sur la doc Viewtify) -->
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
        <!-- redirection vers le menu de creation d'un trajet -->
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
            //les var dans les vmodel de la barre de recherche de trajet
            villeDepart: "",
            villeArrivee: "",
            dateDepart: "",
           
        }
    },
    methods: {
        //envoyer les infos de la recherche à la page de recherche
        ActionChercher() {
            this.$router.push({name:'CovoiturageRechercheView', params: {villeDepart: this.villeDepart, villeArrivee: this.villeArrivee, dateDepart: this.dateDepart }});
        },
        //redirection vers la page de creation de trajet
        ActionPoster(){
            this.$router.push({name:'CreateTrajetView'});
        }
    },
}

</script>

<style lang="scss">
//css pour espacer les items entre eux
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