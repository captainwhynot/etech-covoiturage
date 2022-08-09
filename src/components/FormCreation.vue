<!-- Component pour la creation d'un compte, des regles de saisies ont été entrées pour certains champs mais sont incompletes -->
<template>
  <v-form class="mt-16">
    <!-- champ pour le nom d'utilisateur -->
    <v-row>
         <v-text-field outlined label="Nom d'utilisateur" v-model="username"
         :rules="[rules.required]"></v-text-field>
    </v-row>
       
    <!-- les champs pour les mdp -->
    <v-row>
        <v-text-field outlined
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : `password`"
            label="Mot de passe"
            hint="Requis: 1 chiffre, 1 caractère majuscule, longueur minimale de 8"
            class="input-group--focused"
            @click:append="show = !show"
            :rules="[rules.required, rules.correctPassword]"
        ></v-text-field>

        <v-text-field outlined
            v-model="samePassword"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : `password`"
            label="Confirmation mot de passe"
            class="input-group--focused"
            @click:append="show2 = !show2"
            :rules="[rules.required, rules.same]"
        ></v-text-field>
        
    </v-row>
    <!-- le reste des données personnelles  -->
    <v-row>
        <v-text-field outlined v-model="prenom" label="Prénom"></v-text-field>
        <v-text-field outlined v-model="nom" label="Nom"></v-text-field>
    </v-row>
    <v-row>
        <v-text-field outlined v-model="adresseMail" label="Adresse mail"></v-text-field>
    </v-row>
    <v-row>
        <v-text-field outlined v-model="numeroTelephone" label="Numéro de téléphone"></v-text-field>
    </v-row>
    <v-row>
      <!-- menu de selection de date (issu de la doc vuetify) -->
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
                label="Date de naissance"
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
    </v-row>
    <v-spacer/>
    
    <v-btn @click="ActionCreer">CREER UN COMPTE</v-btn>
  </v-form>
</template>

<script>
export default {
    data() {
        return {
            menu: false, //afficher ou non le menu de selection de date
            //vars pour afficher ou non les contenu des textfields
            show: false, //pour le mot de passe
            show2: false, //pour la validation du mot de passe

            //les vars pour les vmodel des textfields
            username: "",
            password: "",
            samePassword: "",
            adresseMail: "",
            nom: "",
            prenom:"",
            numeroTelephone:"",
            date:"", 

            //les différentes regles pour la validation des champs
            rules: {
                
                required: value => !!value || 'Ce champ ne peut pas etre vide', 
                correctPassword: value => (/[A-Z]/.test(value) && /[0-9]/.test(value) && /[#?!@$%^&*-]/.test(value))|| 'Le mot de passe doit correspondre aux regles',
                //le mot de passe doit avoir au moins 1 maj, 1 chiffre et 1 caractere spécial
                same: () => this.samePassword === this.password || 'Les mots de passe entrés ne correspondent pas'
                //les mots de passes entrés dans les 2 champs doivent correspondre
            },
        }
    },
    methods: {
      //action du bouton pour créer un compte
        ActionCreer() {
            console.log("LES VARS: \n" 
            +"nom: "+this.nom+"\n"
            +"prenom: "+this.prenom+"\n"
            +"username: "+this.username+"\n"
            +"numeroTelephone: "+this.numeroTelephone+"\n"
            +"adresseMail: "+this.adresseMail+"\n"
            +"password: "+this.password+"\n" 
            +"dateNaissance: "+this.date+"\n");
        }
    },
    
}
</script>

<style>

</style>