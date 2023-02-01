
export const analyze = (text: string): string[] => {
  let cmdStack: string[] = [];

  const cmds = text.split(" ").map(v => v.trim());
  const isAnt2357 = cmds.includes("ant2357");
  if (isAnt2357 && (cmds.includes("--version") || cmds.includes("-v"))) {
    cmdStack.push("version");
  }

  if (isAnt2357 && (cmds.includes("--help") || cmds.includes("-h"))) {
    cmdStack.push("help");
  }

  if (isAnt2357 && (cmds.includes("--profile") || cmds.includes("-p"))) {
    cmdStack.push("profile");
  }

  return cmdStack;
};

export const exec = (command: string): string => {
  switch (command) {
    case "help":
      return `  Usage: ant2357 <command>

  Example:
    ant2357 --help

  --help or -h
    Options:
    Quick help on all <command>
  --version or -v
    Options:
    See version of this service
  --profile or -p
    Options:
    Profile of ant2357`;
    case "version":
      return `  Version: 1.0.0`;
    case "profile":
      return `  Name: ????
  Age: null
  Location: Tokyo
  Email: ryu4979@gmail.com
  GitHub: https://github.com/Ant2357`
    default:
      return `  Error: Unknown flag.`;
  }
};

export const run = (cmdStack: string[]): string => {
  return cmdStack.reduce((acc, v, index) => {
    const lineSpacing: string = index ? "\n\n" : "";
    return `${acc}${lineSpacing}${exec(v)}`
  }, "")
}
