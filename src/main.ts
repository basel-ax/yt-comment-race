import './style.css'
import { renderAdminPage, setupAdminPage } from './components/adminPage';
import { renderGamePage, setupGamePage } from './components/gamePage';
import { GameConfig } from './types/index';

let currentConfig: GameConfig | null = null;

function renderPage() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  if (currentConfig) {
    app.innerHTML = renderGamePage(currentConfig);
    setupGamePage(currentConfig, () => {
      currentConfig = null;
      renderPage();
    });
  } else {
    app.innerHTML = renderAdminPage((config) => {
      currentConfig = config;
      renderPage();
    });
    setupAdminPage((config) => {
      currentConfig = config;
      renderPage();
    });
  }
}

renderPage();