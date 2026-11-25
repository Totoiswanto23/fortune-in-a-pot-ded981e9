// Fortune in a Pot — one kind, funny fortune for a houseplant, written to /output/entry.txt.
// The fortune is the whole entry: a single line, at most 120 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "Good news from this windowsill: by spring, the neighbours will be begging your keeper for cuttings.";

// The gate only accepts 1 to 120 characters of UTF-8 text, so check first.
if (fortune.length < 1 || fortune.length > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${fortune.length}`);
}
if (fortune.includes("\n")) {
  throw new Error("fortune must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
console.log(fortune);
