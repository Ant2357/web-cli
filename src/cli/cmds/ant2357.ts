
export const analyze = (cmd: string): string[] => {
  let cmdStack: string[] = [];

  const isAnt2357 = cmd.indexOf("ant2357") !== -1;

  if (isAnt2357 && cmd.indexOf("--version") !== -1) {
    cmdStack.push("version");
  }

  if (isAnt2357 && cmd.indexOf("--help") !== -1) {
    cmdStack.push("help");
  }

  if (isAnt2357 && cmd.indexOf("--profile") !== -1) {
    cmdStack.push("profile");
  }

  return cmdStack;
};

export const exec = (command: string): string => {
  switch (command) {
    case "help":
      return `  Usage: ant2357 <command>

  Where <command> is one of:
    --help, --version, --profile

  Example:
    ant2357 --help

  --help
    Options:
    Quick help on all <command>
  --version
    Options:
    See version of this service
  --bio
    Options:
    Profile of ant2357`;
    case "version":
      return `  Version: 1.0.0`;
    case "profile":
      return `  name: ???
  Age: null
  Location: Tokyo
  Email: ryu4979@gmail.com
  Github: https://github.com/Ant2357`
    default:
      return `  Error: Unknown flag.`;
  }
};