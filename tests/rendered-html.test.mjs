import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("builds the standalone Cyber Squishy site", async () => {
  const [page, layout, game] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../public/squishy.html", import.meta.url), "utf8"),
  ]);

  assert.match(page, /src="\/squishy\.html"/);
  assert.match(layout, /사이버 말랑이/);
  assert.match(game, /3D SQUISHY LAB/);
  assert.match(game, /#battleBtn,#battleStage,#battleDialog\{display:none!important\}/);
  await access(new URL("../public/wax-crack.mp3", import.meta.url));
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../dist/server/index.js", import.meta.url));
});
