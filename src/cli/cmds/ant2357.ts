
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
      return "helpMsg";
      break;
    default:
      return "errorMsg";
      break;
  }
};