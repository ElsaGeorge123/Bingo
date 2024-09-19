import React, { useContext,useState,useEffect } from "react";
import GlobalContext from "../Context/GlobalContext";
const BingoCard = ({ card, cardId }) => {



  const [theme , setTheme] = useState({

  });

  const {occassion} = useContext(GlobalContext);

  useEffect(() => {
    
    if (occassion === "Christmas") {


      setTheme({
        head: "p-4 bg-red-600 text-white text-xl font-bold",
        tablePrimary: "bg-red-600 text-white",
        tableSecondary: "bg-white text-green-700",
      });
    } 
    
    else if (occassion === "Easter") {
      setTheme({
        head: "p-4 bg-pink-300 text-yellow-700 text-xl font-bold",  // Easter-like colors: pastel pink and yellow
        tablePrimary: "bg-pink-300 text-white",                     // Pink background for Easter theme
        tableSecondary: "bg-yellow-100 text-blue-600",              // Light yellow and blue for secondary cells
      });
    } 
    
    else if (occassion === "Halloween") {
      setTheme({
        head: "p-4 bg-orange-600 text-black text-xl font-bold",      // Halloween-like colors: orange and black
        tablePrimary: "bg-purple-800 text-white",                   // Dark purple background for primary cells
        tableSecondary: "bg-black text-orange-500",                 // Black background with orange text for secondary cells
      });
    }
  }, [occassion]);

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
                className={theme.head}
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
                      ? theme.tablePrimary// Apply red background and white text to the FREE cell
                      : theme.tableSecondary
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
