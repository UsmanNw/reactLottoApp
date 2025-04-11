// components/Table/index.jsx
import "./Table.css";

const Table = ({ headers, rows, className }) => {
  return (
    <div className="table-container">
      <table className={`custom-table ${className || ""}`}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={`header-${index}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.cells.map((cell, cellIndex) => (
                <td key={`cell-${rowIndex}-${cellIndex}`}>
                  {typeof cell === "function" ? cell() : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
