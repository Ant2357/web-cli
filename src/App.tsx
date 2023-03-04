import WebCli from 'components/WebCli';
import { SaveUkraine } from 'components/SaveUkraine';

import "css/app.css";

function App() {
  return (
    <div>
      <SaveUkraine
        ribbon={"TOP_RIGHT"}
        hasShadow={false}
        countries={[]}
      />
      <WebCli />
    </div>
  );
}

export default App;
