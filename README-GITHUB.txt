# Le P’tiot Sampantais — version mise à jour

Cette version du site comprend :

- seulement deux langues : français et anglais ;
- le lecteur Radio Lavoir déplacé tout en haut du site ;
- suppression du bouton “Écouter maintenant” ;
- ajout d’une section “Le Grand jeu de patience de Mont Roland” ;
- une grille interactive de 5 maisons × 13 cartes ;
- toutes les cartes affichées en verso au départ, sauf une carte en recto selon la grille initiale ;
- clic sur une carte pour la retourner recto / verso ;
- bouton pour réinitialiser la grille.

## Maisons du jeu

- Maison de Jouhe
- Maison de Monnières
- Maison de Sampans
- Maison d’Authume
- Maison de Dole — Grand Dole

## Rangs

As, 2, 3, 4, 5, 6, 7, 8, 9, 10, V, D, R

## Fichiers de cartes

Le site attend les fichiers JPEG dans :

`assets/cartes/`

Les noms utilisés suivent ce modèle :

- recto : `MR-JEU-REC-XXX-00001.jpeg`
- verso : `MR-JEU-VER-XXX-00001.jpeg`

où `XXX` vaut :

- `JOU`
- `MON`
- `SAM`
- `AUT`
- `DOL`

## Remarque importante

Comme les fichiers originaux n’étaient pas disponibles ici, cette version contient des images JPEG de remplacement portant les bons noms de fichiers.  
Tu peux les remplacer plus tard par les vraies cartes, sans changer le code du site.

## Paiement et formulaire

Le parcours reste :

- formulaire sur `index.html`
- redirection vers `paiement.html`
- paiement Mollie
- retour vers `merci.html`


## Mise à jour de la grille initiale

Nouvelle grille 0 / 1 :

0011000000010
0000000010000
0000000000000
0000000100000
0000000000000


## Mise à jour de la grille initiale

Nouvelle grille 0 / 1 :

0011000000010
0000000010000
1001111101101
0000000100000
1001100000000


## Mise à jour de la grille initiale

Nouvelle grille 0 / 1 :

1011000000010
0000100010000
1101111101111
1001111101000
1001100000000

État du moment :
- 27 cartes choisies
- 38 cartes à choisir
- total : 65 cartes

Modifications :
- remplacement du texte d’introduction par “L’état du moment” ;
- suppression du texte “Disposition initiale…” ;
- suppression du bouton “Réinitialiser la grille” ;
- ajout de la phrase de participation : “Pour participer à ce jeu, contactez : contact@sampans.org pour recevoir les articles disponibles.”


## Mise à jour de la grille initiale

Nouvelle grille 0 / 1 :

1011000000010
0000100010000
1101111101111
1001111101000
1001100100000

État du moment :
- 28 cartes choisies
- 37 cartes à choisir
- total : 65 cartes


## Mise à jour du comportement des cartes

Lorsqu’un visiteur clique sur une carte, celle-ci se retourne brièvement.
Après une seconde, toute la grille revient automatiquement à sa position initiale.


## Mise à jour

- ajout du lien vers la chaîne YouTube : https://www.youtube.com/@LePtiotSampantais ;
- les cartes du Grand jeu de patience ne se retournent plus au clic ;
- remplacement de “Sur place” par “À la mairie” dans “Commander le journal” ;
- suppression du cadre “Dons et frais postaux” ;
- modification du texte “À propos” avec la mention “Sampans et sa région” ;
- suppression du bloc “Un lancement simple et chaleureux”.
