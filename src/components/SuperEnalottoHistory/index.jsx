import "./SuperEnalottoHistory.css";
import Header from "../Header";
import Table from "../Table";

const SuperEnalottoHistory = ({ history }) => {
  const tableData = {
    headers: ["Concorso n", "Numeri", "Jolly & Super Star"],
    rows: history.map((draw) => ({
      key: draw.drawNumber,
      cells: [
        `#${draw.drawNumber}`,
        draw.mainNumbers.join(", "),
        <>
          <span className="special-number">{draw.specialNumbers[0]}</span>
          {" / "}
          <span className="special-number">{draw.specialNumbers[1]}</span>
        </>,
      ],
    })),
  };

  return (
    <div className="super-enalotto-history">
      <Header title="Storia" desc="Tutte le ultime estrazioni" />
      <Table
        headers={tableData.headers}
        rows={tableData.rows}
        className="history-table"
      />
    </div>
  );
};

export default SuperEnalottoHistory;
