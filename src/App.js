import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Progrmas } from "./components/Programs/Progrmas";
import { Reasons } from "./components/Reasons/Reasons";
function App() {
  return (
    <div className="App">
      <Hero />
      <Progrmas />
      <Reasons />
    </div>
  );
}

export default App;
