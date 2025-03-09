import React, { useState } from "react";
import axios from "axios";
import { Plus, Check } from "lucide-react";
import { toast } from "react-toastify";

const InputFields = ({ imageUploaded, imageFile }) => {
  const [title, setTitle] = useState("");
  const [song, setSong] = useState(null);
  const [songFile, setSongFile] = useState(null);
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // ✅ Track if submitted

  const handleSongUpload = (event) => {
    if (submitted) return; // Prevent upload after submission
    const file = event.target.files[0];
    if (file) {
      setSong(file.name);
      setSongFile(file);
    }
  };

  const handleSubmit = async () => {
    if (!title || !songFile || !lyrics || !imageFile) {
      alert("Please fill in all fields and upload valid files.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("lyrics", lyrics);
    formData.append("songFile", songFile);
    formData.append("image", imageFile);

    setLoading(true);
    try {
      await axios.post("https://laddooserver.onrender.com/api/songs/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Upload successful");
      setSubmitted(true); // ✅ Lock the form after submission
    } catch (error) {
      toast.error("Failed to upload");
      alert("Failed to upload. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-4 text-black font-bold mt-2">
      {/* Image Upload Status */}
      <div className="flex items-center justify-between border-b border-gray-500 pb-2">
        <span>Cover Photo</span>
        {imageUploaded ? <Check className="text-green-500" /> : <Plus className="text-black" />}
      </div>

      {/* Title Input */}
      <div className="flex items-center justify-between border-b border-gray-500 pb-2">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-black font-bold placeholder-black"
          disabled={submitted} // ✅ Disable after submission
        />
        {title && <Check className="text-green-500" />}
      </div>

      {/* Song Upload */}
      <div className="flex items-center justify-between border-b border-gray-500 pb-2">
        <label htmlFor="songUpload" className="cursor-pointer flex items-center gap-2 w-full">
          <span>{song ? song : "Upload Song"}</span>      
        </label>
        <input
          type="file"
          accept="audio/*, .mp3, .mp4, .wav, .m4a, .ogg, .webm"
          id="songUpload"
          className="hidden"
          onChange={handleSongUpload}
          disabled={submitted} // ✅ Disable after submission
        />
        {!song && <Plus className="text-black ml-auto" />}
        {song && <Check className="text-green-500 ml-auto" />}
      </div>

      {/* Lyrics Input */}
      <div className="flex items-center justify-between border-b border-gray-500 pb-2">
        <textarea
          placeholder="Enter Lyrics"
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-black font-bold placeholder-black"
          rows="2"
          disabled={submitted} // ✅ Disable after submission
        ></textarea>
        {lyrics && <Check className="text-green-500" />}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          disabled={submitted || loading}
          className={`px-6 py-2 text-white font-semibold text-lg rounded-lg shadow-md transition-transform ${submitted
              ? "bg-green-500 cursor-not-allowed"
              : loading
                ? "opacity-50 cursor-not-allowed"
                : "bg-elodoo-blue hover:scale-105"
            }`}
        >
          {submitted ? "✔ Submitted" : loading ? "Uploading..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default InputFields;
