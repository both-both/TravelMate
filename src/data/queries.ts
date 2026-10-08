// Felter der hentes for hver type. Navn og beskrivelse hentes fra Info-dokumentet på sproget $lang.
const countryFields = `
  _id,
  "slug": slug.current,
  code,
  "image": image.asset->url,
  ...*[_type == "countryInfo" && country._ref == ^._id && language->code == $lang][0]{ name, description }
`;

const cityFields = `
  _id,
  "slug": slug.current,
  "image": image.asset->url,
  ...*[_type == "cityInfo" && city._ref == ^._id && language->code == $lang][0]{ name, description },
  "country": country->{
    _id,
    "slug": slug.current,
    code,
    "name": *[_type == "countryInfo" && country._ref == ^._id && language->code == $lang][0].name
  }
`;

const attractionFields = `
  _id,
  "slug": slug.current,
  "image": image.asset->url,
  address,
  website,
  location,
  ...*[_type == "attractionInfo" && attraction._ref == ^._id && language->code == $lang][0]{ name, description },
  "city": city->{
    _id,
    "slug": slug.current,
    "name": *[_type == "cityInfo" && city._ref == ^._id && language->code == $lang][0].name
  }
`;

export const countriesQuery = `*[_type == "country"]{ ${countryFields} } | order(name asc)`;

export const countryQuery = `*[_type == "country" && slug.current == $slug][0]{
  ${countryFields},
  "cities": *[_type == "city" && references(^._id)]{ ${cityFields} } | order(name asc)
}`;

export const citiesQuery = `*[_type == "city"]{ ${cityFields} } | order(name asc)`;

export const cityQuery = `*[_type == "city" && slug.current == $slug][0]{
  ${cityFields},
 "attractions": *[_type == "attraction" && references(^._id)]{ ${attractionFields} } | order(name asc)
}`;

export const attractionsQuery = `*[_type == "attraction"]{ ${attractionFields} } | order(name asc)`;

export const attractionQuery = `*[_type == "attraction" && slug.current == $slug][0]{ ${attractionFields} }`;

export const languagesQuery = `*[_type == "language"] | order(name asc){ code, name }`;
