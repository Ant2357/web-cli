import React, { useState } from "react";
import "css/cli.css";

type CliComponentState = {
  cliInput: React.RefObject<HTMLInputElement>
}

const WebCli: React.FC = () => {
  const [cliComponentState] = useState<CliComponentState>({
    cliInput: React.createRef()
  })

  const focus = () => {
    // ドラッグ処理対策
    if (window.getSelection()) {
      return;
    }

    cliComponentState.cliInput.current?.focus();
  }

  return (
    <div className="cli" onClick={focus}>
      <pre>
{`
AntCLI風 1.1.2

  Usage: ant2357 <command>

  Examples: ant2357 --help
`}
      </pre>

      <form action="">
        <span>$ </span>
        <input
          type="text"
          className="cli-input"
          spellCheck="false"
          ref={cliComponentState.cliInput}
        />
      </form>
    </div>
  );
}

export default WebCli;