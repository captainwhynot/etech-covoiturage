<!-- COMPONENT NON UTILISE DANS LE SITE -->

<template>
  <v-form>
            <v-row>
                <v-autocomplete v-model="villeDepart" outlined prepend-inner-icon="mdi-map-marker" label="Ville de départ" :items="villes"/>
                <v-autocomplete v-model="villeArrivee" outlined prepend-inner-icon="mdi-map-marker" label="Ville d'arrivée" :items="villes"/>
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
                    
                    </v-date-picker>
                </v-menu> 
                <v-select v-if="false" prepend-inner-icon="mdi-account" :items="items" label="Nombre places max" outlined></v-select>
            </v-row>
        <v-btn @click="actionRechercher"> RECHERCHER </v-btn>
        </v-form>
</template>

<script>
export default {
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
        actionRechercher() {
            console.log("TEST BTN "+this.villeDepart+" "+this.villeArrivee+" "+this.dateDepart);
        }
    },
}
</script>

<style>

</style>