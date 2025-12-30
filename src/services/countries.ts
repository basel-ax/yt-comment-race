export interface Country {
  name: string;
  code: string;
}

export const countries: Country[] = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Argentina", code: "AR" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Bangladesh", code: "BD" },
  { name: "Belgium", code: "BE" },
  { name: "Brazil", code: "BR" },
  { name: "Canada", code: "CA" },
  { name: "China", code: "CN" },
  { name: "Colombia", code: "CO" },
  { name: "Denmark", code: "DK" },
  { name: "Egypt", code: "EG" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "Greece", code: "GR" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Ireland", code: "IE" },
  { name: "Italy", code: "IT" },
  { name: "Japan", code: "JP" },
  { name: "Jordan", code: "JO" },
  { name: "Kenya", code: "KE" },
  { name: "South Korea", code: "KR" },
  { name: "Lebanon", code: "LB" },
  { name: "Malaysia", code: "MY" },
  { name: "Mexico", code: "MX" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Norway", code: "NO" },
  { name: "Pakistan", code: "PK" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Romania", code: "RO" },
  { name: "Russia", code: "RU" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Singapore", code: "SG" },
  { name: "South Africa", code: "ZA" },
  { name: "Spain", code: "ES" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Thailand", code: "TH" },
  { name: "Turkey", code: "TR" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "Vietnam", code: "VN" },
  // Add remaining countries as needed
];

export function getCountryByCode(code: string): Country | undefined {
  return countries.find(country => country.code === code);
}

export function getAllCountries(): Country[] {
  return countries;
}