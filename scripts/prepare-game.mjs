import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../..");
const output = resolve(here, "../public");
const source = await readFile(resolve(root, "squishy.html"), "utf8");
const standalone = source.replace(
  "</style>",
  ".back,#battleBtn,#battleStage,#battleDialog{display:none!important}</style>",
);

await mkdir(output, { recursive: true });
await writeFile(resolve(output, "squishy.html"), standalone);
await copyFile(resolve(root, "wax-crack.mp3"), resolve(output, "wax-crack.mp3"));
