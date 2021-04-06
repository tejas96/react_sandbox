import "./styles.css";
import ReactErrorBoundries from "./components/Error_Boundries";
import ForwardRef from "./components/Forward_Ref";
import ReactFragment from "./components/Fragment";
import ReactHoc from "./components/HOC";
import Jsx from "./components/jsx";
import ReactOptimization from "./components/Optimizing";
import ReactPortals from "./components/portal";

export default function App() {
  return (
    <div className="App">
      <h1>React Tutorial Programm</h1>

      {/* React Error Boundries 
      <ReactErrorBoundries/> */}

      {/* React Forward Ref 
      <ForwardRef /> */}

      {/* React Fragment
      <ReactFragment/> */}

      {/* React Higher Order Component
      <ReactHoc/> */}

      {/* React JSX
      <Jsx /> */}

      {/* React ReactOptimization 
      <ReactOptimization /> */}

      {/* React portal
      <ReactPortals /> */}
    </div>
  );
}
