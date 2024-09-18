import React, { useState } from "react";
import BingoCard from "./BingoCard";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

const BingoGen = ({occassion}) => {
  const [numCards, setNumCards] = useState(1);
  const [cards, setCards] = useState([]);

  // Function to generate multiple Bingo cards
  const generateBingoCards = () => {
    let newCards = [];
    for (let i = 0; i < numCards; i++) {
      newCards.push(generateBingoCard());
    }
    setCards(newCards);
  };

  // Function to generate a single Bingo card with a range of numbers
  const generateBingoCard = () => {
    const card = [];
    const range = 75; // Default Bingo range (1-75)
    for (let i = 0; i < 5; i++) {
      const column = [];
      for (let j = 0; j < 5; j++) {
        const number = Math.floor(Math.random() * range) + 1;
        column.push(number);
      }
      card.push(column);
    }
    return card;
  };

  // Function to export cards as images
  const exportCards = () => {
    cards.forEach((card, index) => {
      const node = document.getElementById(`bingo-card-${index}`);
      htmlToImage
        .toPng(node)
        .then((dataUrl) => {
          download(dataUrl, `bingo_card_${index + 1}.png`);
        })
        .catch((error) => {
          console.error("Failed to export image", error);
        });
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
       {occassion} Bingo Card Generator
      </h1>

      <div className="flex justify-center items-center mb-4">
        <label className="mr-2">Number of Cards:</label>
        <input
          type="number"
          className="border rounded px-2 py-1 w-16 text-center"
          value={numCards}
          onChange={(e) => setNumCards(e.target.value)}
          min="1"
        />
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={generateBingoCards}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Generate Cards
        </button>
        <button
          onClick={exportCards}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Export as Images
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <BingoCard key={index} card={card} cardId={`bingo-card-${index}`} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default BingoGen;
