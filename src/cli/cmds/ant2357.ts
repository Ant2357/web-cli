
export const analyze = (cmd: string): string[] => {
  let cmdStack: string[] = [];

  const isAnt2357 = cmd.indexOf("ant2357") !== -1;

  if (isAnt2357 && cmd.indexOf("--version") !== -1) {
    cmdStack.push("version");
  }

  if (isAnt2357 && cmd.indexOf("--help") !== -1) {
    cmdStack.push("help");
  }

  if (isAnt2357 && cmd.indexOf("--bio") !== -1) {
    cmdStack.push("bio");
  }

  return cmdStack;
};

export const exec = (command: string): string => {
  switch (command) {
    case "help":
      return `  Usage: ant2357 <command>

  Where <command> is one of:
    --help, --version

  Example:
    ant2357 --help

  web-cli@バージョン番号 https://github.com/Ant2357/リポジトリ

  --help
    Options:
    Quick help on all <command>
  --version
    Options:
    See version of this service`;
    case "version":
      return `  Version: 1.0.0`;
    case "bio":
      return `  name: ???,
  Age: null,
  Location: Tokyo,
  Email: ryu4979@gmail.com
  Github: https://github.com/Ant2357`
    default:
      return `  Error: Unknown flag.`;
  }
};