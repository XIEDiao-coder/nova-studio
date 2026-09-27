// Dependency-free ICO fallback matching src/app/icon.svg.
import { writeFileSync } from "node:fs";
const size = 32;
const pixels = Buffer.alloc(size * size * 4);
const polygon = [
  [8, 30],
  [16, 9],
  [22, 9],
  [32, 30],
  [25, 30],
  [19, 16],
  [14, 30],
];
function inside(x, y, points) {
  let hit = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const [xi, yi] = points[i],
      [xj, yj] = points[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)
      hit = !hit;
  }
  return hit;
}
for (let y = 0; y < size; y++)
  for (let x = 0; x < size; x++) {
    const px = ((x + 0.5) * 40) / size,
      py = ((y + 0.5) * 40) / size;
    const color = inside(px, py, polygon)
      ? [239, 237, 246]
      : inside(px, py, [
            [23, 9],
            [25, 7],
            [33, 17],
            [31, 19],
          ])
        ? [170, 160, 237]
        : [11, 11, 14];
    const offset = ((size - 1 - y) * size + x) * 4;
    pixels.set([color[2], color[1], color[0], 255], offset);
  }
const mask = Buffer.alloc(4 * size);
const bmp = Buffer.alloc(40);
bmp.writeUInt32LE(40);
bmp.writeInt32LE(size, 4);
bmp.writeInt32LE(size * 2, 8);
bmp.writeUInt16LE(1, 12);
bmp.writeUInt16LE(32, 14);
bmp.writeUInt32LE(pixels.length + mask.length, 20);
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header[6] = size;
header[7] = size;
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(bmp.length + pixels.length + mask.length, 14);
header.writeUInt32LE(22, 18);
writeFileSync(
  new URL("../src/app/favicon.ico", import.meta.url),
  Buffer.concat([header, bmp, pixels, mask]),
);
