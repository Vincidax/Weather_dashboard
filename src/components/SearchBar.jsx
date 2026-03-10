import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6 w-full max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Enter city to learn its weather..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded w-full sm:w-auto transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
