import { useState } from "react";
import * as cmdAnt2357 from "cli/cmds/ant2357";

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
    logs: [""]
  });

  const exec = (text: string) => {
    const cmds: string[] = cmdAnt2357.analyze(text);
    console.log(cmds);
    const newLog: string = (() => {
      if (cmds.length === 0) {
        return "errorMsg";
      }

      return cmds.reduce((acc, v) => `${acc}\n${cmdAnt2357.exec(v)}`, "")
    })();

    setCliState({
      cmd: "",
      logs: [...cliState.logs, `$ ${newLog}`]
    });
  };


  return [cliState, { setCliState, exec }];
};