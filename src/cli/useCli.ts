import { useState } from "react";

export type CliState = {
  cmd: string;
  logs: string[];
};

export interface CliFuncs {
  setCliState: React.Dispatch<React.SetStateAction<CliState>>;
  exec: () => void;
}

export const useCli = (): [CliState, CliFuncs] => {
  const [cliState, setCliState] = useState<CliState>({
    cmd: "ant2357 --help",
    logs: [""]
  });

  const exec = () => {
    setCliState({
      cmd: "",
      logs: [...cliState.logs, `$ ${cliState.cmd}`]
    });
  };


  return [cliState, { setCliState, exec }];
};