import IncrementHoc from "./incrementHoc";

const Hover = (props) => {
  return <h1 onMouseOver={props.handleInc}> {props.cnt} times hover</h1>;
};

export default IncrementHoc(Hover);
