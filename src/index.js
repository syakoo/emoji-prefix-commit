#!/usr/bin/env node
import { addEmojiCommitPrefix } from "./addEmojiCommitPrefix.js";
import { findGitCommitMessageFilePath } from "./commitPath.js";

function main() {
  const filePath = findGitCommitMessageFilePath();
  addEmojiCommitPrefix(filePath);
}

main();
