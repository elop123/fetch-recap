# fetch-recap
Fetch og scss øvelser
baseret på dette API: https://fakestoreapi.com/

Husk at opsætte din SCSS compiler til at compile din CSS fil det rigtige sted ;)

Du må selv bestemme hvilken Async struktur du vil bruge..
.then() eller Promise-await.



## opgave 1
   øvelse 1:
   skriv en funktion der kan hente alle produkter fra API'et

   Øvelse 2:
   skriv en funktion der kan hente en range af produkter fra API'et, man skal kunne sende start og slut tal med som parametere. eks. getProducts(10,20) giver alle produkter fra 10 til 20.

   Øvelse 3:
   skriv en funktion der kan hente alle produkter i en kategori fra API'et.

   øvelse 4:
   tilføj en feature til din funktion fra øvelse 3, så du kan sende en maksimal mængde af produkter du vil have tilbage.  eks. getProductByCategory(din kategori her,antal produkter max)


## Opgave 2
   Øvelse 1:
   skriv en funktion der kan vise produkter i elementet med id "productList" du skal vise alt info om produktet på et "card"

   Øvlese 2:
   skriv en funktion der kan vise alle kategorier fra API'et, som en menu i nav elementet med id "navigation", hvor du kan klikke på et kategori navn, og der hentes produkter fra kategorien, og den bruger funktionen fra øvelse 1 til at vise produkterne i dommen.


## Opgave 3
   Øvelse 1:
   skriv en SCSS partial der kan håndtere styling af de cards din kode fra Opgave 2 øvelse 1 genererer.

   Øvelse 2:
   skriv en SCSS partial der kan style din menu kode fra Opgave 2 Øvelse 2.
