<!-- Component pour la reservation d'un trajet, cette page communique correctement en utilisant les informations des autres pages  -->
<template>

  <v-form class="mt-16">
    <!-- les infos de la reservation pour identifier la personne qui va effectuer le covoiturage -->
    <v-row>
        <v-text-field  v-model="nom" label="Nom" outlined></v-text-field>
        <v-text-field v-model="prenom" label="Prenom" outlined></v-text-field>
    </v-row>
    <v-text-field v-model="telephone" label="numéro de téléphone" outlined></v-text-field>
    <span> prix : {{this.prix}} €</span>
    <br/>
    <!-- selection du nombre de rervation et prix à payer actualisé -->
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
            // les vars vmodel utilisées pour les champs à entrer par l'utilisateur
            nom: "",
            prenom: "",
            telephone: "",
            //les vars utilisées pour stocker les infos transmises
            prix: Number, //prix a l'unité de la place
            prixTotal: Number, //prix*nbSelected
            nbSelected: Number, //nombre de place selectionnées
            placeLibre: Number, //nombre de places libres
            placeTotal: Number, //nombre de places totale a la base dans le covoiturage
            id: Number, //id du covoiturage reservé
            placesSelected: []
        }
    },
    methods: {
        //action du bouton reserver
        ActionReserver() {
            console.log(this.nom)
        },
        //modifier le prix selon le nombre de places selectionnées
        selectChange(){
            this.prixTotal= this.prix * this.nbSelected;
        }
    },
    // recupere les informations la précédente page pour mettre a jour l'affichage de la reservation
    created () {
        this.prix = this.$route.params.prix;
        this.placeLibre = this.$route.params.placeLibre;
        this.placeTotal = this.$route.params.placeTotal;
        this.id = this.$route.params.id;
        console.log("TEST TRANSMISSION :\n"+this.prix+" "+this.placeLibre+" "+this.placeTotal);
        let i=1;
        //recupere les choix de nombre de places possibles selon les infos de la page précédente
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