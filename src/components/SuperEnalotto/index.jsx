import { useState } from "react";
import { generateUniqueNumber } from "../../utlis/numbers";
import Header from "../Header";
import NumberGroup from "../NumberGroup";
import Ball from "../Ball";
import "./SuperEnalotto.css";

const SuperEnalotto = ({ onComplete, nextDrawNumber }) => {
  const [mainNumbers, setMainNumbers] = useState([]);
  const [specialNumbers, setSpecialNumbers] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleGenerate = () => {
    if (currentStep < 6) {
      // Generate main numbers
      const newNum = generateUniqueNumber(1, 90, mainNumbers);
      setMainNumbers((prev) => [...prev, newNum]);
    } else if (currentStep === 6) {
      // Generate jolly number
      const newNum = generateUniqueNumber(1, 90, mainNumbers);
      setSpecialNumbers([{ number: newNum, type: "jolly" }]);
    } else if (currentStep === 7) {
      // Generate superstar number
      const exclude = [...mainNumbers, specialNumbers[0].number];
      const newNum = generateUniqueNumber(1, 90, exclude);
      setSpecialNumbers((prev) => [
        ...prev,
        { number: newNum, type: "superstar" },
      ]);
    } else {
      // Complete the set and reset
      onComplete(
        mainNumbers,
        specialNumbers.map((n) => n.number)
      );
      setMainNumbers([]);
      setSpecialNumbers([]);
      setCurrentStep(-1);
    }
    setCurrentStep((prev) => prev + 1);
  };

  const getButtonText = () => {
    if (currentStep < 6) return `Generate Main #${currentStep + 1}`;
    if (currentStep === 6) return "Generate Jolly";
    if (currentStep === 7) return "Generate Superstar";
    return "Complete Set & Start New";
  };

  return (
    <div className="super-enalotto">
      <Header
        title="SuperEnalotto"
        drawNumber={`Concorso n.${nextDrawNumber}`}
        desc={`Progress: ${Math.min(currentStep, 7)}/8 numbers`}
      />

      <div className="numbers-container">
        <NumberGroup numbers={mainNumbers} />
        <div className="special-numbers">
          {specialNumbers.map((num, index) => (
            <Ball key={index} number={num.number} type={num.type} />
          ))}
        </div>
      </div>

      <button
        className="generate-button"
        onClick={handleGenerate}
        disabled={currentStep > 7 && currentStep !== 8}
      >
        {getButtonText()}
      </button>
    </div>
  );
};

export default SuperEnalotto;
