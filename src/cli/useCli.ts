import { useState } from "react";
import * as cmdAnt2357 from "cli/cmds/ant2357";
import * as cmdCowsay from "cli/cmds/cowsay";

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
      const ant2357Cmds: string[] = [...cmdAnt2357.analyze(text)];
      const isCowsay = cmdCowsay.isCowsay(text);

      // 実行するコマンドが無い
      if (ant2357Cmds.length === 0 && !isCowsay) {
        return `  command ${text} is not found.`;
      }


      // ant2357コマンドの結果
      const resAnt2357 = ant2357Cmds.reduce((acc, v, index) => {
        const lineSpacing: string = index ? "\n\n" : "";
        return `${acc}${lineSpacing}  ${cmdAnt2357.exec(v)}`
      }, "");


      // cowsayコマンド
      if (ant2357Cmds.length === 0) {
        return cmdCowsay.exec(text.replaceAll("cowsay", "").trim());
      }
      if (isCowsay) {
        return cmdCowsay.exec(resAnt2357);
      }


      return resAnt2357;
    })();


    const oldLogs: string[] = [...cliState.logs, `$ ${text}`];
    setCliState({
      cmd: "",
      logs: [...oldLogs, `${newLog}`]
    });
  };


  return [cliState, { setCliState, exec }];
};