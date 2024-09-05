# RealEstateCare


## 💿 Install

Set up your project using your preferred package manager. Use the corresponding command to install the dependencies:

| Package Manager                                                | Command        |  
|---------------------------------------------------------------|----------------|  
| [yarn](https://yarnpkg.com/getting-started)                   | `yarn install` |  
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)     | `npm install`  |  
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |  
| [bun](https://bun.sh/#getting-started)                        | `bun install`  |  

After completing the installation, your environment is ready for Vuetify development.

## Korte verantwoording
### 1. Security

In het prototype zijn enkele basis beveiligingsmaatregelen toegepast:

-  **Input Validatie**: Vuetify biedt ingebouwde validatie voor formuliervelden, wat helpt om ongeldige invoer te voorkomen.

-  **XSS Bescherming**: Veilig omgaan met dynamische content is toegepast door Vue’s veilige datamethoden te gebruiken.



Er is nog geen uitgebreide beveiliging, zoals authenticatie, maar dat kan later worden toegevoegd.



### 2. Usability (Nielsen's 10 heuristieken)

Op basis van Nielsen’s 10 gebruiksvriendelijkheidsprincipes:

-  **Zichtbaarheid van systeemstatus**: Er wordt feedback gegeven via progress bars en spinners.

-  **Consistentie**: Vuetify zorgt voor een consistent design met bekende UI-elementen.

-  **Foutpreventie**: Basis foutmeldingen zijn toegevoegd, maar kunnen verder verbeterd worden.



Over het algemeen voldoet het prototype aan veel van deze principes, maar er kunnen nog enkele verfijningen plaatsvinden.



### 3. Accessibility (WCAG 2.1)

Vuetify ondersteunt toegankelijkheid op enkele manieren:

-   **ARIA-attributen** zijn ingebouwd.

-  **Kleurcontrast** en **responsiveness** zijn grotendeels goed, maar moeten verder getest worden.



Wat nog ontbreekt:

- Schermlezer testen.

- Verbetering van het kleurcontrast en tekstalternatieven.



### 4. Style Guides & Best Practices

Vuetify volgt **Material Design**, waardoor de interface consistent en gebruiksvriendelijk is. Custom styles zijn minimaal toegevoegd om de standaardrichtlijnen te behouden.



### Conclusie

Het prototype voldoet aan de basisprincipes van security, usability, accessibility en style guides, maar er zijn nog enkele verbeterpunten, vooral op het gebied van toegankelijkheid en foutpreventie.