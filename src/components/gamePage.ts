import { Application } from 'pixi.js';
import { RaceScene } from '../game/RaceScene';
import { GameConfig } from '../types/index';
import { extractVideoId, getLiveChatId, startPollingComments } from '../services/youtubeApi';
import { processComment } from '../utils/gameLogic';
import { getCountryByCode } from '../services/countries';

let app: Application | null = null;
let raceScene: RaceScene | null = null;
let stopPolling: (() => void) | null = null;

export function renderGamePage(config: GameConfig): string {
  const selectedCountriesList = config.selectedCountries
    .map(code => {
      const country = getCountryByCode(code);
      return country ? `${code} (${country.name})` : code;
    })
    .join(', ');

  return `
    <div>
      <h2>Race Game</h2>
      <div id="game-container" style="position: relative;">
        <canvas id="game-canvas"></canvas>
        <div id="legend" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.8); padding: 10px; border-radius: 5px;">
          <h3>Legend</h3>
          <p>Comment with a country code to move that country's car forward!</p>
          <p><strong>Selected Countries:</strong> ${selectedCountriesList}</p>
        </div>
      </div>
      <button id="back-btn">Back to Admin</button>
    </div>
  `;
}

export async function setupGamePage(config: GameConfig, onBack: () => void) {
  const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
  app = new Application({
    view: canvas,
    width: 900,
    height: 400,
    backgroundColor: 0x1099bb,
  });

  raceScene = new RaceScene(app, config.selectedCountries);

  const videoId = extractVideoId(config.youtubeUrl);
  if (!videoId) {
    alert('Invalid YouTube URL');
    return;
  }

  const liveChatId = await getLiveChatId(videoId, config.apiKey);
  if (!liveChatId) {
    alert('No live chat found for this video');
    return;
  }

  stopPolling = startPollingComments(liveChatId, config.apiKey, (comments) => {
    comments.forEach(comment => {
      const text = comment.snippet.displayMessage;
      processComment(text, raceScene!, config.selectedCountries);
    });
  });

  const backBtn = document.getElementById('back-btn') as HTMLButtonElement;
  backBtn.addEventListener('click', () => {
    if (stopPolling) stopPolling();
    app?.destroy();
    onBack();
  });
}