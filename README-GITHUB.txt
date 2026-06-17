# Site GitHub Pages pour www.sampans.org

Cette version ajoute :

- l’affiche de lancement ;
- les prix du journal ;
- les tarifs d’envoi ;
- l’explication des dons à l’École des Chiens Guides de Lyon Centre-Est ;
- un exemple de dons pour 100 journaux.

Fichiers/dossiers à déposer à la racine du dépôt GitHub :

- index.html
- style.css
- CNAME
- .nojekyll
- assets/

Le fichier CNAME contient :
www.sampans.org

## Où est l’affiche ?

- assets/affiche-lancement-journal.jpg : version optimisée pour l’affichage web
- assets/affiche-lancement-journal-original.png : version originale en grand format

## Publication GitHub Pages

1. Créer ou ouvrir le dépôt GitHub du site.
2. Envoyer tous les fichiers et le dossier assets à la racine du dépôt.
3. Aller dans Settings > Pages.
4. Source : Deploy from a branch.
5. Branch : main.
6. Folder : / (root).
7. Custom domain : www.sampans.org.
8. Activer Enforce HTTPS quand GitHub le permet.

## DNS Microsoft 365

Ne pas modifier les entrées Microsoft 365 / Exchange.

Modifier seulement les enregistrements web :

Pour www :
Type : CNAME
Nom : www
Valeur : VOTRE-NOM-GITHUB.github.io
TTL : 1 heure

Pour sampans.org sans www :
Remplacer l’ancien A 213.200.220.164 par les 4 A records GitHub Pages :
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
