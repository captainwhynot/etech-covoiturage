<template>
  <v-form class="mt-16">
    <v-row>
        <v-text-field  v-model="nom" label="Nom" outlined></v-text-field>
        <v-text-field v-model="prenom" label="Prenom" outlined></v-text-field>
    </v-row>
    <v-text-field v-model="telephone" label="numéro de téléphone" outlined></v-text-field>
    <span> prix : {{this.prix}} €</span>
    <br/>
    
    <div>
        <span> <v-icon>mdi-account-group</v-icon>Places disponibles : {{this.placeLibre}}/{{this.placeTotal}}</span>
        <v-select v-on:change="selectChange"   :items="placesSelected" v-model="nbSelected" label="Nombre de réservation pour le covoiturage" outlined></v-select>
        <span> Prix total de la reservation: {{this.prixTotal}}€</span>
        <br/>
        <v-btn @click="ActionReserver"> ENVOYER DEMANDE DE RESERVATION </v-btn>
    </div>

  </v-form>
</template>

<script>
export default {
    data() {
        return {
            nom: "",
            prenom: "",
            telephone: "",
            prix: Number,
            prixTotal: Number,
            nbSelected: Number,
            placeLibre: Number,
            placeTotal: Number,
            id: Number,
            placesSelected: []
        }
    },
    methods: {
        ActionReserver() {
            console.log(this.nom)
        },
        selectChange(){
            this.prixTotal= this.prix * this.nbSelected;
        }
    },
    created () {
        this.prix = this.$route.params.prix;
        this.placeLibre = this.$route.params.placeLibre;
        this.placeTotal = this.$route.params.placeTotal;
        this.id = this.$route.params.id;
        console.log("TEST TRANSMISSION :\n"+this.prix+" "+this.placeLibre+" "+this.placeTotal);
        let i=1;
        for(i; i<= this.placeTotal - this.placeLibre; i++){
            this.placesSelected.push(i)
        }
        this.prixTotal = this.prix;
        console.log("tab : "+this.placesSelected)
    }

}
</script>

<style>

</style>