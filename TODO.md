# To-do #

### Login ###

- [OK] animation fade in /out
- forgot password
- real login + form validation
- real logout
- ACLs
- error 403 (when an user is not allowed to access a page)
- [OK] autofocus on username (directive ?)
- Use proper Redux architecture with RxJs to handle state


### Layout ###

- [OK] activeRoute to activate links in sidebar
- [OK] pageTitle
- [OK]loading bar


### Other ###

- [OK] 404 page
- [OK] nice loading screen


### Build ###

- [OK] webpack building
- [OK] AOT compilation
- [OK] use sass for login page-specific CSS



Check de l'ip adresse coté serveur
si on récupere une 401, envoyer directement sur le login avec un message d'erreur
1. intercepter toutes les 401, faire un handler avec le composant Http
2. en cas de 401, déclencher une action dans le AuthService, qui définit le message d'erreur
3. ca redirige vers /login avec un message d'erreur