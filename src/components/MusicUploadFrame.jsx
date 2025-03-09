import React, { useState } from "react";
import NavBar from "./NavBar";
import MusicCard from "./MusicCard";
import { toast } from "react-toastify";

const MusicUploadForm = () => {
  const [cards, setCards] = useState([1, 2, 3]); // Default 3 cards

  const addCard = () => {
    toast.success("New card added")
    setCards([...cards, cards.length + 1]); // Add 
  };

  return (
    <div className="w-full h-[100vh] bg-black text-white flex flex-col">
      {/* ✅ Use the existing NavBar & pass addCard function */}
      <NavBar addCard={addCard} />

      {/* ✅ Horizontal Scrollable Section */}
      <div className="overflow-x-auto flex p-3 scrollbar-hide">
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-[350px]">
            <MusicCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicUploadForm;
