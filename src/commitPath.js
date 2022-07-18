// @ts-check
import path from "path";

export function findGitCommitMessageFilePath() {
  const commitMessageFilePath = path.resolve(
    process.env.PWD || process.cwd(),
    "./.git/COMMIT_EDITMSG"
  );

  return commitMessageFilePath;
}
