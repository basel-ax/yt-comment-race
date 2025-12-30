import { getAllCountries } from '../services/countries';
import { GameConfig } from '../types/index';

export function renderAdminPage(_onCreateGame: (config: GameConfig) => void): string {
  const countries = getAllCountries();

  const countryOptions = countries.map(country => `
    <label>
      <input type="checkbox" value="${country.code}" class="country-checkbox">
      ${country.name} (${country.code})
    </label><br>
  `).join('');

  return `
    <div>
      <h2>Create New Game</h2>
      <form id="game-form">
        <label>YouTube Stream URL:</label><br>
        <input type="text" id="youtube-url" required><br><br>

        <label>YouTube API Key:</label><br>
        <input type="text" id="api-key" required><br><br>

        <label>Select Countries:</label><br>
        <div id="countries-list">
          ${countryOptions}
        </div><br>

        <button type="submit">Create Game</button>
      </form>
    </div>
  `;
}

export function setupAdminPage(onCreateGame: (config: GameConfig) => void) {
  const form = document.getElementById('game-form') as HTMLFormElement;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const youtubeUrl = (document.getElementById('youtube-url') as HTMLInputElement).value;
    const apiKey = (document.getElementById('api-key') as HTMLInputElement).value;
    const selectedCountries = Array.from(document.querySelectorAll('.country-checkbox:checked')).map(cb => (cb as HTMLInputElement).value);

    const config: GameConfig = {
      youtubeUrl,
      apiKey,
      selectedCountries
    };

    onCreateGame(config);
  });
}