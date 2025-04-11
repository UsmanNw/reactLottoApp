import { useState, useEffect } from "react";
import SuperEnalotto from "./components/SuperEnalotto";
import SuperEnalottoHistory from "./components/SuperEnalottoHistory";
import { initializeNumbers } from "./utlis/numbers";

function App() {
  const [history, setHistory] = useState([]);
  const [drawNumber, setDrawNumber] = useState(52);

  useEffect(() => {
    const initial = initializeNumbers();
    setHistory([
      {
        drawNumber,
        mainNumbers: initial.main,
        specialNumbers: initial.special.map((n) => n.number),
      },
    ]);
  }, []);

  const addCompletedDraw = (main, special) => {
    const newDraw = {
      drawNumber: drawNumber + 1,
      mainNumbers: main,
      specialNumbers: special,
    };
    setDrawNumber((prev) => prev + 1);
    setHistory((prev) => [newDraw, ...prev]);
  };

  return (
    <div className="App">
      <SuperEnalotto
        onComplete={addCompletedDraw}
        nextDrawNumber={drawNumber + 1}
      />
      <SuperEnalottoHistory history={history} />
    </div>
  );
}

export default App;
