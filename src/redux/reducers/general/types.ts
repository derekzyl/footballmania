export interface GeneralState {
  allTeams: Team[];
  allCountries: Country[];
}

export enum GeneralActions {
  UPDATE_ALL_TEAMS = 'UPDATE_ALL_TEAMS',
  UPDATE_ALL_COUNTRIES = 'UPDATE_ALL_COUNTRIES',
}

export interface Team {
  name: string;
  logo?: string;
  code: string;
}

export interface Country {
  name: string;
  logo?: string;
  code: string;
}
