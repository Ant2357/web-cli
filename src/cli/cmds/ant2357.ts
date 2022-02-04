
export const analyze = (cmds: string): string[] => {
  let cmdStack: string[] = [];

  const isAnt2357 = cmds.includes("ant2357");
  if (isAnt2357 && cmds.includes("version")) {
    cmdStack.push("version");
  }

  if (isAnt2357 && cmds.includes("help")) {
    cmdStack.push("help");
  }

  if (isAnt2357 && cmds.includes("profile")) {
    cmdStack.push("profile");
  }

  return cmdStack;
};

export const exec = (command: string): string => {
  switch (command) {
    case "help":
      return `Usage: ant2357 <command>

  Example:
    ant2357 --help

  --help
    Options:
    Quick help on all <command>
  --version
    Options:
    See version of this service
  --profile
    Options:
    Profile of ant2357`;
    case "version":
      return `Version: 1.0.0`;
    case "profile":
      return `Name: ???
  Age: null
  Location: Tokyo
  Email: ryu4979@gmail.com
  GitHub: https://github.com/Ant2357`
    default:
      return `  Error: Unknown flag.`;
  }
};