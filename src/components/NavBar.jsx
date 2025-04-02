import React from "react";
import { CgAddR } from "react-icons/cg";

const NavBar = ({ addCard, openLinkChart }) => {
    return (
        <div className="w-full h-14 bg-white flex items-center justify-between px-4 border-b-2 border-black">
            <h1 className="text-black text-lg font-semibold">Laddoo Studio</h1>
            <div className="flex items-center gap-4">
                <button
                    onClick={openLinkChart} // Click to open Link Chart
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
                >
                    <span>Post Chart</span>
                </button>
                <button
                    onClick={addCard}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    <CgAddR />
                </button>
            </div>
        </div>
    );
};

export default NavBar;
