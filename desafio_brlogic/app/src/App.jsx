import GlobalState from "./global/GlobalState";
import SinglePage from "./SinglePage";

function App() {
  return (
    <GlobalState>
      <SinglePage />
    </GlobalState>
  );
}

export default App;
