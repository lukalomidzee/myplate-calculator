import "./CardHeader.css";
import BackButton from "../Button/BackButton";

function CardHeader(props) {
  let backButton = props.backButton ? (
    <BackButton title="უკან" onClick={props.changeState} />
  ) : null;

  let header = props.header ? (
    <h1 id="card-header-paragraph" style={{ color: "#074e66" }}>
      {props.header}
    </h1>
  ) : null;

  return (
    <div className={`cardHeader ${props.classList || ""}`}>
      {backButton}
      {header}
    </div>
  );
}

export default CardHeader;
