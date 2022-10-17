import React, { useEffect, useState } from "react";
import axios from "axios";
import AboutImg from "./../../src/chuck norris.png";

const categoryUrl = "https://api.chucknorris.io/jokes/categories";

const Categories = () => {
  const [category, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("animal");
  const [categoryJoke, setCategoryJoke] = useState(null);

  const categoryJokeUrl = `https://api.chucknorris.io/jokes/random?category=${activeCategory}`;

  const fetchAllCategory = async () => {
    const allCategories = await axios.get(categoryUrl);
    setCategory(allCategories.data);
  };

  const getSpecificCategoryJoke = async () => {
    const getJoke = await axios.get(categoryJokeUrl);
    console.log(getJoke.data.value);
    setCategoryJoke(getJoke.data.value);
  };

  const handleCategoryChange = (e) => {
    setActiveCategory(e.target.value);
    console.log(activeCategory);
  };

  useEffect(() => {
    fetchAllCategory();
    getSpecificCategoryJoke();
  }, [activeCategory]);

  return (
    <div className="select-container">
      <h2 className="title">Choose Category </h2>
      <select
        className="select-box"
        name="categories"
        onChange={handleCategoryChange}
      >
        {category.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <br />
      <h1></h1>
      <section className="joke-section">
        <div className="joke-card">{categoryJoke}</div>
      </section>
      <div className="image">
        <img src={AboutImg} alt="" className="about__img" />
      </div>
    </div>
  );
};

export default Categories;
