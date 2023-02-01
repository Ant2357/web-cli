// @ts-ignore
import catMe from "cat-me"

export const analyze = (text: string): string[] => {
  let cmdStack: string[] = [];

  const cmds = text.split(" ").map(v => v.trim());
  const isNyanko = cmds.includes("nyanko");

  if (isNyanko) {
    const nyankoText = text.replaceAll("nyanko", "").trim();
    cmdStack.push(`exec ${nyankoText}`);
  }

  if (isNyanko && (cmds.includes("--help") || cmds.includes("-h"))) {
    cmdStack.push("help");
  }

  return cmdStack;
};

export const exec = (command: string): string => {
  if (command === "help") {
      return `  Cats:
    grumpy, approaching, tubby, confused, playful,
    thoughtful, delighted, nyan, resting

  Example:
    nyanko thoughtful`;
  } else if (command.includes("exec")) {
    const nyankoText = command.replaceAll("nyanko", "").replaceAll("exec", "").trim();
    const res = catMe(nyankoText);
    return res === undefined ? catMe() : res;
  } else {
    return `  Error: Unknown flag.`;
  }
}
