import React, { useEffect, useState } from "react";
import axios from "axios";

const categoryUrl = "https://api.chucknorris.io/jokes/categories";
const Categories = () => {
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = "";

  const fetchSpecificCategory = async () => {
    const allCategories = await axios.get(categoryUrl);
    setCategory(allCategories.data);
  };

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
  };

  useEffect(() => {
    fetchSpecificCategory();
  }, []);

  return (
    <div>
      <select name="categories" onChange={handleCategoryChange}>
        {category.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
