import "./App.css";
import AssignmentsMarks from "./components/AssignmentsMarks/AssignmentsMarks";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <AssignmentsMarks></AssignmentsMarks>
    </div>
  );
}

export default App;
