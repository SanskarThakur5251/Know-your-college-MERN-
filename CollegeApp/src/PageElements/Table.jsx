// components/Table.jsx
import React from "react";

function Table({ details }) {
  if (!details) return <p>No details available</p>;

  return (
    <table className="college-table" border="1" cellPadding="8">
      <tbody>
        {Object.entries(details).map(([key, value], idx) => (
          <tr key={idx}>
            <td><strong>{key}</strong></td>
            <td>
              {key.toLowerCase() === "website" ? (
                <a href={value} target="_blank" rel="noreferrer">{value}</a>
              ) : (
                value
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
