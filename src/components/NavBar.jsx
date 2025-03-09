import React from "react";
import { CgAddR } from "react-icons/cg";

const NavBar = ({ addCard }) => {
    return (
        <div className="w-full h-14 bg-white flex items-center justify-between px-4 border-b-2 border-black">
            <h1 className="text-black text-lg font-semibold">Laddoo Studio</h1>
            <button
                onClick={addCard}
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              <CgAddR />
            </button>
        </div>
    );
};

export default NavBar;
