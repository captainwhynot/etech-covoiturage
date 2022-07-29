<template>
<div class="container" id="divtest">
  <form id="modal_form" action="process_form.php" method="post">
    <div class="form-row">
      <div class="form-group col">
        <label for="adresse" class="control-label">Adresse</label>
        <input type="text" class="form-control" id="adresse" name="adresse" autocomplete="off" data-toggle="tooltip" data-placement="top" title="Ce champ est intelligent... essaie d'y taper à peu près n'importequoi, par exemple : barry 65150 ;)" />
        <div class="address-feedback position-absolute list-group" style="z-index:1100;">
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-sm-3">
        <label for="cp" class="control-label">Code Postal</label>
        <input type="text" class="form-control" id="cp" name="cp" />
      </div>
      <div class="form-group col-sm-6">
        <label for="ville">Ville</label>
        <input type="text" class="form-control" id="ville" name="ville" required />
      </div>
      <div class="form-group col-sm-3">
        <label for="pays">Pays</label>
        <input type="text" class="form-control" id="pays" name="pays" />
      </div>

    </div>
  </form>
  <!-- v-on:keyup.enter="entrerAdr" -->
<v-autocomplete @keyup="entrerAdr"  :search-input.sync="adrDepart" id="test" outlined prepend-icon="mdi-map-marker" label="Ville de départ" :items="villes" return-object/>
<v-btn @click="test"> </v-btn>
</div>

</template>

<script>
//import $ from 'jquery'
import axios from 'axios'

export default{
    data() {
      return {
        adrDepart: null,
        villes: [],
        //villes: [{ville: "ville1"},{ville: "ville2"}],
        listeTestVue: null,
        compteur: 0,
        pays: null,
        tabTest: [],
      }
    },
    

    mounted () {
      //this.entrerAdr;
    },

    methods: {
      test(){
        console.log("test "+this.adrDepart);
      },
      addList(ville) {
        this.villes.push(ville);
      },
      entrerAdr(){
        var res= this.adrDepart.split(' ').join("+");
        axios.get("https://api-adresse.data.gouv.fr/search/?q="+res).then(response => {
          console.log(response.data.features)
          this.tabTest=response.data.features;
          console.log("TabTest :\n"+this.tabTest);
          console.log("TabVilles avant :\n"+this.villes);
          this.villes=[];
          let nvTab = [];
          for(let i=0; i<this.tabTest.length; i++){
            nvTab.push(this.tabTest[i].properties.label);
            // this.addList(this.tabTest[i].properties.label);
            // console.log(this.tabTest[i].properties.label);
          }
          this.villes=nvTab;
          console.log("TabVilles apres:\n"+this.villes);
        })
      }
      
    },

    /*mounted () {

        var listeTest= [];
        var currentFocus = -1;
        var fetchTrigger = 0;
         // Fonction pour mettre en forme visuellement un résultat sélectionné
        function setActive() {
        var nbVal = $("div.address-feedback a").length;
        if (!nbVal)
            return false; // Si on n'a aucun résultat listé, on s'arrête là.
        // On commence par nettoyer une éventuelle sélection précédente
        $('div.address-feedback a').removeClass("active");

        // Bidouille mathématique pour contraindre le focus dans la plage du nombre de résultats
        currentFocus = ((currentFocus + nbVal - 1) % nbVal) + 1;

        $('div.address-feedback a:nth-child(' + currentFocus + ')').addClass("active");
        }

        // Au clic sur une adresse suggérée, on ventile l'adresse dans les champs appropriés. On espionne mousedown plutôt que click pour l'attraper avant la perte de focus du champ adresse.
        $('div.address-feedback').on("mousedown", "a", function(event) {
        // Stop la propagation par défaut
        event.preventDefault();
        event.stopPropagation();

        $("#adresse").val($(this).attr("data-name"));
        $("#cp").val($(this).attr("data-postcode"));
        $("#ville").val($(this).attr("data-city"));

        $('.address-feedback').empty();
        });

        // On espionne le clavier dans le champ adresse pour déclencher les actions qui vont bien
        $("#adresse").keyup(function(event) {
        // Stop la propagation par défaut
        event.preventDefault();
        event.stopPropagation();

        if (event.keyCode === 38) { // Flèche HAUT
            currentFocus--;
            setActive();
            return false;
        } else if (event.keyCode === 40) { // Flèche BAS
            currentFocus++;
            setActive();
            return false;
        } else if (event.keyCode === 13) { // Touche ENTREE
            if (currentFocus > 0) {
            // On simule un clic sur l'élément actif
            $("div.address-feedback a:nth-child(" + currentFocus + ")").mousedown();
            }
            return false;
        }

        // Si on arrive ici c'est que l'user a avancé dans la saisie : on réinitialise le curseur de sélection.
        $('div.address-feedback a').removeClass("active");
        currentFocus = 0;

        // On annule une éventuelle précédente requête en attente
        clearTimeout(fetchTrigger);

        // Si le champ adresse est vide, on nettoie la liste des suggestions et on ne lance pas de requête.
        let rue = $("#adresse").val();
        if (rue.length === 0) {
            $('.address-feedback').empty();
            return false;
        }

        // On lance une minuterie pour une requête vers l'API.
        fetchTrigger = setTimeout(function() {
            // On lance la requête sur l'API
            $.get('https://api-adresse.data.gouv.fr/search/', {
            q: rue,
            limit: 15,
            autocomplete: 1
            }, function(data) {
            let liste = "";
            listeTest=[];
            $.each(data.features, function(i, obj) {
                // données phase 1 (obj.properties.label) & phase 2 : name, postcode, city
                // J'ajoute chaque élément dans une liste
                let cooladdress = obj.properties.name + " " + obj.properties.postcode + " <strong>" + obj.properties.city + "</strong>";
                liste += '<a class="list-group-item list-group-item-action py-1" href="#" name="' + obj.properties.label + '" data-name="' + obj.properties.name + '" data-postcode="' + obj.properties.postcode + '" data-city="' + obj.properties.city + '">' + cooladdress + '</a>';
                listeTest.push(obj.properties.city);
                //console.log(listeTest);
            });
            $('.address-feedback').html(liste);
            console.log(listeTest);
            this.villes.push("TEST 5");
            this.compteur+=1;
            console.log("TEST Compteur :"+this.compteur);
            //this.villes = listeTest;
            //$('#test').attr(":items","["+listeTest+"]");
            //$("#divtest").append("<h1>caca pipi</h1>");
            
            }, 'json');
        }, 500);
        });
        
        // On cache la liste si le champ adresse perd le focus
        $("#adresse").focusout(function() {
        $('.address-feedback').empty();
        });

        // On annule le comportement par défaut des touches entrée et flèches si une liste de suggestion d'adresses est affichée
        $("#adresse").keydown(function(e) {
        if ($("div.address-feedback a").length > 0 && (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 13)) {
            e.preventDefault();
        }
        });

    },*/
}



</script>

<style>

</style>