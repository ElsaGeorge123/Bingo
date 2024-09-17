import React from "react";

const BingoCard = ({ card, cardId }) => {
  return (
    <div
      id={cardId}
      className=" -z-10 bingo-card p-4 border rounded-lg shadow-lg bg-green-100 relative overflow-hidden"
    >
      <table className="table-fixed w-full border-collapse">
        <thead>
          <tr>
            {['B', 'I', 'N', 'G', 'O'].map((letter, index) => (
              <th
                key={index}
                className="p-4 bg-red-600 text-white text-xl font-bold"
              >
                {letter}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {card.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((number, colIndex) => (
                <td
                  key={colIndex}
                  className={`border p-6 text-center text-lg font-semibold  ${
                    rowIndex === 2 && colIndex === 2
                      ? "bg-red-600 text-white" // Apply red background and white text to the FREE cell
                      : "bg-white text-green-700"
                  }`}
                >
                  {rowIndex === 2 && colIndex === 2 ? (
                    <h1>FREE</h1>
                  ) : (
                    number
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BingoCard;
