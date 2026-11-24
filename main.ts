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

// Validate the line against the competition gate before writing
// anything: it must be non-empty (not only whitespace), at most 200
// characters, and a single line. Failing here is better than shipping
// an entry the sealed scorer rejects as invalid.
if (EXCUSE.trim().length === 0) {
  throw new Error("Excuse line is empty or only whitespace.");
}
if (EXCUSE.length > 200) {
  throw new Error(
    `Excuse line is ${EXCUSE.length} characters, over the 200-character limit.`,
  );
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("Excuse line must be a single line.");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, EXCUSE + "\n", "utf8");
