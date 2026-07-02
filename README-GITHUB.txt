# Site GitHub Pages — phase 1 paiement nettoyée

Cette version contient :

- formulaire FormSubmit envoyé automatiquement à contact@sampans.org ;
- redirection après formulaire vers https://www.sampans.org/paiement.html ;
- page paiement.html avec les trois liens Mollie ;
- page merci.html pour le retour après paiement ;
- nombre d’exemplaires par défaut : 1 ;
- suppression de la dernière boîte “Après l’envoi du formulaire…” ;
- suppression des langues : chinois, arabe, malais, coréen, tamoul / Sri Lanka ;
- langues conservées : français, anglais, espagnol, portugais, allemand, serbe ;
- affiche incluse dans le dossier assets.

Liens Mollie intégrés :

- Sur place / retrait : 6,28 €
- France : 12,35 €
- Europe et reste du monde : 18,42 €

Dans Mollie, garder l’URL de redirection après paiement :
https://www.sampans.org/merci.html


Ajout Radio Lavoir :
- section Radio Lavoir ajoutée dans index.html ;
- lecteur intégré via iframe Airtime Pro ;
- bouton “Écouter Radio Lavoir” ajouté dans l’en-tête.


Ajouts :
- gros bouton “Écouter maintenant” pour Radio Lavoir ;
- intégration Plausible Analytics dans toutes les pages HTML ;
- domaine Plausible indiqué dans le code : sampans.org.

Important :
Créer le site dans Plausible avec le domaine sampans.org.
Si Plausible fournit un script différent, remplacer dans les fichiers HTML la ligne :
<script defer data-domain="sampans.org" src="https://plausible.io/js/script.js"></script>
par le script exact fourni par Plausible.


Plausible :
Le script Plausible a été remplacé par le script exact fourni :

<!-- Privacy-friendly analytics by Plausible -->
<script async src="https://plausible.io/js/pa-1O7EbTApC3vd435JIiavt.js"></script>
<script>
  window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()
</script>


Mise à jour du lancement :
- ajout d’une section “Le lancement du journal” ;
- mention de l’annulation du marché des producteurs en raison de la canicule ;
- mention du lancement en petit comité au Mont-Roland ;
- mention de l’anniversaire de Jacky avec gâteau et crémant du Jura ;
- mention de l’article de Patrice Genreau dans Le Progrès ;
- rappel du format Belle Époque, daté du 17 novembre 1902 ;
- ajout de l’idée d’une possible suite pour la Pentecôte 1867.
