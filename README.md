# Software-Engineering, Oblig 3

Denne oppgaven besto i å bruke GitHub Actions til å lage en workflow for å effektivisere og automatisere prosessen med bl.a kjøring av tester ved push. 

Jeg har brukt Node.JS sin mal for opprettelse av workflow - Hvorfor finne opp hjulet på nytt? Denne er god nok for dette miniprosjektet og dekker det jeg trenger. Den kan 
riktignok selvfølgelig modifiseres i yml-fila senere, dersom jeg f.eks ønsker enda flere prosesser kjørt automatisk, eller om jeg vil endre på måten det skal gjøres på. 

Per nå utfører den en npm ci, som er en modifisert npm install som er tilpasset automatiseringsprosesser, og som da installerer nødvendige avhengigheter, men i riktig struktur. I tillegg gjør den npm build dersom det er spesifisert, men det er det ikke i dette tilfellet, så kommandoen blir her ignorert. Deretter kjører den alle testene. Dette utføres når man pusher en commit til GitHub.

Ved push kjører den nå gjennom alt i 3 ulike node-versjoner, og alle prosesser sjekkes av og lyser grønt til og med tester. Dersom en test feiler vil workflowen avbrytes som en helhet. 

