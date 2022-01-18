
export const analyze = (cmd: string): string[] => {
  let cmdStack: string[] = [];

  const isAnt2357 = cmd.indexOf("ant2357") !== -1;

  if (isAnt2357 && cmd.indexOf("--help") !== -1) {
    cmdStack.push("help");
  }

  return cmdStack;
};

export const exec = (command: string): string => {
  switch (command) {
    case "help":
      return `
  Usage: ant2357 <command>

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
    See version of this service
`;
      break;
    default:
      return `\nerror: unknown flag.\n`;
      break;
  }
};