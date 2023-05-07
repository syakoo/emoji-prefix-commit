// @ts-check
import fs from "fs";

const prefix2Emojis = {
  feat: "✨",
  fix: "🐛",
  docs: "📝",
  refactor: "♻️",
  test: "✅",
  perf: "⚡️",
  chore: "🔧",
  merge: "🔀",
  revert: "⏪",
  build: "🏗",
  ci: "💚",
  version: "🎉",
};

export function addEmojiCommitPrefix(commitMessageFilePath) {
  const message = fs.readFileSync(commitMessageFilePath, "utf-8").trim();
  const messagePrefix = message.split(":")[0];

  if (messagePrefix) {
    const emoji = Object.entries(prefix2Emojis).find(([prefix]) => {
      return messagePrefix.toLowerCase().startsWith(prefix);
    })?.[1]

    if (emoji) {
      fs.writeFileSync(commitMessageFilePath, `${emoji} ${message}`, "utf-8");
    }
  }
}
