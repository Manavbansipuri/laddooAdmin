import React, { useState } from "react";
import { Plus } from "lucide-react";
import InputFields from "./InputFields";

const MusicCard = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[90%] h-[90%] bg-elodoo-yellow rounded-2xl p-4 flex flex-col items-center">
        <div className="relative w-full h-80 bg-gray-300 rounded-3xl flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
          ) : (
            <label htmlFor="imageUpload" className="absolute flex flex-col items-center justify-center cursor-pointer">
              <Plus className="w-12 h-12 text-gray-700" />
            </label>
          )}

          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="imageUpload"
            onChange={handleImageUpload}
          />
        </div>
        <InputFields imageUploaded={!!image} imageFile={imageFile} />
      </div>
    </div>
  );
};

export default MusicCard;
