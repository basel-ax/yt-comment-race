import { Graphics, Text, Container, Texture, IRenderer } from 'pixi.js';

export function generateCarTexture(countryCode: string, renderer: IRenderer): Texture {
  const container = new Container();

  // Draw a simple car shape
  const car = new Graphics();
  car.beginFill(0xff0000); // Red car
  car.drawRect(0, 0, 50, 25);
  car.endFill();

  // Add wheels
  car.beginFill(0x000000);
  car.drawCircle(10, 30, 5);
  car.drawCircle(40, 30, 5);
  car.endFill();

  container.addChild(car);

  // Add country code text
  const text = new Text(countryCode, { fontSize: 12, fill: 0xffffff });
  text.x = 10;
  text.y = 5;
  container.addChild(text);

  // Render to texture
  const texture = renderer.generateTexture(container);
  return texture;
}