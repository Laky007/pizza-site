import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full border
       border-stone-400 bg-yellow-100 px-4 py-2 text-stone-800 
         transition-all duration-300 placeholder:text-stone-400 
         focus:outline-none focus:ring focus:ring-yellow-300 
         focus:ring-offset-2 focus:ring-offset-stone-100
         sm:w-36 sm:focus:w-40"
      />
    </form>
  );
}

export default SearchOrder;
