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
    cliComponentState.cliInput.current?.focus();
  }

  return (
    <div className="cli" onClick={focus}>
      <pre>
{`
YaitoCLI風 1.1.2

  Usage: yaito <command>

  Examples: yaito --help
`}
      </pre>

      <form action="">
        <span>$ </span>
        <input
          type="text"
          className="cli-input"
          ref={cliComponentState.cliInput}
        />
      </form>
    </div>
  );
}

export default WebCli;