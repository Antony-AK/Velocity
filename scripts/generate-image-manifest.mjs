// Generates public/images/README.md from the image manifest.
import { writeFileSync } from "node:fs";
import { IMAGES } from "../src/data/images.js";
import { VEHICLES } from "../src/data/vehicles.js";

const all = [...Object.values(IMAGES)];
VEHICLES.forEach((v) => all.push(v.hero, ...v.gallery));
const seen = new Set();
const rows = all.filter((i) => !seen.has(i.file) && seen.add(i.file));

const md = `# Image slots

Drop licensed photographs into this folder using **exactly** these file names.
Until a file exists, the site shows a clearly marked placeholder in its place.
Use JPG (or rename in \`src/data/images.js\`). Compress to roughly 250-450 KB each.
Tune the crop per image with \`pos\` (desktop/tablet) and \`posM\` (mobile) in \`src/data/images.js\`.

| File | Size | Subject |
| --- | --- | --- |
${rows.map((i) => `| \`${i.file}\` | ${i.w}x${i.h} | ${i.label} |`).join("\n")}

Art direction: one consistent look. Dark studio or dusk, low contrast background, black and red hypercar for VXR-01,
graphite grand tourer for GT-RS, cool light-bar electric concept for E-ONE. Keep each car in the right half of hero
frames so the headline sits on the left.
`;
writeFileSync(new URL("../public/images/README.md", import.meta.url), md);
console.log(`Wrote ${rows.length} image slots to public/images/README.md`);
