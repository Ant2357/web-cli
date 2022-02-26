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
＿人人人人人人人人人人人人人人人人人人人＿
＞　　 db　　　　　 w　 .d88b 8　　888　＜
＞　　dPYb　 8d8b. w8ww 8P　　8　　 8 　＜
＞　 dPwwYb　8P Y8　8　 8b　　8　　 8 　＜
＞　dP　　Yb 8　 8　Y8P \`Y88P 8888 888　＜
￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^￣

  AntCLI Version: 1.0.0

  Commands: ant2357, cowsay, ?????, ??

  Usage: ant2357 <command>

  Example: ant2357 --help`}
      </pre>

      <pre>
        {cliState.logs.map((log, index) => index ? `\n${log}\n` : `${log}\n`)}
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