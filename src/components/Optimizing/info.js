let style = {
  textAlign: "left"
};
const Info = (props) => {
  return (
    <ul style={style}>
      <li>
        Use shouldComponentUpdate lifecycle method for checking change in
        props/state
      </li>
      <li>
        Use PureComponent which handle shouldComponentUpdate internally for you
      </li>
      <li>
        Use React.memo() method to memorise component same like PureComponent
        but for function component
      </li>
      <li>Use react dev tool profiller to anylize app performance</li>
    </ul>
  );
};

export default Info;
