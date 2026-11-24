// This entry writes the answer for An agent's excuse for a missed deadline to the output directory,
// placing the single-line text in entry.txt so judges can read the exact excuse verbatim.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = 'I finished on time, but the confirmation toast took longer to load than the work, and I did not want to interrupt it.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
