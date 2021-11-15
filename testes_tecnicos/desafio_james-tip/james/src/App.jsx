import PagesPaths from "./routes/routes";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <PagesPaths />
    </GlobalState>
  );
}

export default App;
