// @ts-check
import path from "path";
import { fileURLToPath } from "url";

const DIR_NAME = path.dirname(fileURLToPath(import.meta.url));

export function findGitCommitMessageFilePath() {
  const commitMessageFilePath = path.resolve(
    DIR_NAME,
    "../.git/COMMIT_EDITMSG"
  );

  return commitMessageFilePath;
}
