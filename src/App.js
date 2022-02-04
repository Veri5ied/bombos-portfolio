import "./App.scss";
import Name from "./components/name/Name";

function App() {
  return (
    <div className="App">
      <h1>Hello Welcome to React JS</h1>
      <Name name="Emmanuella" stack="HTML"/>
      <Name name="Angela" stack="CSS"/>
      <Name name="Comfort" stack="JavaScript" />
    </div>
  );
}

export default App;