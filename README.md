# TravelMate – Fra CMS til React

TravelMate viser lande, byer og seværdigheder. Alt indhold hentes fra Sanity CMS (projekt `hk5md3yk`, dataset `production`).

## Kom i gang

```bash
npm install
npm run dev
```

`.env` skal indeholde:

```
VITE_SANITY_PROJECT_ID=hk5md3yk
VITE_SANITY_DATASET=production
```

## GROQ eller GraphQL

Jeg har valgt GROQ.

1. Sprog vælges i forespørgslen. Teksterne ligger i Sanity som `{ da, en, es }`. Med `name[$lang]` returnerer GROQ kun det valgte sprog, så komponenterne får en almindelig tekst.
2. Relationer i ét kald. `country->` henter byens land, og `*[_type == "attraction" && references(^._id)]` henter byens seværdigheder i samme forespørgsel.
3. Har valgt GROQ da der er ingen ekstra deploy. GROQ virker direkte på datasettet.
4. Kan testes i Postman og Vision med samme forespørgsel, som frontenden bruger.

## Organisering af API-kald

```
Sanity → GROQ (queries.ts) → useSanityQuery → useCountries / useCities / useAttractions → page → module → bruger
```

| Fil                               | Ansvar                                                                                                             |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `src/data/queries.ts`             | Alle GROQ-forespørgsler. Felterne for hver type er defineret én gang og genbruges                                  |
| `src/hooks/useSanityQuery.ts`     | Generelt hook. Bygger URL'en med `encodeURIComponent`, kalder `fetch` og håndterer loading, fejl og forældede svar |
| `src/hooks/useCountries.ts` m.fl. | Specifikke hooks. Henter sproget fra `LanguageContext` og sender det med som `$lang`                               |
| `src/types/sanity.types.ts`       | Typer, der svarer til det, forespørgslerne returnerer                                                              |
| `src/pages/`                      | Læser `slug` fra URL'en, kalder hooket og viser loading og fejl                                                    |
| `src/components/modules/`         | Viser data. Lister henter selv via hooks, detaljemoduler får data som props                                        |

Pages og komponenter kalder aldrig `fetch` direkte.

## Relationer (bonus)

- **By** viser sit land (link) og sine seværdigheder.
- **Land** viser sine byer.
- **Seværdighed** viser sin by (link) og et kort ud fra koordinaterne.

## Data

Indholdet er flyttet fra mit tidligere Express/SQLite-API til Sanity med et eksportscript (Prisma → NDJSON) og `sanity dataset import`. Ændres en tekst i Sanity Studio, vises ændringen i TravelMate, når siden genindlæses.
