import { useState } from "react";
import * as cmdAnt2357 from "cli/cmds/ant2357";
import * as cmdCowsay from "cli/cmds/cowsay";
import * as cmdFiglet from "cli/cmds/figlet";
import * as cmdNyanko from "cli/cmds/nyanko";
import * as cmdTweet from "cli/cmds/tweet";
import * as cmdDm from "cli/cmds/dm";

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

      if (cmdDm.isDm(text)) {
        cmdDm.open(text);
        return "Direct message has been sent!!";
      }

      if (cmdTweet.isTweet(text)) {
        cmdTweet.open(text);
        return "Tweet!!";
      }

      if (cmdCowsay.isCowsay(text)) {
        return cmdCowsay.exec(text);
      }

      if (cmdFiglet.isFiglet(text)) {
        return cmdFiglet.exec(text);
      }


      const nyankoCmds: string[] = [...cmdNyanko.analyze(text)];
      if (nyankoCmds.length !== 0) {
        return nyankoCmds.reduce((acc, v, index) => {
          const lineSpacing: string = index ? "\n\n" : "";
          return `${acc}${lineSpacing}${cmdNyanko.exec(v)}`
        }, "");
      }

      const ant2357Cmds: string[] = [...cmdAnt2357.analyze(text)];
      if (ant2357Cmds.length !== 0) {
        // ant2357コマンドの結果
        return ant2357Cmds.reduce((acc, v, index) => {
          const lineSpacing: string = index ? "\n\n" : "";
          return `${acc}${lineSpacing}${cmdAnt2357.exec(v)}`
        }, "");
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