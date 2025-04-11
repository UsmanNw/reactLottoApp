import "./Ball.css";

const Ball = ({ number, type = "default" }) => {
  return <span className={`ball ${type}`}>{number}</span>;
};

export default Ball;
