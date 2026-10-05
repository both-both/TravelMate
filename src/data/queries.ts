// Felter der hentes for hver type. $lang vælger sproget, .en er reserve.
const countryFields = `
  _id,
  "slug": slug.current,
  code,
  "name": coalesce(name[$lang], name.en),
  "description": coalesce(description[$lang], description.en),
  "image": image.asset->url
`;

const cityFields = `
  _id,
  "slug": slug.current,
  "name": coalesce(name[$lang], name.en),
  "description": coalesce(description[$lang], description.en),
  "image": image.asset->url,
  "country": country->{ _id, "slug": slug.current, code, "name": coalesce(name[$lang], name.en) }
`;

const attractionFields = `
  _id,
  "slug": slug.current,
  "name": coalesce(name[$lang], name.en),
  "description": coalesce(description[$lang], description.en),
  "image": image.asset->url,
  address,
  website,
  location,
  "city": city->{ _id, "slug": slug.current, "name": coalesce(name[$lang], name.en) }
`;

export const countriesQuery = `*[_type == "country"] | order(name[$lang] asc){ ${countryFields} }`;

export const countryQuery = `*[_type == "country" && slug.current == $slug][0]{
  ${countryFields},
  "cities": *[_type == "city" && references(^._id)] | order(name[$lang] asc){ ${cityFields} }
}`;

export const citiesQuery = `*[_type == "city"] | order(name[$lang] asc){ ${cityFields} }`;

export const cityQuery = `*[_type == "city" && slug.current == $slug][0]{
  ${cityFields},
  "attractions": *[_type == "attraction" && references(^._id)] | order(name[$lang] asc){ ${attractionFields} }
}`;

export const attractionsQuery = `*[_type == "attraction"] | order(name[$lang] asc){ ${attractionFields} }`;

export const attractionQuery = `*[_type == "attraction" && slug.current == $slug][0]{ ${attractionFields} }`;
