// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to /output/entry.txt.
// Deterministic: every run writes byte-identical output.
// Plain TypeScript, Node 22+, no dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "The logs said that error was impossible, so production ran it live in front of a thousand users just to prove them wrong.";

// The grader runs the program with no arguments, which writes to
// /output/entry.txt. An optional first argument overrides the output
// path (used for local verification only).
const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, EXCUSE + "\n", "utf8");
