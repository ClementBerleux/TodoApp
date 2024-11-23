# Todo

Exemple d'application web créée avec [Angular](https://angular.dev/), [Tailwind CSS](https://tailwindcss.com/) et [Preline UI](https://preline.co/index.html).

## GitHub Actions
Cette application est déployée sur GitHub Pages grâce à un [fichier de workflows](/blob/main/.github/workflows/node.js.yml).
L'hébergement sur GitHub Pages nécessite de faire quelques modifications à l'application Angular :
 - L'adresse de base utilisée par GitHub Pages est de type `<adresse-GitHub>/<nom-du-repo>`. Il faut donc modifier le fichier de configuration d'Angular [`angular.json`](/blob/main/angular.json) afin d'ajouter le paramètre `"baseHref": "/<nom-du-repo>/"` aux options de build.
 - L'ajout du paramètre `baseHref` va modifier les URL des fichiers générés, et va empêcher le débogueur de VS Code de fonctionner correctement. Il faut ajouter le paramètre suivant au fichier [`launch.json`](/blob/main/.vscode/launch.json)
    ```json
    "sourceMapPathOverrides": {
        "*": "/<nom-du-repo>/*"
    }
    ```
 - Certaines URL de fichiers ne sont pas affectées par le paramètre baseHref, et nécessitent d'être séparés en une version pour le développement local et une autre version pour l'hébergement sur GitHub. C'est le cas des [fichiers de police (font)](/tree/main/public/fonts), appelés dans le fichier [`styles.css`](/blob/main/src/styles.css). J'ai donc créé un autre fichier [`styles.development.css`](/blob/main/src/styles.development.css), et modifié le fichier de configuration d'Angular [`angular.json`](/blob/main/angular.json) afin de charger un fichier lors d'un build en mode 'development' et l'autre fichier en mode 'production'.