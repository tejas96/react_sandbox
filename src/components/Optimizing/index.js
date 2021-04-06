import { useState, useMemo } from "react";
import ReactComponent from "./reactComponent";
import ReactPureComponent from "./reactPureComponent";
import Info from "./info";

const Main = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [add, setAdd] = useState(0);

  function handleAdd() {
    setAdd(+input1 + +input2);
  }

  let info = useMemo(() => {
    return <Info />;
  }, []);

  return (
    <>
      <h1>React App Optimizing</h1>
      {info}
      <input
        type="number"
        value={input1}
        onChange={(event) => {
          setInput1(event.target.value);
        }}
        name="input1"
      />
      <input
        type="number"
        value={input2}
        onChange={(event) => {
          setInput2(event.target.value);
        }}
        name="input1"
      />
      <button onClick={handleAdd}>add</button>
      <ReactComponent data={add} />
      <ReactPureComponent data={add} />
    </>
  );
};

export default Main;
