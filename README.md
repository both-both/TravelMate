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

1. Sprog vælges i forespørgslen. GROQ henter Info-dokumentet på sproget `$lang`, så komponenterne får en almindelig tekst (se [Flere sprog](#flere-sprog)).
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

## Flere sprog

TravelMate viser lande, byer og seværdigheder på dansk, engelsk og spansk. Brugeren skifter sprog i headeren.

```
Language → Info-modeller → GROQ → React → Sprogskift
```

Sanity-schemaet ligger i et separat repo: [travelmate-sanity-cms](https://github.com/both-both/travelmate-sanity-cms).

### Content model

```
Country    ← CountryInfo    → Language
City       ← CityInfo       → Language
Attraction ← AttractionInfo → Language
```

| Model                                         | Felter                                                                       |
| --------------------------------------------- | ---------------------------------------------------------------------------- |
| `language`                                    | `name` (Dansk), `code` (da)                                                  |
| `country`                                     | `code`, `slug`, `image`                                                      |
| `city`                                        | `slug`, `country` (reference), `image`                                       |
| `attraction`                                  | `slug`, `city` (reference), `image`, `location`, `address`, `website`        |
| `countryInfo` / `cityInfo` / `attractionInfo` | reference til hovedmodellen, reference til `language`, `name`, `description` |

Felter, der er ens på alle sprog, ligger på hovedmodellen. Kun `name` og `description` afhænger af sproget og ligger i Info-modellerne. `slug` er ens på alle sprog, så en URL som `/countries/france` virker uanset det valgte sprog.

### Oversættelse

De oversatte tekster lå i forvejen på hovedmodellerne. `scripts/migrateInfo.ts` i CMS-repoet flyttede dem over i 93 Info-dokumenter (31 dokumenter × 3 sprog) med de rigtige referencer. `scripts/removeOldFields.ts` fjernede derefter de gamle felter. Begge scripts har kørt én gang og skal ikke køres igen.

### GROQ

Info-dokumentet på det valgte sprog hentes og spredes ind i resultatet med `...`:

```groq
*[_type == "country"]{
  _id,
  "slug": slug.current,
  code,
  "image": image.asset->url,
  ...*[_type == "countryInfo" && country._ref == ^._id && language->code == $lang][0]{ name, description }
} | order(name asc)
```

- `country._ref == ^._id` finder Info-dokumenterne for det aktuelle land.
- `language->code == $lang` vælger sproget.
- `...{ name, description }` lægger felterne direkte på landet, så komponenterne får `name` og `description` som før.
- `order(name asc)` står efter projektionen, så der sorteres på navnet i det valgte sprog.

Indlejrede relationer, som byens land, henter deres navn på samme måde.

### Sprogskift i React

| Fil                               | Ansvar                                                    |
| --------------------------------- | --------------------------------------------------------- |
| `src/context/LanguageContext/`    | Holder det valgte sprog                                   |
| `src/hooks/useLanguages.ts`       | Henter de tilgængelige sprog fra Sanity                   |
| `src/components/layout/Header/`   | Sprogvælgeren. Valgmulighederne kommer fra `useLanguages` |
| `src/hooks/useCountries.ts` m.fl. | Sender sproget med som `$lang`                            |

Når sproget skifter, ændres `$lang`. `useSanityQuery` henter så data igen, og alle lister og detaljesider vises på det nye sprog.

### Et nyt sprog (bonus)

Spansk er tilføjet som tredje sprog. Fordi sprogvælgeren henter sprogene fra Sanity, kræver et nyt sprog ingen ændringer i React:

1. Opret et `language`-dokument, fx `Deutsch` / `de`.
2. Opret Info-dokumenter med oversatte tekster for lande, byer og seværdigheder.
