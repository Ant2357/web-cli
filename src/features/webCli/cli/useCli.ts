import { useState } from "react";
import * as cmdAnt2357 from "features/webCli/cli/cmds/ant2357";
import * as cmdCowsay from "features/webCli/cli/cmds/cowsay";
import * as cmdFiglet from "features/webCli/cli/cmds/figlet";
import * as cmdNyanko from "features/webCli/cli/cmds/nyanko";

export type CliState = {
  cmd: string;
  logs: string[];
};

export interface CliFuncs {
  setCliState: React.Dispatch<React.SetStateAction<CliState>>;
  exec: (cmd: string) => void;
}

export const useCli = (): [CliState, CliFuncs] => {
  const [cliState, setCliState] = useState<CliState>({
    cmd: "ant2357 --help",
    logs: []
  });

  const exec = (text: string) => {
    const newLog: string = (() => {

      if (cmdCowsay.isCowsay(text)) {
        return cmdCowsay.exec(text);
      }

      if (cmdFiglet.isFiglet(text)) {
        return cmdFiglet.exec(text);
      }


      const nyankoCmdStack: string[] = [...cmdNyanko.analyze(text)];
      if (nyankoCmdStack.length !== 0) {
        return cmdNyanko.run(nyankoCmdStack);
      }

      const ant2357CmdStack: string[] = [...cmdAnt2357.analyze(text)];
      if (ant2357CmdStack.length !== 0) {
        return cmdAnt2357.run(ant2357CmdStack);
      }

      return `  command ${text} is not found.`;
    })();


    const oldLogs: string[] = [...cliState.logs, `$ ${text}`];
    setCliState({
      cmd: "",
      logs: [...oldLogs, `${newLog}`]
    });
  };


  return [cliState, { setCliState, exec }];
};
