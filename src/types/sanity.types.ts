export interface Country {
  _id: string;
  slug: string;
  code: string;
  name: string;
  description: string;
  image: string;
}

export interface City {
  _id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  country: Pick<Country, "_id" | "slug" | "code" | "name">;
}

export interface Attraction {
  _id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  address: string;
  website: string;
  location: { lat: number; lng: number };
  city: Pick<City, "_id" | "slug" | "name">;
}

export interface CountryDetail extends Country {
  cities: City[];
}

export interface CityDetail extends City {
  attractions: Attraction[];
}
