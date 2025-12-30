import { RaceScene } from '../game/RaceScene';

export function processComment(commentText: string, raceScene: RaceScene, countryCodes: string[]) {
  const text = commentText.toUpperCase();
  countryCodes.forEach(code => {
    if (text.includes(code.toUpperCase())) {
      raceScene.moveCar(code);
    }
  });
}