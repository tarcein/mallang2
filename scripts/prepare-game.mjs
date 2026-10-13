// Recovered public assets are the canonical source; do not overwrite them from outside this repository.
import { access } from 'node:fs/promises';
await Promise.all(['../public/squishy.html','../public/wax-crack.mp3'].map(p=>access(new URL(p,import.meta.url))));
