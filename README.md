# Todo

Exemple d'application web créée avec [Angular](https://angular.dev/), [Tailwind CSS](https://tailwindcss.com/) et [Preline UI](https://preline.co/index.html).

## GitHub Actions
Cette application est déployée sur GitHub Pages grâce à un [fichier de workflows](/.github/workflows/node.js.yml).
L'hébergement sur GitHub Pages nécessite de faire quelques modifications à l'application Angular :
 - L'adresse de base utilisée par GitHub Pages est de type `<adresse-GitHub>/<nom-du-repo>`. Il faut donc modifier le fichier de configuration d'Angular [`angular.json`](/angular.json) afin d'ajouter le paramètre `"baseHref": "/<nom-du-repo>/"` aux options de build.
 - L'ajout du paramètre `baseHref` va modifier les URL des fichiers générés, et va empêcher le débogueur de VS Code de fonctionner correctement. Il faut ajouter le paramètre suivant au fichier [`launch.json`](/.vscode/launch.json)
    ```json
    "sourceMapPathOverrides": {
        "*": "/<nom-du-repo>/*"
    }
    ```
 - Certaines URL de fichiers ne sont pas affectées par le paramètre baseHref, et nécessitent d'être séparés en une version pour le développement local et une autre version pour l'hébergement sur GitHub. C'est le cas des [fichiers de police (font)](/public/fonts), appelés dans le fichier [`styles.css`](/src/styles.css). J'ai donc créé un autre fichier [`styles.development.css`](/src/styles.development.css), et modifié le fichier de configuration d'Angular [`angular.json`](/angular.json) afin de charger un fichier lors d'un build en mode 'development' et l'autre fichier en mode 'production'.

### Limitations avec le routeur et la gestion des URL

L'hébergement sur GitHub Pages ne redirige pas toutes les requêtes vers la page de base `index.html`, donc on obtient une erreur en tentant d'accéder directement à une URL gérée par le routeur ([exemple](https://clementberleux.github.io/TodoApp/todos)).
GitHub Pages n'est pas fait pour héberger un site dynamique, mais il existe une solution de contournement qui consiste à recopier le fichier `index.html` généré en `404.html`. Le code de l'application sera donc appelé lorsque GitHub voudra afficher une erreur. Cette étape est commentée aux lignes 36-37 du [fichier de workflows](/.github/workflows/node.js.yml).