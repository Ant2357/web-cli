import React, { useLayoutEffect, useState } from "react";
import { useCli } from "cli/useCli";

import "css/cli.css";

type CliComponentState = {
  cliInput: React.RefObject<HTMLInputElement>
}

const WebCli: React.FC = () => {
  const [cliState, cliFuncs] = useCli();

  const [cliComponentState] = useState<CliComponentState>({
    cliInput: React.createRef()
  })


  useLayoutEffect(() => {
    cliComponentState.cliInput.current?.scrollIntoView();
  });


  const focus = () => {
    // ドラッグ処理対策
    if (window.getSelection()?.toString()) {
      return;
    }

    cliComponentState.cliInput.current?.focus();
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    cliFuncs.exec(cliState.cmd);
    event.preventDefault();
  }


  return (
    <div className="cli" onClick={focus}>
      <pre>
{`
AntCLI風 1.1.2

  Usage: ant2357 <command>

  Example: ant2357 --help`}
      </pre>

      <pre>
        {cliState.logs.map((log) => `${log}`)}
      </pre>

      <form onSubmit={handleSubmit}>
        <span>$ </span>
        <input
          type="text"
          className="cli-input"
          spellCheck="false"
          ref={cliComponentState.cliInput}
          value={cliState.cmd}
          onChange={event => cliFuncs.setCliState(state => ({...state, cmd: event.target.value}))}
        />
      </form>
    </div>
  );
}

export default WebCli;