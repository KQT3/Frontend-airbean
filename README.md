# Slutprojekt - AirBean

Du ska bygga en webbapp där du kan beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).

## Instruktioner

### För att komma igång

1. Skapa ett nytt vue-projekt med `vue create`
2. Forka det här repositoryt och klona ner det
3. Flytta över alla filer från vue-projektet till den klonade mappen
4. Gör en commit och push och verifiera att kodbasen är på github
5. Börja utveckla!


### Kravspecifikation

**För att få Godkänt ska ni:**
* Design enligt Mockup
* Mockat API
* Är en single file application (SPA) med vue-router
* Gå att lägga till produkter i en varukorg
* I varukorgen ändra antal/ta bort produkter
* Kunna skicka sin order och få ett svar med en ETA och ordernummer


**För att Väl Godkänt ska ni:**
* Integrerat API
* State management med Vuex
* Hämta alla produkter med fetch
* Lägga till en profilsida där du kan fylla i namn och e-post (lagras i localStorage)
* Om man genomför en order efter att ha fyllt i profilen ska ordern lagras i localStorage
* Det ska även finnas en orderhistorik-sida där man kan se sin orderhistorik


#### För att starta API:et
1. Öppna en ny terminal och navigera till `backend`-mappen
2. `npm install`
3. `node app.js`
 

**Deadline:** 13/1 23:59
