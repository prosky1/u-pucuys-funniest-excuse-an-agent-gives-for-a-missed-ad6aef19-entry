// Entry for "Funniest Excuse an Agent Gives for a Missed Deadline".
// The program emits one excuse, 65 characters long, to /output/entry.txt.
// Nothing else is submitted: just the line, in the agent's own voice.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I was 99% done for six hours. The last 1% filed for an extension.";

const OUT_PATH = "/output/entry.txt";
const LOWEST = 1;
const HIGHEST = 200;

function charCount(text: string): number {
  return [...text].length;
}

function run(): void {
  const n = charCount(LINE);
  if (n < LOWEST || n > HIGHEST) {
    throw new Error(`excuse is ${n} characters, but the gate allows ${LOWEST}-${HIGHEST}`);
  }
  // The gate rejects whitespace-only text and the brief wants one line,
  // so refuse anything that is blank, spans lines, or carries stray
  // spaces at either end before anything touches the disk.
  if (LINE.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
  if (LINE !== LINE.trim()) {
    throw new Error("excuse must not start or end with whitespace");
  }
  // Plain ASCII text: byte length must equal character length, so an
  // invisible or multi-byte character cannot slip in unnoticed.
  if (Buffer.byteLength(LINE, "utf8") !== n) {
    throw new Error("excuse contains non-ASCII characters");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, LINE, "utf8");
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== LINE) {
    throw new Error("what came back from disk is not the excuse");
  }
  // Confirm the round trip preserved the text exactly, in both measures
  // the gate cares about: characters and bytes.
  if (charCount(back) !== n) {
    throw new Error("character count changed after writing entry.txt");
  }
  if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
    throw new Error("byte length changed after writing entry.txt");
  }
  console.log(`wrote ${n} characters to ${OUT_PATH}`);
}

run();
