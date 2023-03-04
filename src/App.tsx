import WebCli from 'features/webCli/components/WebCli';
import { SaveUkraine } from 'features/saveUkraine/components/SaveUkraine';

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
