import "./style.css";

function Cell(props) {
  return (
    <div className="cell" style={{ backgroundColor: `${props.color}` }}></div>
  );
}

export default Cell;
