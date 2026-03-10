const Header = ({ onHome }) => {
  return (
    <header className="bg-blue-600 text-white py-4 text-center flex justify-center items-center gap-4">
      <h1 className="text-2xl font-bold">Weather Dashboard</h1>
      <button
        onClick={onHome}
        className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors"
      >
        Home
      </button>
    </header>
  );
};

export default Header;
