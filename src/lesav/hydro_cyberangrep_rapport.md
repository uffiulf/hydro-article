# Norsk Hydro Cyberangrepet 2019: En Komplett Analyse

## LockerGoga-angrepet som rystet norsk industri

---

# DEL 1: HVA SOM SKJEDDE

## Kort oppsummering

Den 19. mars 2019 ble Norsk Hydro, et av verdens største aluminiumsselskaper, rammet av et omfattende løsepengevirus-angrep. Angrepet lammet IT-systemer på 170 anlegg i 40 land, tvang 35.000 ansatte til å jobbe med penn og papir, og kostet selskapet rundt 800 millioner kroner.

Hydro valgte å ikke betale løsepenger. I stedet gjenopprettet de alle systemer fra sikkerhetskopier – en prosess som tok flere måneder. Deres åpenhet om angrepet har siden blitt hyllet som «gold standard» for krisehåndtering av cybersikkerhetsindustrien og internasjonale rettshåndhevere.

---

# DEL 2: DETALJERT TIDSLINJE

## Forspillet (Desember 2018 – Mars 2019)

Tre måneder før angrepet ble synlig, åpnet en Hydro-ansatt en infisert e-postvedlegg fra en betrodd kunde. Dette var et legitimt vedlegg som hackerne hadde utstyrt med skadevare – en såkalt «trojaner».

> «De utstyrte det med en nyttelast for å installere trojanerprogramvare på PC-en til Hydro-ansatte. Denne trojanerprogramvaren ble oppdaget av antivirusprogrammet vårt noen dager senere. Men det var allerede for sent. På det tidspunktet hadde angriperen bygget et første fotfeste i systemet vårt.»
> — Torstein Gimnes Are, Informasjonssikkerhetssjef, Norsk Hydro (Microsoft Source)

I løpet av de tre månedene frem til mars hadde hackerne gradvis utvidet sin tilgang i nettverket, fanget administratorlegitimasjon og forberedt angrepet.

## Natten 18.–19. mars 2019

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TIDSLINJE ANGREPSNATTEN                          │
├─────────────────────────────────────────────────────────────────────┤
│ Kveld 18. mars     │ Første tegn på angrep ved Hydro-anlegg i USA   │
│ Ca. kl. 23:00 CET  │ Angrepet starter med full styrke               │
│ Ca. kl. 00:00 CET  │ IT-ansatte oppdager unormal aktivitet          │
│ Kl. 04:00          │ Torstein Gimnes Are vekkes av telefon          │
│ Kl. 04:00          │ Hilde Merete Aasheim vekkes - «ingen øvelse!»  │
│ Kl. 05:00          │ Aasheim etablerer krisesenter på Vækerø        │
│ Tidlig morgen      │ Hele IT-organisasjonen i beredskap             │
│ Kl. 07:30          │ Hydro sender børsmelding om angrepet           │
│ Før kl. 08:00      │ NSM kontaktes av Hydro                         │
│ Kl. 09:00          │ Oslo Børs åpner - aksjen faller 3,4%           │
│ Kl. 15:00          │ Pressekonferanse på Vækerø med CFO Kallevik    │
└─────────────────────────────────────────────────────────────────────┘
```

## Sitater fra natten

> «Vi er utsatt for et kraftig cyberangrep og dette er ingen øvelse!»
> — Kollega til Hilde Merete Aasheim, kl. 04:00 (TU.no)

> «Alt var mørkt her. Alle PC-er og alt av nettverk og servere var nede. Vi hadde bare penn og papir så vi startet med å skrive plakater til de ansatte om at ingen måtte slå på sine PC-er når de kom på jobb.»
> — Hilde Merete Aasheim, konsernsjef (TU.no)

> «Det var litt armer og ben i dag morges, og det var jo en spesiell følelse å høre hva som hadde skjedd.»
> — Lars Kjetil Skeie, tillitsvalgt ved Hydros fabrikk i Høyanger (E24)

## De første dagene

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TIDSLINJE FØRSTE UKE                             │
├─────────────────────────────────────────────────────────────────────┤
│ 19. mars (dag 1)   │ Angrep oppdaget, børsmelding, pressekonferanse │
│                    │ Microsoft DART-team varsles                     │
│                    │ Fabrikker går over til manuell drift           │
│ 20. mars (dag 2)   │ Årsak identifisert, «kur» utvikles             │
│                    │ Microsoft-eksperter flyr inn til Oslo          │
│ 21. mars (dag 3)   │ Extruded Solutions på 50% kapasitet            │
│                    │ Pensjonister kalles tilbake                     │
│ 26. mars (dag 7)   │ Pressekonferanse: 300-350 MNOK tap første uke  │
│                    │ Extruded Solutions på 70-80% kapasitet         │
│ 5. april (uke 2.5) │ Nær normal produksjon, administrative forsink. │
│ Mai/Juni 2019      │ Mesteparten gjenopprettet                      │
│ Høst 2019          │ Full normal drift                              │
└─────────────────────────────────────────────────────────────────────┘
```

---

# DEL 3: TEKNISK FORKLARING

## Hva er LockerGoga?

LockerGoga er et løsepengevirus (ransomware) som først ble oppdaget i januar 2019. Det ble brukt mot det franske konsulentselskapet Altran Technologies før det rammet Hydro.

**For vanlige lesere:** Tenk på det som en digital kidnapper. Viruset låser alle filene dine med en hemmelig kode, og hackerne krever betaling for å gi deg koden tilbake.

## Hvordan viruset fungerer

```
┌─────────────────────────────────────────────────────────────────────┐
│                 LOCKERGOGAS ANGREPSPROSESS                          │
├─────────────────────────────────────────────────────────────────────┤
│ STEG 1: INNTRENGNING                                                │
│ • Infisert e-postvedlegg fra betrodd avsender                       │
│ • Trojanerprogramvare installeres                                   │
│                                                                     │
│ STEG 2: LATERAL BEVEGELSE (3 måneder)                               │
│ • Hackerne kartlegger nettverket                                    │
│ • Fanger vanlige brukerlegitimasjoner                               │
│ • Eskalerer til administratorrettigheter                            │
│                                                                     │
│ STEG 3: DOMAIN ADMIN-TILGANG                                        │
│ • Får kontroll over Active Directory                                │
│ • Kan nå alle maskiner i nettverket                                 │
│                                                                     │
│ STEG 4: RANSOMWARE-UTRULLING                                        │
│ • Bruker Hydros egne systemer mot dem                               │
│ • GPO (Group Policy Object) tvinger oppdatering                     │
│ • Viruset distribueres til alle tilkoblede maskiner                 │
│                                                                     │
│ STEG 5: KRYPTERING                                                  │
│ • Krypterer filer med RSA-4096 og AES-256                           │
│ • Endrer passord på brukerkontoer                                   │
│ • Logger ut alle brukere                                            │
│ • Legger igjen løsepengebrev                                        │
└─────────────────────────────────────────────────────────────────────┘
```

## Løsepengebrevet

> «Greetings! Your files have been encrypted with the strongest military algorithms... We exclusively have decryption software for your situation... The final price depends on how fast you contact us.»
> — Utdrag fra løsepengebrevet (Microsoft Source)

## Hvorfor LockerGoga var spesielt farlig

| Egenskap | Forklaring |
|----------|------------|
| Signert kode | Brukte gyldige sertifikater fra Sectigo, noe som lurte sikkerhetsprogrammer |
| Ingen nettverkskommunikasjon | Ingen Command & Control-server, vanskelig å spore |
| Manuell distribusjon | Krevde menneskelig operatør med admin-tilgang |
| Passordendring | Låste brukere ute ved å endre passordene deres |
| Sletting av sikkerhetskopier | Forsøkte å ødelegge lokale backups |

## Angrepets omfang

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    TALLDATA: ANGREPETS OMFANG                         ║
╠═══════════════════════════════════════════════════════════════════════╣
║ Antall berørte datamaskiner           │ 22.000 PC-er og servere       ║
║ Antall berørte anlegg                 │ 170 steder                    ║
║ Antall berørte land                   │ 40 land                       ║
║ Antall berørte ansatte                │ 35.000 personer               ║
║ Antall kontinenter                    │ 5 kontinenter                 ║
║ Forretningsområder påvirket           │ Alle (5 hovedområder)         ║
╚═══════════════════════════════════════════════════════════════════════╝
```

## Hvordan Hydro isolerte angrepet

Hydros IT-avdeling handlet raskt for å begrense skaden:

1. **Umiddelbar nedstenging** – Alle nettverkstilkoblinger ble kuttet for å hindre videre spredning
2. **Isolering av anlegg** – Hvert anlegg ble isolert fra de andre
3. **Kommunikasjon via mobiltelefoner** – E-post til Office 365 i skyen fungerte fortsatt
4. **Manuelle varsler** – Ledere skrev plakater for hånd og sendte bilder via SMS

> «Please do not connect any devices to the Hydro network. Do not turn on any devices connected to the Hydro network. Please disconnect devices from the Hydro network.»
> — Håndskrevet varselplakat (Microsoft Source)

---

# DEL 4: MENNESKELIGE HISTORIER

## «Dino-Star» – Teknologipessimisten som ble helt

Jan Verslyppe, en selger med 35 års erfaring i Hydro, hadde alltid vært skeptisk til datamaskiner. Han var kjent for å printe ut viktige dokumenter og lagre dem i et stort skap på kontoret – noe kollegene pleide å le av.

Kort tid før angrepet hadde Verslyppe printet ut hele ordreboken for aluminiumsrør ved fabrikken i Lichtervelde, Belgia. Disse utskriftene gjorde at fabrikken på rekordtid kunne legge om til manuelle løsninger.

> «Ingen ler av papirarkivene etter dataangrepet.»
> — NRK (11. april 2019)

Verslyppe fikk kallenavnet «Dino-star» på et allmøte etter angrepet.

## De eldre ansatte reddet dagen

> «Vi har heldigvis ansatte som husker hvordan man skal håndtere produksjonen manuelt. De ble våre helter. De fant fram skriftlige manualer, slik at vi fikk mer oversikt og klarte å drifte smelteverkene uten stans.»
> — Hilde Merete Aasheim, konsernsjef (TU.no)

Pensjonister ble hentet tilbake til fabrikkene med mobiltelefon. De eldre arbeiderne, som hadde startet karrieren før alt ble digitalisert, kunne vise de yngre hvordan man styrte produksjonen uten datamaskiner.

> «Ja, det var de gamle ulvene som husket hvordan det ble gjort i gamle dager.»
> — Ansatt ved Hydro-fabrikken i Høyanger (Swimlane)

## Svarte skjermer og papirkaos

> «Alle Hydro-ansatte ble møtt av svarte skjermer da de møtte på jobb morgenen 19. mars 2019.»
> — Hydro (Hydro.com)

Ansatte i Storbritannia måtte betjene kunder via faks og Facebook. Tekniske avdelinger brukte blyant og papir for å lage planer og diagrammer.

## Den nye konsernsjefen

Hilde Merete Aasheim ble utnevnt som ny konsernsjef 18. mars 2019 – dagen FØR angrepet. Da hun la seg den kvelden, sjekket hun mediene for å se reaksjonene på utnevnelsen. Seks timer senere ble hun vekket.

> «Klokka 04 ble hun vekket av mobiltelefonen hjemme i Voksenlia. En kollega sa: 'Vi er utsatt for et kraftig cyberangrep og dette er ingen øvelse!'»
> — TU.no

Aasheim tok raskeste vei til hovedkontoret og etablerte krisesenter klokken 05:00.

## Smelteverkenes utfordring

Aluminiumssmelting krever enorme mengder elektrisitet og kontinuerlig drift. Smeltemasser holder nesten 1000 grader, og en ukontrollert stopp kan ødelegge utstyret permanent.

> «Vi måtte operere manuelt og det er som kjent svært krevende når man skal håndtere smeltemasser på nesten tusen varmegrader i elektrolysecellene.»
> — Hilde Merete Aasheim (TU.no)

---

# DEL 5: ØKONOMISKE KONSEKVENSER

## Kostnadsutvikling over tid

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    TALLDATA: ØKONOMISK PÅVIRKNING                     ║
╠═══════════════════════════════════════════════════════════════════════╣
║ TIDSPUNKT              │ ESTIMERT KOSTNAD                             ║
╠═══════════════════════════════════════════════════════════════════════╣
║ Første uke (26. mars)  │ 300-350 millioner NOK                        ║
║ Første kvartal         │ 400-450 millioner NOK                        ║
║ Andre kvartal          │ 250-300 millioner NOK (tillegg)              ║
║ Første halvår 2019     │ 550-650 millioner NOK                        ║
║ Endelig kostnad        │ ~800 millioner NOK                           ║
╠═══════════════════════════════════════════════════════════════════════╣
║ I USD                  │ ~75-80 millioner USD                         ║
║ Forsikringsutbetaling  │ 780 millioner NOK                            ║
╚═══════════════════════════════════════════════════════════════════════╝
```

## Kostnadene fordelt

| Kategori | Beskrivelse |
|----------|-------------|
| Tapte marginer | Redusert produksjon i Extruded Solutions |
| Tapte volumer | Lavere salg – fra 362.000 til 333.000 tonn i Q1 |
| Overtid og ekstra arbeidskraft | Manuell drift krevde flere folk |
| IT-gjenoppretting | Microsoft DART, nye systemer, sikkerhetstiltak |
| Konsulenter | Eksterne sikkerhetskonsulenter |
| Forsinkede fakturaer | Administrative systemer nede i uker |

## Markedspåvirkning

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    TALLDATA: MARKEDSREAKSJON                          ║
╠═══════════════════════════════════════════════════════════════════════╣
║ Aluminiumpris 19. mars │ +1,2% til 3-måneders høyeste ($1.944/tonn)   ║
║ Hydro-aksjen ved åpning│ -3,4%                                        ║
║ Hydro-aksjen kl. 14:38 │ -0,8% (delvis gjenhentet)                    ║
║ Markedsverdi (senere)  │ 87% av nivå før angrepet                     ║
╚═══════════════════════════════════════════════════════════════════════╝
```

> «This is the first time I can recall a cyber attack impacting the spot price of a global commodity like aluminum. That alone is pretty significant.»
> — Tod Beardsley, Research Director, Rapid7 (Security Ledger)

## Produksjonskapasitet under angrepet

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    TALLDATA: PRODUKSJONSSTATUS                        ║
╠═══════════════════════════════════════════════════════════════════════╣
║ FORRETNINGSOMRÅDE       │ DAG 3      │ DAG 7      │ UKE 2.5          ║
╠═══════════════════════════════════════════════════════════════════════╣
║ Energy                  │ Normal     │ Normal     │ Normal           ║
║ Bauxite & Alumina       │ Normal     │ Normal     │ Normal           ║
║ Primary Metal           │ Manuell    │ Manuell    │ Normal*          ║
║ Rolled Products         │ Utfordr.   │ Normal*    │ Normal           ║
║ Extruded Solutions      │ 50%        │ 70-80%     │ ~90%             ║
║ Building Systems        │ Stopp      │ Stopp      │ 80%              ║
╠═══════════════════════════════════════════════════════════════════════╣
║ * = med høyere grad av manuell drift                                  ║
╚═══════════════════════════════════════════════════════════════════════╝
```

## Hardest rammede norske fabrikker

- **Holmestrand** – Valsede produkter
- **Karmøy** – Valsede produkter
- **Høyanger** – Aluminiumsverk (manuell drift)

---

# DEL 6: GJENOPPRETTING OG FREMTID

## Hydros tre raske beslutninger

Ved krisemøtet morgenen 19. mars tok Hydro-ledelsen tre avgjørende beslutninger:

1. **Ingen løsepenger** – De ville ikke betale hackerne
2. **Profesjonell hjelp** – Microsoft DART-teamet ble tilkalt
3. **Full åpenhet** – Alt skulle kommuniseres åpent

> «Norsk Hydro set the example for the industry in this incident. Choosing not to pay the ransom and digging in with DART to evict the attacker is great. Sharing those learnings with the world is priceless.»
> — Eric Doerr, General Manager, Microsoft Security Response Center (Microsoft Source)

## Microsoft DART-responsen

Microsoft Detection and Response Team (DART) ble utpekt som «maximum severity» og sendte eksperter til:
- Oslo, Norge (hovedkontor)
- Ungarn (en av de største fabrikkene)

> «With our guidance, Norsk Hydro was able to mitigate the mechanism by which the attacker was able to launch the attack.»
> — Jim Moeller, DART-medlem (Microsoft Source)

DART-medlemmet Jim Moeller tilbrakte tre uker i Ungarn for å hjelpe med gjenopprettingen.

## Gjenopprettingsprosessen

```
┌─────────────────────────────────────────────────────────────────────┐
│                    GJENOPPRETTINGSSTEG                              │
├─────────────────────────────────────────────────────────────────────┤
│ 1. Isolere alle systemer for å stoppe spredning                     │
│ 2. Identifisere virusets virkemåte                                  │
│ 3. Utvikle «kur» mot viruset                                        │
│ 4. Gjennomgå alle 22.000 PC-er og servere                           │
│ 5. Fjerne skadevare fra infiserte systemer                          │
│ 6. Gjenopprette krypterte maskiner fra backup                       │
│ 7. Gradvis gjenåpne nettverket                                      │
│ 8. Implementere nye sikkerhetstiltak                                │
└─────────────────────────────────────────────────────────────────────┘
```

## Kommunikasjonsstrategi

Hydros åpenhet ble lagt merke til verden over:

- **Daglige pressekonferanser** på hovedkontoret i Oslo
- **Daglige webcasts** med toppledelse som svarte på spørsmål
- **Facebook-oppdateringer** (e-post var nede)
- **Ny midlertidig nettside** lansert i løpet av første uke
- **Journalister velkommet** inn i kontrollrom

> «We wanted to help other industries learn from our experience. This way, they can be better prepared for situations like this.»
> — Halvor Molland, SVP Media Relations (Microsoft Source)

## Priser og anerkjennelse

- **Åpenhetsprisen 2019** – Kommunikasjonsforeningen
- **Adam Smith Award 2020** – Best Cybersecurity Solution
- **«Gold Standard»** – BBC og sikkerhetsindustrien

> «Hydro's response to the incident is being described as 'the gold standard' by law enforcement organisations and the information security industry.»
> — BBC (via J.P. Morgan)

## Etterforskning og arrestasjoner

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    TIDSLINJE: ETTERFORSKNING                          ║
╠═══════════════════════════════════════════════════════════════════════╣
║ Mars 2019          │ Kripos starter etterforskning                    ║
║ Oktober 2021       │ Første aksjon i Ukraina og Sveits               ║
║                    │ 12 personer målrettet, beslag av biler og penger ║
║ August 2023        │ Armensk statsborger pågrepet i Tyskland         ║
║ Oktober 2023       │ Utlevering til Norge, varetektsfengslet         ║
║ November 2023      │ Ny storaksjon i Kyiv, hovedmann pågrepet        ║
╚═══════════════════════════════════════════════════════════════════════╝
```

> «Da vi startet i 2019 var det mange som mente det var umulig å løse slike saker. Denne etterforskningen har tydelig vist det motsatte.»
> — Politiadvokat Knut Jostein Sætnan, Kripos (Politiet.no)

Det organiserte kriminelle nettverket hadde totalt angrepet over **1.800 virksomheter i 71 land**. I tillegg til LockerGoga brukte gruppen skadevare som MegaCortex, Dharma og Ryuk.

## Sikkerhetstiltak etter angrepet

Hydro implementerte flere nye tiltak:

- Reorganisert sikkerhetsteam for bedre deteksjon og respons
- Ny teknologi for å oppdage unormal trafikk
- Forbedrede backup-rutiner
- Styrket opplæring av ansatte mot phishing
- Forbedret nødprosedyrer

> «If hackers want to get in, they will get in. We now have an improved incident response to make sure that – should something similar happen – we are much better equipped to limit the damage in time and geography.»
> — Jo De Vliegher, CIO Norsk Hydro (Microsoft Source)

---

# DEL 7: NØKKELTALL FOR VISUALISERING

## Grafdata – Tidslinje

```json
{
  "tidslinje_dager": [
    {"dag": 0, "hendelse": "Angrep starter", "dato": "2019-03-18T23:00:00"},
    {"dag": 1, "hendelse": "Oppdaget, pressekonferanse", "dato": "2019-03-19"},
    {"dag": 3, "hendelse": "50% kapasitet", "dato": "2019-03-21"},
    {"dag": 7, "hendelse": "70-80% kapasitet", "dato": "2019-03-26"},
    {"dag": 17, "hendelse": "Nær normal", "dato": "2019-04-05"},
    {"dag": 90, "hendelse": "Full gjenoppretting", "dato": "2019-06-xx"}
  ]
}
```

## Grafdata – Kostnader

```json
{
  "kostnader_utvikling": [
    {"tidspunkt": "Uke 1", "kostnad_mnok": 325, "label": "300-350 MNOK"},
    {"tidspunkt": "Q1 2019", "kostnad_mnok": 425, "label": "400-450 MNOK"},
    {"tidspunkt": "Q2 2019", "kostnad_mnok": 600, "label": "550-650 MNOK"},
    {"tidspunkt": "Endelig", "kostnad_mnok": 800, "label": "~800 MNOK"}
  ]
}
```

## Grafdata – Produksjonskapasitet

```json
{
  "produksjon_extruded": [
    {"dag": 1, "kapasitet_prosent": 0, "label": "Stopp"},
    {"dag": 3, "kapasitet_prosent": 50, "label": "50%"},
    {"dag": 7, "kapasitet_prosent": 75, "label": "70-80%"},
    {"dag": 17, "kapasitet_prosent": 90, "label": "~90%"},
    {"dag": 60, "kapasitet_prosent": 100, "label": "Normal"}
  ]
}
```

## Grafdata – Omfang

```json
{
  "omfang_tall": {
    "datamaskiner": 22000,
    "anlegg": 170,
    "land": 40,
    "ansatte": 35000,
    "kontinenter": 5,
    "kostnad_mnok": 800,
    "forsikring_mnok": 780
  }
}
```

---

# DEL 8: DIREKTE SITATER

## Fra Hydro-ledelsen

> «Situasjonen til Hydro gjennom dette er veldig alvorlig. Hele det verdensomspennende nettet tilhørende Hydro er nede, dette påvirker vår produksjon samt vårt kontorarbeid.»
> — Eivind Kallevik, CFO (Pressekonferanse 19. mars 2019)

> «This is a classic ransomware attack. The situation is quite severe.»
> — Eivind Kallevik, CFO (Pressekonferanse 19. mars 2019)

> «We have good back-up systems and we have plans on how to restore it.»
> — Eivind Kallevik, CFO (Reuters)

> «There was never the option to pay any ransom.»
> — Hilde Merete Aasheim, CEO (TIME)

> «We did our utmost to keep the customer out of a difficult situation.»
> — Hilde Merete Aasheim, CEO (TIME)

## Fra sikkerhetsmyndigheter

> «NorCERT warns that Hydro is exposed to a LockerGoga attack. The attack was combined with an attack on Active Directory.»
> — NorCERT-varsel (NRK)

> «Det er en krypteringsvirus vi har sett brukt før i Europa.»
> — Håkon Bergsjø, leder NorCERT (NRK)

> «Samarbeidet med Hydro er et eksempel til etterfølgelse for norske bedrifter som måtte rammes av et stort dataangrep. Åpenheten til Hydro har gitt politiet muligheter vi ikke har hatt tidligere.»
> — Knut Jostein Sætnan, Politiadvokat Kripos (DN)

## Fra sikkerhetseksperter

> «This is not amateur work. It is one of the few ransomware programs that is designed to stay hidden. It hides and actively tries to avoid detection. That is rare.»
> — Rik Ferguson, Vice President, Trend Micro (NRK)

> «If you cripple the ability to operate an industrial environment, you're costing that enterprise significant amounts of money and really applying pressure for every minute that loss of control continues.»
> — Joe Slowik, Dragos (Wired)

> «Hydro started the best incident representation response plan I've ever seen.»
> — Kevin Beaumont, Cybersecurity Expert (SecurityWeek)

---

# DEL 9: KILDELISTE

## Norske medier

1. **NRK** – «Slik fungerer løsepengeviruset som rammet Hydro» (13. april 2019)
   https://www.nrk.no/norge/slik-fungerer-losepengeviruset-som-rammet-hydro-1.14481782

2. **NRK** – «Teknologipessimist ble helt etter dataangrep» (11. april 2019)
   https://www.nrk.no/norge/teknologipessimist-ble-helt-etter-dataangrep-1.14509963

3. **NRK** – «Hydro-hacking kan ha kostet 350 millioner» (26. mars 2019)
   https://www.nrk.no/norge/hydro-hacking-kan-ha-kostet-350-millioner-1.14491443

4. **Dagens Næringsliv** – «Hackerangrepet mot Hydro enda dyrere enn tidligere antatt» (23. oktober 2020)
   https://www.dn.no/bors/hydro/brasil/norsk-hydro/hackerangrepet-mot-hydro-enda-dyrere-enn-tidligere-antatt-ny-prislapp-pa-800-millioner-kroner/2-1-898620

5. **Dagens Næringsliv** – «Kripos vet fortsatt ikke hvem som står bak» (21. august 2019)
   https://www.dn.no/marked/hydro/kripos/knut-jostein-satnan/kripos-vet-fortsatt-ikke-hvem-som-star-bak-hydro-angrepet/2-1-656927

6. **Aftenposten** – «Dataangrepet kostet Hydro 800 millioner kroner» (29. oktober 2021)
   https://www.aftenposten.no/norge/i/47WR3o/dataangrepet-kostet-hydro-800-millioner-kroner-naa-er-det-kriminelle-nettverket-avdekket

7. **E24** – «Vi måtte gå tilbake til penn, papir og kalkulator» (19. mars 2019)
   https://e24.no/boers-og-finans/i/6nmawo/

8. **TU.no (Teknisk Ukeblad)** – «Vi har heldigvis ansatte som husker...» (17. november 2019)
   https://www.tu.no/artikler/vi-har-heldigvis-ansatte-som-husker-hvordan-man-skal-handtere-produksjonen-manuelt-de-ble-vare-helter/479110

9. **TU.no** – «Stans i produksjon: Hydro utsatt for stort dataangrep» (19. mars 2019)
   https://www.tu.no/artikler/hydro-utsatt-for-stort-cyberangrep/460733

10. **VG** – «Kripos med på storaksjon i Ukraina» (28. november 2023)
    https://www.vg.no/nyheter/i/dwA3do/kripos-med-paa-storaksjon-i-ukraina-hackerliga-tatt-etter-hydro-angrep

## Offisielle kilder

11. **Hydro.com** – «Cyberangrep på Hydro» (offisiell side)
    https://www.hydro.com/no-NO/media/pa-dagsorden/cyberangrep-pa-hydro/

12. **Hydro.com** – «Oppdatering på cyber-angrep 21. mars»
    https://www.hydro.com/no-NO/media/news/2019/oppdatering-pa-cyber-angrep-21-mars/

13. **Hydro.com** – «Update on cyber attack March 26»
    https://www.hydro.com/en/global/media/news/2019/update-on-cyber-attack-march-26/

14. **Hydro.com** – «Hydro tildeles pris for åpenhet etter cyberangrep»
    https://www.hydro.com/no-NO/media/news/2019/hydro-tildeles-pris-for-apenhet-etter-cyberangrep/

15. **Politiet.no** – «Kripos: Flere personer i kriminelt nettverk pågrepet» (26. november 2023)
    https://www.politiet.no/en/aktuelt-tall-og-fakta/aktuelt/news/2023/11/26/kripos-flere-personer-i-kriminelt-nettverk-pagrepet/

## Internasjonale medier og tekniske kilder

16. **Microsoft Source** – «Hackers hit Norsk Hydro with ransomware» (desember 2019)
    https://news.microsoft.com/source/features/digital-transformation/hackers-hit-norsk-hydro-ransomware-company-responded-transparency/

17. **Reuters** – «Aluminium producer Hydro hit by cyber attack» (19. mars 2019)
    Via CNBC: https://www.cnbc.com/2019/03/19/reuters-america-update-7-aluminium-producer-hydro-hit-by-cyber-attack-shuts-some-plants.html

18. **BBC** – Referert i flere kilder som «gold standard»-beskrivelse

19. **Bleeping Computer** – «LockerGoga Ransomware Sends Norsk Hydro Into Manual Mode» (22. mars 2019)
    https://www.bleepingcomputer.com/news/security/lockergoga-ransomware-sends-norsk-hydro-into-manual-mode/

20. **TechCrunch** – «Europol detains hackers behind 2019 Norsk Hydro ransomware attack» (29. oktober 2021)
    https://techcrunch.com/2021/10/29/europol-hackers-norsk-hydro/

21. **TIME** – «How One Company Refused to Let Its Cyberattackers Win» (14. juli 2021)
    https://time.com/6080293/norsk-hydro-ransomware-attack/

22. **J.P. Morgan** – «Follow Norsk Hydro's gold standard response»
    https://www.jpmorgan.com/insights/treasury/treasury-management/norsk-hydros-gold-standard-response

23. **SecurityWeek** – «Industry Reactions to Norsk Hydro Breach»
    https://www.securityweek.com/industry-reactions-norsk-hydro-breach-feedback-friday/

24. **Help Net Security** – «Norsk Hydro cyber attack: What happened?» (20. mars 2019)
    https://www.helpnetsecurity.com/2019/03/20/norsk-hydro-cyber-attack/

25. **Nozomi Networks** – «Breaking Research: LockerGoga Ransomware Impacts Norsk Hydro»
    https://www.nozominetworks.com/blog/breaking-research-lockergoga-ransomware-impacts-norsk-hydro

26. **Control Engineering** – «Throwback Attack: Norsk Hydro gets hit by LockerGoga» (januar 2025)
    https://www.controleng.com/throwback-attack-norsk-hydro-gets-hit-by-lockergoga-ransomware/

27. **Swimlane** – «The Norsk Hydro Lockergoga Ransomware Cyber Attacks»
    https://swimlane.com/blog/norsk-hydro-ransomware-attack/

28. **MITRE/DTIC** – «Cyber Risk to Mission Case Study: Norsk Hydro»
    https://apps.dtic.mil/sti/trecms/pdf/AD1183007.pdf

---

# DEL 10: OVERSIKT OVER ALLE FUNN

## Nøkkelfunn oppsummert

| Kategori | Funn |
|----------|------|
| **Angrepets opprinnelse** | Infisert e-post fra betrodd kunde, desember 2018 |
| **Oppdagelsestidspunkt** | Ca. kl. 00:00 CET, 19. mars 2019 |
| **Første symptomer** | Fabrikk i USA |
| **Virus** | LockerGoga ransomware |
| **Spredningsmetode** | Via Active Directory og GPO |
| **Omfang** | 22.000 maskiner, 170 anlegg, 40 land |
| **Løsepenger** | Krevet i Bitcoin, beløp ukjent, ikke betalt |
| **Total kostnad** | ~800 millioner NOK |
| **Forsikring** | 780 millioner NOK utbetalt (AIG lead) |
| **Gjenopprettingstid** | Flere måneder for full normal drift |
| **Hardest rammet** | Extruded Solutions (ekstrudering) |
| **Kommunikasjonsstrategi** | Full åpenhet, daglige pressekonferanser |
| **Anerkjennelse** | «Gold standard» (BBC), Åpenhetsprisen 2019 |
| **Etterforskning** | Kripos, Europol – arrestasjoner i 2021 og 2023 |
| **Bakmenn** | Organisert kriminelt nettverk (Ukraina/Sveits) |
| **Andre ofre** | Altran, Hexion, Momentive + 1800 virksomheter |

---

*Rapport utarbeidet: November 2025*
*Kilder: 28 åpne, verifiserbare kilder*
*Format: Norsk Markdown med tall-data for scrollytelling-visualisering*
