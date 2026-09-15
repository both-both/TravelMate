export interface ApiListResponse<T> {
  data: T[];
}

export interface Language {
  id: number;
  code: string;
  name: string;
}
export interface TravelItem {
  id: string | number;
  image: string;
  infos: Info[];
}

export interface Country extends TravelItem {
  code: string;
}

export type Info = {
  name: string;
  id: number;
  languageId: number;
  description: string;
  language: { code: string; name: string };
};

export type City = {
  id: number;
  countryId: number;
  slug: string;
  image: string;
  infos: Info[];
};
