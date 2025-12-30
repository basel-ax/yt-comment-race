export interface GameConfig {
  youtubeUrl: string;
  apiKey: string;
  selectedCountries: string[];
}

export interface Car {
  countryCode: string;
  position: number;
}