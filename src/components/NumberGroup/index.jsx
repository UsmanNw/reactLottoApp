import "./NumberGroup.css";
import Ball from "../Ball";

const NumberGroup = ({ numbers, type = "default" }) => {
  return (
    <div className="number-group">
      {numbers.map((number, index) => (
        <Ball key={index} number={number} type={type} />
      ))}
    </div>
  );
};

export default NumberGroup;
