import { Application, Graphics, Sprite, Container } from 'pixi.js';
import { generateCarTexture } from '../services/carGenerator';
import { Car } from '../types/index';

export class RaceScene {
  private app: Application;
  private cars: { [code: string]: Sprite } = {};
  private carPositions: { [code: string]: number } = {};
  private trackLength = 800;

  constructor(app: Application, countryCodes: string[]) {
    this.app = app;
    this.createTrack();
    this.createCars(countryCodes);
  }

  private createTrack() {
    const track = new Graphics();
    track.lineStyle(5, 0x000000);
    track.moveTo(50, 100);
    track.lineTo(50 + this.trackLength, 100);
    track.moveTo(50, 200);
    track.lineTo(50 + this.trackLength, 200);
    track.moveTo(50, 300);
    track.lineTo(50 + this.trackLength, 300);
    this.app.stage.addChild(track);
  }

  private createCars(countryCodes: string[]) {
    countryCodes.forEach((code, index) => {
      const texture = generateCarTexture(code, this.app.renderer);
      const car = new Sprite(texture);
      car.x = 50;
      car.y = 120 + index * 80;
      this.app.stage.addChild(car);
      this.cars[code] = car;
      this.carPositions[code] = 0;
    });
  }

  public moveCar(countryCode: string, distance: number = 10) {
    if (this.cars[countryCode]) {
      this.carPositions[countryCode] += distance;
      this.cars[countryCode].x = 50 + Math.min(this.carPositions[countryCode], this.trackLength - 50);
    }
  }

  public getCarPositions(): { [code: string]: number } {
    return { ...this.carPositions };
  }
}