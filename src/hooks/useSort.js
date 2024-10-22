import { useState } from "react";

export const useSort = () => {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return { sortOption, handleSortChange };
};
