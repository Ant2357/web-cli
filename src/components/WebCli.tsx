import React from "react";
import "css/cli.css";

const WebCli: React.FC = () => {
  return (
    <div className="cli">
      <pre>
{`
YaitoCLI 1.1.2

  Usage: yaito <command>

  Examples: yaito --bio
`}
      </pre>

      <form action="">
        <span>$</span>
        <input type="text" className="cli-input" />
      </form>
    </div>
  );
}

export default WebCli;